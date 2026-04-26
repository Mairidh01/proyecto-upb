import { useState, useEffect } from 'react'
import useStore from '../../store/useStore'
import useDebounce from '../../hooks/useDebounce'

function SearchBar({ className = '' }) {
  const setSearchQuery = useStore((state) => state.setSearchQuery)
  const searchQuery = useStore((state) => state.searchQuery)

  const [localValue, setLocalValue] = useState(searchQuery)
  const debounced = useDebounce(localValue, 350)

  useEffect(() => {
    setSearchQuery(debounced)
  }, [debounced, setSearchQuery])

  const handleClear = () => {
    setLocalValue('')
    setSearchQuery('')
  }

  return (
    <div className={`relative ${className}`}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className="w-full rounded-lg border border-gray-300 pl-9 pr-8 py-2 text-sm
          text-gray-900 placeholder:text-gray-400 outline-none
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
          transition-colors duration-150"
      />
      {localValue && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label="Limpiar búsqueda"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default SearchBar
