import { useState } from 'react'
import Button from '../atoms/Button'
import useStore from '../../store/useStore'

function CheckoutPreview({ onClose }) {
  const cart = useStore((state) => state.cart)
  const cartTotal = useStore((state) => state.cartTotal)
  const clearCart = useStore((state) => state.clearCart)
  const toggleCart = useStore((state) => state.toggleCart)
  const isAuthenticated = useStore((state) => state.isAuthenticated)
  const user = useStore((state) => state.user)

  const [confirmed, setConfirmed] = useState(false)
  const [loading, setLoading] = useState(false)

  const subtotal = cartTotal()
  const shipping = subtotal > 100 ? 0 : 9.99
  const total = subtotal + shipping

  const handleConfirm = () => {
    setLoading(true)
    setTimeout(() => {
      setConfirmed(true)
      setLoading(false)
      clearCart()
    }, 1000)
  }

  const handleClose = () => {
    if (confirmed) toggleCart()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-xl font-bold text-gray-900">
            {confirmed ? 'Pedido confirmado' : 'Resumen del pedido'}
          </h2>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {confirmed ? (
          /* Estado de éxito */
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-10 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">¡Gracias por tu compra!</h3>
              <p className="text-sm text-gray-500 mt-1">
                {isAuthenticated
                  ? `Hola ${user?.name?.firstname}, tu pedido ha sido registrado.`
                  : 'Tu pedido ha sido registrado correctamente.'}
              </p>
            </div>
            <p className="text-xs text-gray-400">Recibirás un correo de confirmación pronto.</p>
            <Button onClick={handleClose} fullWidth>
              Seguir comprando
            </Button>
          </div>
        ) : (
          <>
            {/* Lista de items */}
            <div className="overflow-y-auto flex-1 px-6 py-4 divide-y divide-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 py-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain bg-gray-50 rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.title}</p>
                    <p className="text-xs text-gray-500">Cant: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Resumen de costos */}
            <div className="px-6 py-4 border-t border-gray-100 flex flex-col gap-2 shrink-0">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Envío</span>
                {shipping === 0
                  ? <span className="text-green-600 font-medium">Gratis</span>
                  : <span>${shipping.toFixed(2)}</span>
                }
              </div>
              {shipping === 0 && (
                <p className="text-xs text-green-600">Envío gratis en pedidos mayores a $100</p>
              )}
              <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Info del usuario */}
              {isAuthenticated && (
                <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-600 mt-1">
                  Pedido para: <strong>{user?.name?.firstname} {user?.name?.lastname}</strong>
                  <br />{user?.email}
                </div>
              )}

              <Button fullWidth size="lg" loading={loading} onClick={handleConfirm} className="mt-1">
                Confirmar pedido
              </Button>
              <Button fullWidth variant="ghost" size="sm" onClick={handleClose}>
                Volver al carrito
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CheckoutPreview
