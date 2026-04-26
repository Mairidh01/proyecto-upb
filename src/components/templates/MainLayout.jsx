import { Header, ShoppingCart, Footer } from '../organisms'

function MainLayout({ children, onLoginClick, onWishlistClick }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onLoginClick={onLoginClick} onWishlistClick={onWishlistClick} />
      <main className="flex-1">{children}</main>
      <Footer />
      <ShoppingCart />
    </div>
  )
}

export default MainLayout
