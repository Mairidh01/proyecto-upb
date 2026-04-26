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

function ProductCard({ product, onViewDetail }) {
  const addToCart = useStore((state) => state.addToCart)
  const addToast = useToastContext()

  const handleAddToCart = () => {
    addToCart(product)
    addToast(`"${product.title.slice(0, 30)}…" agregado al carrito`, 'success')
  }

  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Imagen */}
      <button
        onClick={() => onViewDetail?.(product)}
        className="relative h-48 sm:h-56 bg-gray-50 flex items-center justify-center p-4 cursor-pointer w-full"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="primary">
            {categoryLabels[product.category] ?? product.category}
          </Badge>
        </div>
      </button>

      {/* Contenido */}
      <div className="flex flex-col flex-1 gap-2 p-4">
        <h3
          className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug cursor-pointer hover:text-indigo-600 transition-colors"
          onClick={() => onViewDetail?.(product)}
        >
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 flex-1">
          {product.description}
        </p>

        <Rating rate={product.rating.rate} count={product.rating.count} />

        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price.toFixed(2)}
          </span>
          <Button size="sm" onClick={handleAddToCart}>
            Agregar
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
