import { useState, useMemo } from 'react'
import { ProductCard, ProductCardSkeleton } from '../molecules'
import Button from '../atoms/Button'
import ProductDetail from './ProductDetail'
import { useProducts, useCategories } from '../../hooks'
import useStore from '../../store/useStore'

const PAGE_SIZE = 6

function ProductGallery() {
  const searchQuery = useStore((state) => state.searchQuery)
  const selectedCategory = useStore((state) => state.selectedCategory)
  const setSelectedCategory = useStore((state) => state.setSelectedCategory)
  const [page, setPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { products, loading, error, source } = useProducts()
  const categories = useCategories()

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [products, searchQuery, selectedCategory])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setPage(1)
  }

  return (
    <>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Banner de fuente de datos */}
      {!loading && (
        <div className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg mb-4 w-fit ${
          source === 'api'
            ? 'bg-green-50 text-green-700'
            : 'bg-yellow-50 text-yellow-700'
        }`}>
          <span className={`w-2 h-2 rounded-full ${source === 'api' ? 'bg-green-500' : 'bg-yellow-500'}`} />
          {source === 'api' ? 'Datos en tiempo real · FakeStore API' : 'Datos locales · sin conexión'}
        </div>
      )}

      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={[
              'px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150',
              selectedCategory === cat.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            ].join(' ')}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skeletons de carga */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error no-fatal (fallback activo) */}
      {error && !loading && (
        <p className="text-xs text-yellow-600 bg-yellow-50 rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      {/* Grid de productos */}
      {!loading && paginated.length > 0 && (
        <>
          <p className="text-sm text-gray-500 mb-4">
            {filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado
            {filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {paginated.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetail={setSelectedProduct} />
            ))}
          </div>
        </>
      )}

      {/* Sin resultados */}
      {!loading && paginated.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-gray-400">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <p className="text-base font-medium">Sin resultados para tu búsqueda</p>
          <p className="text-sm">Intenta con otras palabras o cambia la categoría</p>
        </div>
      )}

      {/* Paginación */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            ← Anterior
          </Button>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={[
                  'w-8 h-8 rounded-lg text-sm font-medium transition-colors',
                  currentPage === i + 1
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                ].join(' ')}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <Button
            variant="secondary"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Siguiente →
          </Button>
        </div>
      )}
    </section>

    {selectedProduct && (
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    )}
    </>
  )
}

export default ProductGallery
