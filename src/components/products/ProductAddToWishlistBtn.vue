<script setup lang="ts">
import { useSnackbarStore } from '@/stores/snackbar'
import { useWishlistStore } from '@/stores/wishlist'
import type { Product } from '@/types/product'
import { computed } from 'vue'

const props = defineProps<{
  product: Product
}>()

const wishlistStore = useWishlistStore()
const snackbarStore = useSnackbarStore()

const isInWishlist = computed(() => wishlistStore.products.some((p) => p.id === props.product.id))

const handleWishlistToggle = () => {
  wishlistStore.toggleWishlist(props.product)
  const message = isInWishlist.value ? 'Product added to wishlist' : 'Product removed from wishlist'
  snackbarStore.showToast(message, isInWishlist.value ? 'success' : 'error')
}
</script>

<template>
  <v-btn
    :color="isInWishlist ? 'red' : 'grey-lighten-1'"
    :icon="isInWishlist ? 'mdi-heart' : 'mdi-heart-outline'"
    variant="text"
    class="ma-2"
    @click="handleWishlistToggle"
  >
  </v-btn>
</template>
