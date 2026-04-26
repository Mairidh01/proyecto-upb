function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Marca */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛍️</span>
              <span className="font-bold text-lg text-indigo-600">Tienda Online</span>
            </div>
            <p className="text-sm text-gray-500">
              Tu destino de compras con los mejores productos y precios.
            </p>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Categorías</h4>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-500">
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Electrónica</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Joyería</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Ropa Hombre</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Ropa Mujer</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Información</h4>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-500">
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Sobre nosotros</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Política de privacidad</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Términos y condiciones</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Contacto</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {year} Tienda Online. Todos los derechos reservados.</p>
          <p>Datos provistos por <a href="https://fakestoreapi.com" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">FakeStore API</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
