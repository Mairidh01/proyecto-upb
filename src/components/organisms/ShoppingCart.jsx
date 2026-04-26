import { useState } from 'react'
import CartItem from '../molecules/CartItem'
import Button from '../atoms/Button'
import CheckoutPreview from './CheckoutPreview'
import useStore from '../../store/useStore'

function ShoppingCart() {
  const isCartOpen = useStore((state) => state.isCartOpen)
  const toggleCart = useStore((state) => state.toggleCart)
  const cart = useStore((state) => state.cart)
  const cartTotal = useStore((state) => state.cartTotal)
  const clearCart = useStore((state) => state.clearCart)
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Panel lateral */}
      <aside
        className={[
          'fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50',
          'flex flex-col shadow-2xl transition-transform duration-300 ease-in-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Header del carrito */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">
            Carrito
            {cart.length > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({cart.length} {cart.length === 1 ? 'artículo' : 'artículos'})
              </span>
            )}
          </h2>
          <button
            onClick={toggleCart}
            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Cerrar carrito"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              <p className="font-medium text-base">Tu carrito está vacío</p>
              <p className="text-sm text-center">Agrega productos para empezar a comprar</p>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer del carrito */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 flex flex-col gap-3 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">
                ${cartTotal().toFixed(2)}
              </span>
            </div>
            <Button fullWidth size="lg" onClick={() => setShowCheckout(true)}>
              Finalizar compra
            </Button>
            <Button fullWidth variant="ghost" size="sm" onClick={clearCart}>
              Vaciar carrito
            </Button>
          </div>
        )}
      </aside>

      {showCheckout && (
        <CheckoutPreview onClose={() => setShowCheckout(false)} />
      )}
    </>
  )
}

export default ShoppingCart
