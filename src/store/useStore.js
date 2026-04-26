import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      // --- Cart ---
      cart: [],
      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id)
        if (existing) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }))
        } else {
          set((state) => ({ cart: [...state.cart, { ...product, quantity: 1 }] }))
        }
      },
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ cart: [] }),
      cartTotal: () =>
        get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      cartCount: () =>
        get().cart.reduce((sum, item) => sum + item.quantity, 0),

      // --- Auth ---
      user: null,
      isAuthenticated: false,
      login: (userData) => set({ user: userData, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),

      // --- Wishlist ---
      wishlist: [],
      toggleWishlist: (product) => {
        const exists = get().wishlist.find((p) => p.id === product.id)
        set((state) => ({
          wishlist: exists
            ? state.wishlist.filter((p) => p.id !== product.id)
            : [...state.wishlist, product],
        }))
      },
      isWishlisted: (productId) =>
        get().wishlist.some((p) => p.id === productId),

      // --- UI ---
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      selectedCategory: 'all',
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      isCartOpen: false,
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
    }),
    {
      name: 'tienda-online-storage',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        wishlist: state.wishlist,
      }),
    }
  )
)

export default useStore
