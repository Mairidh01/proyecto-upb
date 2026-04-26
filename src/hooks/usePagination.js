import { useState, useEffect } from 'react'

function usePagination(items, pageSize = 6) {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const paginated = items.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  useEffect(() => {
    setPage(1)
  }, [items.length])

  const goTo = (n) => {
    setPage(Math.min(Math.max(1, n), totalPages))
    document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const next = () => goTo(currentPage + 1)
  const prev = () => goTo(currentPage - 1)

  return { paginated, currentPage, totalPages, goTo, next, prev }
}

export default usePagination
