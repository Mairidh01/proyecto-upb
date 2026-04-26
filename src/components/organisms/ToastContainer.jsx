import { createPortal } from 'react-dom'
import Toast from '../atoms/Toast'

function ToastContainer({ toasts, onRemove }) {
  return createPortal(
    <div className="fixed bottom-6 right-4 z-[9999] flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>,
    document.body
  )
}

export default ToastContainer
