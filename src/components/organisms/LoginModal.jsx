import { useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { users } from '../../data'
import useStore from '../../store/useStore'
import { useToastContext } from '../../context/ToastContext'

function LoginModal({ onClose }) {
  const login = useStore((state) => state.login)
  const addToast = useToastContext()
  const [form, setForm] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.username.trim()) next.username = 'El usuario es requerido'
    if (!form.password.trim()) next.password = 'La contraseña es requerida'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setTimeout(() => {
      const found = users.find(
        (u) => u.username === form.username && u.password === form.password
      )
      if (found) {
        const { password: _, ...safeUser } = found
        login(safeUser)
        addToast(`¡Bienvenido, ${safeUser.name.firstname}! 👋`, 'success')
        onClose()
      } else {
        setErrors({ general: 'Usuario o contraseña incorrectos' })
      }
      setLoading(false)
    }, 700)
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: '', general: '' }))
  }

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="login-title" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 flex flex-col gap-5">
        {/* Cabecera */}
        <div className="flex items-center justify-between">
          <div>
            <h2 id="login-title" className="text-xl font-bold text-gray-900">Iniciar sesión</h2>
            <p className="text-sm text-gray-500 mt-0.5">Accede a tu cuenta</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Credenciales de prueba */}
        <div className="bg-indigo-50 rounded-lg px-4 py-3 text-xs text-indigo-700 space-y-1">
          <p className="font-semibold mb-1">Usuarios de prueba:</p>
          <p>👤 <strong>admin</strong> / admin123</p>
          <p>👤 <strong>johnd</strong> / johnd123</p>
          <p>👤 <strong>marias</strong> / marias123</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {errors.general && (
            <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">
              {errors.general}
            </p>
          )}
          <Input
            id="username"
            name="username"
            label="Usuario"
            placeholder="Ej: johnd"
            value={form.username}
            onChange={handleChange('username')}
            error={errors.username}
          />
          <Input
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange('password')}
            error={errors.password}
          />
          <Button type="submit" fullWidth loading={loading}>
            Ingresar
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
