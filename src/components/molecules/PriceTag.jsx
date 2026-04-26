function PriceTag({ price, discountPct = 0, size = 'md' }) {
  const original = discountPct > 0 ? price / (1 - discountPct / 100) : null
  const textSize = size === 'lg' ? 'text-3xl' : 'text-lg'

  return (
    <div className="flex items-baseline gap-2 flex-wrap">
      <span className={`${textSize} font-bold text-indigo-600`}>
        ${price.toFixed(2)}
      </span>
      {original && (
        <>
          <span className="text-sm text-gray-400 line-through">
            ${original.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
            -{discountPct}%
          </span>
        </>
      )}
    </div>
  )
}

export default PriceTag
