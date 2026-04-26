import { useState, useEffect } from 'react'
import { categories as mockCategories } from '../data'

const API_URL = `${import.meta.env.VITE_API_URL}/products/categories`

const labelMap = {
  electronics: 'Electrónica',
  jewelery: 'Joyería',
  "men's clothing": 'Ropa Hombre',
  "women's clothing": 'Ropa Mujer',
}

function useCategories() {
  const [categories, setCategories] = useState(mockCategories)

  useEffect(() => {
    const controller = new AbortController()

    const fetchCategories = async () => {
      try {
        const res = await fetch(API_URL, { signal: controller.signal })
        if (!res.ok) throw new Error()
        const data = await res.json()
        const mapped = [
          { id: 'all', label: 'Todos' },
          ...data.map((cat) => ({ id: cat, label: labelMap[cat] ?? cat })),
        ]
        setCategories(mapped)
      } catch {
        // Mantiene mockCategories como fallback
      }
    }

    fetchCategories()
    return () => controller.abort()
  }, [])

  return categories
}

export default useCategories
