import { useState } from 'react'
import { MainLayout } from './components/templates'
import { ProductGallery, LoginModal, ToastContainer } from './components/organisms'
import ScrollToTop from './components/atoms/ScrollToTop'
import { ToastContext } from './context/ToastContext'
import useToast from './hooks/useToast'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const { toasts, addToast, removeToast } = useToast()

  return (
    <ToastContext.Provider value={addToast}>
      <MainLayout onLoginClick={() => setShowLogin(true)}>
        <ProductGallery />
        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      </MainLayout>
      <ScrollToTop />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  )
}

export default App
