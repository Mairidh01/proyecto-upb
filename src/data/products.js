const products = [
  {
    id: 1,
    title: 'Laptop Ultradelgada 15"',
    price: 899.99,
    description:
      'Procesador Intel Core i7, 16GB RAM, SSD 512GB. Ideal para trabajo y estudio con batería de larga duración.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81fAn6S6FHL._AC_SX679_.jpg',
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: 'Auriculares Inalámbricos Pro',
    price: 149.99,
    description:
      'Cancelación de ruido activa, 30 horas de batería y sonido Hi-Fi. Compatible con todos los dispositivos Bluetooth.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: { rate: 4.7, count: 85 },
  },
  {
    id: 3,
    title: 'Smartwatch Deportivo',
    price: 199.99,
    description:
      'Monitor de frecuencia cardíaca, GPS integrado, resistente al agua IP68. Compatible con iOS y Android.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg',
    rating: { rate: 4.3, count: 64 },
  },
  {
    id: 4,
    title: 'Cámara Mirrorless 24MP',
    price: 749.99,
    description:
      'Sensor CMOS de 24 megapíxeles, grabación 4K, estabilización de imagen óptica y pantalla táctil abatible.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    rating: { rate: 4.8, count: 42 },
  },
  {
    id: 5,
    title: 'Collar de Oro 18k con Diamante',
    price: 450.0,
    description:
      'Cadena de oro de 18 kilates con colgante de diamante natural de 0.25 quilates certificado. Estuche de regalo incluido.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg',
    rating: { rate: 4.9, count: 31 },
  },
  {
    id: 6,
    title: 'Pulsera de Plata con Zafiros',
    price: 120.0,
    description:
      'Pulsera de plata 925 con zafiros azules naturales. Diseño artesanal, cierre de seguridad. Talla ajustable.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg',
    rating: { rate: 4.4, count: 58 },
  },
  {
    id: 7,
    title: 'Anillo de Compromiso Platino',
    price: 599.0,
    description:
      'Anillo de platino con diamante central de 0.5 quilates y seis diamantes laterales. Certificado GIA incluido.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_FMwebp_QL65_.jpg',
    rating: { rate: 5.0, count: 17 },
  },
  {
    id: 8,
    title: 'Chaqueta de Cuero para Hombre',
    price: 189.99,
    description:
      'Chaqueta de cuero genuino estilo biker con forro interior, bolsillos con cremallera y cierre metálico. Tallas S-XXL.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    rating: { rate: 4.2, count: 93 },
  },
  {
    id: 9,
    title: 'Camiseta Slim Fit Pack x3',
    price: 39.99,
    description:
      'Pack de 3 camisetas de algodón pima 100%, corte slim fit, colores básicos (blanco, negro, gris). Lavado a máquina.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: { rate: 4.1, count: 214 },
  },
  {
    id: 10,
    title: 'Pantalón Chino Elástico',
    price: 59.99,
    description:
      'Pantalón chino de tela elástica, corte slim, disponible en beige, azul marino y verde oliva. Tallas 28-38.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: { rate: 3.9, count: 177 },
  },
  {
    id: 11,
    title: 'Vestido Floral de Verano',
    price: 79.99,
    description:
      'Vestido midi con estampado floral, escote en V, mangas cortas y falda con vuelo. Disponible en tallas XS-XL.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71HblAHs1xL._AC_UY879_-2.jpg',
    rating: { rate: 4.6, count: 132 },
  },
  {
    id: 12,
    title: 'Blazer Ejecutivo para Mujer',
    price: 124.99,
    description:
      'Blazer de tela sastrera con forro, dos bolsillos laterales y botones dorados. Ideal para oficina y eventos formales.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    rating: { rate: 4.4, count: 76 },
  },
  {
    id: 13,
    title: 'Zapatillas Running Mujer',
    price: 95.0,
    description:
      'Zapatillas con amortiguación superior, suela de caucho y malla transpirable. Ligeras y cómodas para running diario.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71HblAHs1xL._AC_UY879_-2.jpg',
    rating: { rate: 4.3, count: 99 },
  },
  {
    id: 14,
    title: 'Tablet 10" con Teclado',
    price: 329.99,
    description:
      'Tablet con pantalla IPS de 10 pulgadas, 4GB RAM, 64GB almacenamiento, teclado magnético incluido. Batería 8000mAh.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: { rate: 4.0, count: 55 },
  },
  {
    id: 15,
    title: 'Pendientes de Perlas Naturales',
    price: 85.0,
    description:
      'Pendientes de gancho con perlas naturales de agua dulce de 8mm, monturas de plata de ley. Presentación en caja.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg',
    rating: { rate: 4.7, count: 44 },
  },
]

export default products
