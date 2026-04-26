# 🛍️ Tienda Online — Reto Fullstack

Aplicación de e-commerce construida con React + Vite siguiendo la arquitectura **Atomic Design**. Consume la [FakeStore API](https://fakestoreapi.com) en tiempo real con fallback a datos locales.

**Demo en vivo:** [https://Mairidh01.github.io/proyecto-upb](https://Mairidh01.github.io/proyecto-upb)

---

## Tecnologías

| Capa | Tecnología |
|---|---|
| Frontend | React 19 + Vite 8 |
| Estilos | Tailwind CSS v4 |
| Estado | Zustand con `persist` middleware |
| API | FakeStore API |
| Deploy | GitHub Pages |

---

## Arquitectura Atomic Design

```
src/
├── components/
│   ├── atoms/        # Button, Input, Badge, Rating, Skeleton, Toast, WishlistButton, ScrollToTop
│   ├── molecules/    # ProductCard, SearchBar, CartItem, ProductCardSkeleton, PriceTag
│   ├── organisms/    # Header, ProductGallery, ShoppingCart, LoginModal, CheckoutPreview,
│   │                 # ProductDetail, WishlistPanel, HeroBanner, Footer, ToastContainer, ErrorBoundary
│   └── templates/    # MainLayout
├── context/          # ToastContext
├── data/             # Mockdata (products, categories, users)
├── hooks/            # useProducts, useCategories, useDebounce, usePagination, useToast
└── store/            # Zustand store (cart, auth, wishlist, UI)
```

---

## Funcionalidades

- Catálogo de productos desde FakeStore API con fallback a mockdata
- Búsqueda en tiempo real con debounce (350ms)
- Filtro por categoría y precio máximo deslizable
- Ordenamiento por precio, valoración y nombre
- Carrito de compras persistente con controles de cantidad
- Panel de favoritos (wishlist) persistente
- Autenticación simulada con usuarios de prueba
- Checkout con formulario de dirección y número de pedido
- Modal de detalle de producto
- Toast notifications con animación slide-in
- Header responsive con menú hamburguesa en mobile
- Hero banner con accesos rápidos por categoría
- Skeleton loading mientras carga la API
- Indicador de fuente de datos (API vs local)
- Scroll to top automático al paginar
- ErrorBoundary global

---

## Instalación

```bash
git clone https://github.com/Mairidh01/proyecto-upb.git
cd proyecto-upb
npm install
cp .env.example .env
npm run dev
```

## Variables de entorno

```
VITE_API_URL=https://fakestoreapi.com
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run deploy` | Publica en GitHub Pages |

---

## Usuarios de prueba

| Usuario | Contraseña | Rol |
|---|---|---|
| admin | admin123 | Administrador |
| johnd | johnd123 | Cliente |
| marias | marias123 | Cliente |
