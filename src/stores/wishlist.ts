import type { Product } from '@/types/product'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    products: useStorage<Product[]>('wishlist', []),
  }),

  actions: {
    toggleWishlist(product: Product) {
      const existingItem = this.products.find((item) => product.id === item.id)

      if (existingItem) {
        this.products = this.products.filter((item) => product.id !== item.id)
        return
      }

      this.products.push(product)
    },
  },

  getters: {
    totalItems: (state) => state.products.length,
  },
})
