import { useState } from 'react'
import { MainLayout } from './components/templates'
import { ProductGallery, LoginModal } from './components/organisms'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <MainLayout onLoginClick={() => setShowLogin(true)}>
      <ProductGallery />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </MainLayout>
  )
}

export default App
