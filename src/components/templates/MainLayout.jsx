import { Header, ShoppingCart } from '../organisms'

function MainLayout({ children, onLoginClick }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLoginClick={onLoginClick} />
      <main className="pb-12">{children}</main>
      <ShoppingCart />
    </div>
  )
}

export default MainLayout
