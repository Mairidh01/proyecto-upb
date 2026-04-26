import SearchBar from '../molecules/SearchBar'
import Badge from '../atoms/Badge'
import useStore from '../../store/useStore'

function Header({ onLoginClick }) {
  const toggleCart = useStore((state) => state.toggleCart)
  const cartCount = useStore((state) => state.cartCount)
  const isAuthenticated = useStore((state) => state.isAuthenticated)
  const user = useStore((state) => state.user)
  const logout = useStore((state) => state.logout)

  const count = cartCount()

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🛍️</span>
            <span className="font-bold text-lg text-indigo-600 hidden sm:block">
              Tienda Online
            </span>
          </a>

          {/* SearchBar — ocupa el espacio restante */}
          <div className="flex-1 max-w-xl mx-auto">
            <SearchBar />
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Carrito */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Abrir carrito"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white
                  text-xs font-bold rounded-full flex items-center justify-center">
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </button>

            {/* Usuario */}
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {user?.name?.firstname}
                </span>
                <button
                  onClick={logout}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Cerrar sesión"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  text-sm font-medium text-indigo-600 border border-indigo-200
                  hover:bg-indigo-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Ingresar
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
