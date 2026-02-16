<script setup lang="ts">
import type { CartProduct } from '@/types/product'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useSnackbarStore } from '@/stores/snackbar'
import { computed } from 'vue'

const props = defineProps<{
  item: CartProduct
}>()

const router = useRouter()
const cartStore = useCartStore()
const snackbarStore = useSnackbarStore()

const removeFromCart = (productId: number) => {
  snackbarStore.showToast('Product deleted from cart', 'error')
  cartStore.removeFromCart(productId)
}

const goToProduct = (productId: number) => {
  router.push(`/product/${productId}`)
}

const quantity = computed({
  get: () => props.item.count,
  set: (val: number) => {
    if (val > props.item.count) {
      cartStore.addToCart(props.item.product)
      snackbarStore.showToast('Product added to cart', 'success')
    } else if (val === 0) {
      removeFromCart(props.item.product.id)
    } else {
      cartStore.decrementQuantity(props.item.product.id)
      snackbarStore.showToast('Product quantity decreased', 'error')
    }
  },
})
</script>

<template>
  <v-card elevation="2" class="mb-4">
    <v-row class="pa-4">
      <v-col cols="2" class="pa-0 pa-md-2"
        ><v-img :src="item.product.image" :alt="item.product.title" height="100" class="ma-md-4"
      /></v-col>
      <v-col md="7" cols="10" class="pa-0 pa-md-2">
        <v-card-item class="pa-2">
          <v-card-title @click="goToProduct(item.product.id)" class="text-primary cursor-pointer">
            {{ item.product.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ item.product.description }}
          </v-card-subtitle>
        </v-card-item>
      </v-col>
      <v-col md="3" cols="12" class="d-flex align-center justify-end pr-6">
        <v-btn
          @click="removeFromCart(item.product.id)"
          color="error"
          variant="text"
          class="ma-2"
          icon="mdi-delete"
        />
        <v-text-field
          v-model.number="quantity"
          type="number"
          label="Qty"
          hide-details
          variant="outlined"
          density="compact"
          style="max-width: 80px"
          min="0"
          class="mr-2"
        ></v-text-field>
        <div>{{ `${item.product.price.toFixed(2)} €` }}</div></v-col
      >
    </v-row>
  </v-card>
</template>
