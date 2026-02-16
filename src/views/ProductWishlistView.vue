<script setup lang="ts">
import { computed } from 'vue'
import { useWishlistStore } from '@/stores/wishlist'
import ProductCard from '@/components/products/ProductCard.vue'
import BackBtn from '@/components/BackBtn.vue'

const wishlistStore = useWishlistStore()
const products = computed(() => wishlistStore.products)
</script>

<template>
  <v-container>
    <BackBtn route="/" label="All products" />
    <div class="text-h4 mb-4">Wishlist</div>
    <v-row>
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </v-row>
  </v-container>
</template>
