<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getProduct } from '@/api/fakeStore'
import type { Product } from '@/types/product'
import ProductDetailsSection from '@/components/products/ProductDetailsSection.vue'

const route = useRoute()
const productId = Number(route.params.id)

const product = ref<Product | null>(null)
const loading = ref(true)

onMounted(async () => {
  product.value = await getProduct(productId)
  loading.value = false
})
</script>

<template>
  <v-container
    ><div v-if="loading">
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </div>
    <div v-else-if="product">
      <ProductDetailsSection :product="product" /></div
  ></v-container>
</template>
