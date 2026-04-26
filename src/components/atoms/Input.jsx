function Input({
  id,
  name,
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  disabled = false,
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={[
          'w-full rounded-lg border px-3 py-2 text-sm text-gray-900',
          'placeholder:text-gray-400 outline-none transition-colors duration-150',
          'disabled:bg-gray-100 disabled:cursor-not-allowed',
          error
            ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
            : 'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200',
        ]
          .join(' ')}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default Input
