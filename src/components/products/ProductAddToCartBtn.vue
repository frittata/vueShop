<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { useSnackbarStore } from '@/stores/snackbar'
import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()

const cartStore = useCartStore()
const snackbarStore = useSnackbarStore()

const addToCart = (product: Product) => {
  snackbarStore.showToast('Product added to cart', 'success')
  cartStore.addToCart(product)
}
</script>

<template>
  <v-btn
    color="primary"
    prepend-icon="mdi-cart"
    variant="elevated"
    class="ma-2"
    @click="addToCart(product)"
  >
    {{ `${product.price.toFixed(2)} €` }}
  </v-btn>
</template>
