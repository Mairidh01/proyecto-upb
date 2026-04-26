import { Header, ProductGallery, ShoppingCart } from './components/organisms'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLoginClick={() => {}} />
      <main>
        <ProductGallery />
      </main>
      <ShoppingCart />
    </div>
  )
}

export default App
