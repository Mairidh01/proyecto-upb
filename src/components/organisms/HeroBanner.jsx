import useStore from '../../store/useStore'

function HeroBanner() {
  const setSelectedCategory = useStore((state) => state.setSelectedCategory)

  const highlights = [
    { id: 'electronics', emoji: '💻', label: 'Electrónica' },
    { id: 'jewelery', emoji: '💍', label: 'Joyería' },
    { id: "men's clothing", emoji: '👔', label: 'Hombre' },
    { id: "women's clothing", emoji: '👗', label: 'Mujer' },
  ]

  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Descubre los mejores
              <br className="hidden sm:block" />
              <span className="text-yellow-300"> productos</span>
            </h1>
            <p className="mt-3 text-indigo-200 text-base sm:text-lg max-w-xl mx-auto">
              Electrónica, moda y joyería al mejor precio. Envío gratis en pedidos mayores a $100.
            </p>
          </div>

          {/* Categorías rápidas */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {highlights.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id)
                  document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur
                  px-4 py-2 rounded-full text-sm font-medium transition-colors border border-white/20"
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Badges de confianza */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-indigo-200 mt-2">
            <span className="flex items-center gap-1">✓ Pago seguro</span>
            <span className="flex items-center gap-1">✓ Devoluciones gratis</span>
            <span className="flex items-center gap-1">✓ Soporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
