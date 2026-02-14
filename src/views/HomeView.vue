<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProducts } from '@/api/fakeStore'
import ProductCard from '@/components/products/ProductCard.vue'
import type { Product } from '@/types/product'

const products = ref<Product[]>([])
const loading = ref<boolean>(true)

onMounted(async () => {
  products.value = await getProducts()
  loading.value = false
})
</script>

<template>
  <v-container>
    <div class="text-h4 mb-4">All Products</div>
    <div v-if="loading">
      <v-row>
        <v-col v-for="i in 12" :key="i" lg="3" md="4" sm="6" cols="12"
          ><v-skeleton-loader type="card"
        /></v-col>
      </v-row>
    </div>
    <div v-else-if="products">
      <v-row>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </v-row>
    </div>
  </v-container>
</template>
