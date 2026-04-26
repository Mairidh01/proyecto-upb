import { useState, useMemo } from 'react'
import { ProductCard } from '../molecules'
import Button from '../atoms/Button'
import { products, categories } from '../../data'
import useStore from '../../store/useStore'

const PAGE_SIZE = 6

function ProductGallery() {
  const searchQuery = useStore((state) => state.searchQuery)
  const selectedCategory = useStore((state) => state.selectedCategory)
  const setSelectedCategory = useStore((state) => state.setSelectedCategory)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase()
    return products.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory
      const matchesSearch =
        !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setPage(1)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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

      {/* Contador de resultados */}
      <p className="text-sm text-gray-500 mb-4">
        {filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado
        {filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid de productos */}
      {paginated.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {paginated.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
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
      {totalPages > 1 && (
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
  )
}

export default ProductGallery
