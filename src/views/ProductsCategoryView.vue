<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { getProductsByCategory } from '@/api/fakeStore'
import type { Product } from '@/types/product'
import ProductCard from '@/components/products/ProductCard.vue'
import BackBtn from '@/components/BackBtn.vue'

const route = useRoute()
const categoryName = ref(route.params.id?.toString())
const products = ref<Product[]>([])
const loading = ref(true)

const fetchProducts = async (categoryName: string) => {
  loading.value = true
  products.value = await getProductsByCategory(categoryName)
  loading.value = false
}

watch(
  () => route.params.id?.toString(),
  async (category) => {
    if (category) {
      categoryName.value = category
      await fetchProducts(category.toString())
    }
  },
  { immediate: true },
)
</script>

<template>
  <v-container>
    <BackBtn route="/" label="All products" />
    <div class="text-h4 mb-4">{{ categoryName }}</div>
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
