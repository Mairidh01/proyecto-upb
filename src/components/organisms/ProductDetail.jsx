import Button from '../atoms/Button'
import Badge from '../atoms/Badge'
import Rating from '../atoms/Rating'
import useStore from '../../store/useStore'
import { useToastContext } from '../../context/ToastContext'

const categoryLabels = {
  electronics: 'Electrónica',
  jewelery: 'Joyería',
  "men's clothing": 'Ropa Hombre',
  "women's clothing": 'Ropa Mujer',
}

function ProductDetail({ product, onClose }) {
  const addToCart = useStore((state) => state.addToCart)
  const addToast = useToastContext()

  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product)
    addToast(`"${product.title.slice(0, 30)}…" agregado al carrito`, 'success')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
          <Badge variant="primary">
            {categoryLabels[product.category] ?? product.category}
          </Badge>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
            aria-label="Cerrar detalle"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cuerpo */}
        <div className="flex flex-col sm:flex-row gap-6 p-6">
          {/* Imagen */}
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6 sm:w-64 shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mix-blend-multiply"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              {product.title}
            </h2>

            <Rating rate={product.rating.rate} count={product.rating.count} />

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-3xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </span>
              <Button size="lg" onClick={handleAddToCart}>
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
