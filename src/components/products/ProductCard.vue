<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <v-col lg="3" md="4" sm="6" cols="12">
    <v-card elevation="2">
      <v-img :src="product.image" :alt="product.title" height="200" class="ma-4" />
      <v-card-item>
        <v-card-title>
          {{ product.title }}
        </v-card-title>
        <v-rating
          readonly
          :length="5"
          :size="20"
          :model-value="product.rating.rate"
          active-color="orange-lighten-1"
          color="grey-lighten-1"
          half-increments
        />
      </v-card-item>
      <v-card-actions class="justify-space-between">
        <v-btn
          :to="`/product/${product.id}`"
          color="primary"
          variant="tonal"
          class="ma-2"
          icon="mdi-arrow-right"
        />
      </v-card-actions>
    </v-card>
  </v-col>
</template>
