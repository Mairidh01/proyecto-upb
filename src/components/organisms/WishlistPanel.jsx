import Button from '../atoms/Button'
import useStore from '../../store/useStore'
import { useToastContext } from '../../context/ToastContext'

function WishlistPanel({ onClose }) {
  const wishlist = useStore((state) => state.wishlist)
  const toggleWishlist = useStore((state) => state.toggleWishlist)
  const addToCart = useStore((state) => state.addToCart)
  const addToast = useToastContext()

  const handleAddToCart = (product) => {
    addToCart(product)
    addToast(`"${product.title.slice(0, 30)}…" agregado al carrito`, 'success')
  }

  const handleRemove = (product) => {
    toggleWishlist(product)
    addToast('Eliminado de favoritos', 'info')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 className="text-lg font-bold text-gray-900">
              Mis favoritos
              {wishlist.length > 0 && (
                <span className="ml-2 text-sm font-normal text-gray-400">
                  ({wishlist.length})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 gap-3 text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="font-medium">No tienes favoritos aún</p>
              <p className="text-sm text-center">Presiona el corazón en cualquier producto</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-gray-100">
              {wishlist.map((product) => (
                <div key={product.id} className="flex items-center gap-4 py-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-14 h-14 object-contain bg-gray-50 rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
                      {product.title}
                    </p>
                    <p className="text-sm font-bold text-indigo-600 mt-0.5">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <Button size="sm" onClick={() => handleAddToCart(product)}>
                      Al carrito
                    </Button>
                    <button
                      onClick={() => handleRemove(product)}
                      className="text-xs text-red-400 hover:text-red-600 text-center transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WishlistPanel
