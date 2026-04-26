import Button from '../atoms/Button'
import useStore from '../../store/useStore'

function CartItem({ item }) {
  const updateQuantity = useStore((state) => state.updateQuantity)
  const removeFromCart = useStore((state) => state.removeFromCart)

  return (
    <div className="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-contain bg-gray-50 rounded-lg shrink-0"
      />
      <div className="flex flex-col flex-1 gap-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
          {item.title}
        </p>
        <span className="text-sm font-bold text-indigo-600">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="w-6 h-6 rounded-full border border-gray-300 text-gray-600
              flex items-center justify-center hover:bg-gray-100 text-sm font-bold"
          >
            −
          </button>
          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-6 h-6 rounded-full border border-gray-300 text-gray-600
              flex items-center justify-center hover:bg-gray-100 text-sm font-bold"
          >
            +
          </button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromCart(item.id)}
            className="ml-auto !text-red-400 hover:!bg-red-50 !px-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
