<script setup lang="ts">
import type { Product } from '@/types/product'
import ProductAddToCartBtn from './ProductAddToCartBtn.vue'
import BackBtn from '../BackBtn.vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <back-btn />
  <v-row no-gutters>
    <v-col md="4" cols="12" class="d-flex align-items-center pa-2">
      <v-img aspect-ratio="16/9" :src="product.image"></v-img>
    </v-col>
    <v-col md="8" cols="12" class="pa-4">
      <v-chip color="primary" :to="`/category/${product.category}`">
        {{ product.category }}
      </v-chip>
      <div class="text-h4 mt-4">{{ product.title }}</div>
      <div class="d-flex mb-4 mt-2">
        <v-rating
          readonly
          :length="5"
          :size="26"
          :model-value="product.rating.rate"
          active-color="orange-lighten-1"
          color="grey-lighten-1"
          half-increments
        />
        <div class="mt-1 ml-1">{{ product.rating.count }} recensioni</div>
      </div>
      <v-card title="Product details" :text="product.description" variant="tonal">
        <v-card-actions class="justify-end">
          <product-add-to-cart-btn :product="product" />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
