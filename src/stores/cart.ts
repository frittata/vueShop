import type { CartProduct, Product } from '@/types/product'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: useStorage<CartProduct[]>('shopping-cart', []),
  }),

  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.product.id === product.id)

      if (existingItem) {
        existingItem.count++
      } else {
        this.items.push({ product, count: 1 })
      }
    },

    removeFromCart(id: number) {
      this.items = this.items.filter((item) => item.product.id !== id)
    },

    decrementQuantity(id: number) {
      const item = this.items.find((item) => item.product.id === id)
      if (item) {
        if (item.count > 1) {
          item.count--
        } else {
          this.removeFromCart(id)
        }
      }
    },

    clearCart() {
      this.items = []
    },
  },

  getters: {
    totalItems: (state) => state.items.reduce((acc, item) => acc + item.count, 0),
    totalPrice: (state) =>
      state.items.reduce((acc, item) => acc + item.product.price * item.count, 0),
  },
})
