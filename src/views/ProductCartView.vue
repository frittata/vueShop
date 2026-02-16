<script setup lang="ts">
import { computed } from 'vue'
import ProductCartElement from '@/components/products/ProductCartElement.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const products = computed(() => cartStore.items)
const totalPrice = computed(() => cartStore.totalPrice)
</script>

<template>
  <v-container>
    <div class="text-h4 mb-4">Your cart</div>
    <div v-if="products.length === 0">
      <div>Empty cart</div>
    </div>
    <div v-else>
      <ProductCartElement v-for="item in products" :key="item.product.id" :item="item" />
      <div v-if="totalPrice > 0" class="text-right mt-4">
        <v-btn variant="elevated" color="primary">
          {{ `Checkout for ${totalPrice.toFixed(2)} €` }}
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
