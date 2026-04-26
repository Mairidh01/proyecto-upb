import { useState, useEffect } from 'react'
import { products as mockProducts } from '../data'

const API_URL = 'https://fakestoreapi.com/products'

function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [source, setSource] = useState('api')

  useEffect(() => {
    const controller = new AbortController()

    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(API_URL, { signal: controller.signal })
        if (!res.ok) throw new Error(`Error ${res.status}`)
        const data = await res.json()
        setProducts(data)
        setSource('api')
      } catch (err) {
        if (err.name === 'AbortError') return
        // Fallback silencioso al mockdata
        setProducts(mockProducts)
        setSource('mock')
        setError('No se pudo conectar con la API. Mostrando datos locales.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
    return () => controller.abort()
  }, [])

  return { products, loading, error, source }
}

export default useProducts
