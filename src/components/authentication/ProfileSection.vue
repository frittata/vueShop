<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const authStore = useAuthStore()
const cartStore = useCartStore()
const user = computed(() => authStore.user)

const logout = () => {
  cartStore.clearCart()
  authStore.logout()
}
</script>

<template>
  <v-container v-if="user">
    <v-card class="mx-auto mt-5" max-width="600" elevation="3">
      <v-card-title class="text-h4 pa-8 pb-0">
        {{ user.name.firstname }} {{ user.name.lastname }}
        <div class="text-subtitle-1 mb-4">@{{ user.username }}</div>
      </v-card-title>

      <v-card-text>
        <v-list lines="two">
          <v-list-item prepend-icon="mdi-email" :title="user.email" subtitle="Email"></v-list-item>
          <v-list-item
            prepend-icon="mdi-phone"
            :title="user.phone"
            subtitle="Telefono"
          ></v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item prepend-icon="mdi-map-marker" subtitle="Indirizzo">
            <v-list-item-title>
              {{ user.address.street }}, {{ user.address.number }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ user.address.zipcode }} {{ user.address.city }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="pa-4">
        <v-btn color="error" variant="tonal" prepend-icon="mdi-logout" block @click="logout()">
          Logout
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

  <v-container v-else class="text-center">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </v-container>
</template>
