<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getProductsCategories } from '@/api/fakeStore'
import { useTheme } from 'vuetify'
import { useAuthStore } from '@/stores/auth'
import { useWishlistStore } from '@/stores/wishlist'

const router = useRouter()
const categories = ref<string[]>([])
const loading = ref(true)
const drawer = ref(false)
const group = ref(null)

const goToHome = () => {
  router.push('/')
}

onMounted(async () => {
  categories.value = await getProductsCategories()
  loading.value = false
})

watch(group, () => {
  drawer.value = false
})

const cartStore = useCartStore()
const totalCartItems = computed(() => cartStore.totalItems)
const wishlistStore = useWishlistStore()
const totalWishlistItems = computed(() => wishlistStore.totalItems)
const theme = useTheme()
const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-layout>
    <v-app-bar elevation="2">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="cursor: pointer" @click="goToHome" class="font-weight-bold">
        Vue Shop
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="toggleTheme"
      ></v-btn>
      <v-badge
        location="top right"
        color="primary"
        :content="totalCartItems"
        :offset-x="10"
        :offset-y="10"
        ><v-btn icon="mdi-cart" variant="text" to="/cart"></v-btn
      ></v-badge>

      <v-badge
        v-if="totalWishlistItems > 0 && isAuthenticated"
        location="top right"
        color="error"
        :content="totalWishlistItems"
        :offset-x="10"
        :offset-y="10"
        ><v-btn icon="mdi-heart" variant="text" to="/wishlist"></v-btn
      ></v-badge>

      <v-btn v-if="!isAuthenticated" icon="mdi-login" variant="text" to="/login"></v-btn>
      <v-btn v-else-if="isAuthenticated" icon="mdi-account" variant="text" to="/login"></v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : 'left'"
      temporary
    >
      <v-list-item
        title="All products"
        to="/"
        prepend-icon="mdi-store"
        link
        class="pa-4"
      ></v-list-item>
      <v-list-item title="Categories" subtitle="Fakestore API" class="pa-4"></v-list-item>
      <v-divider></v-divider>

      <v-list nav>
        <v-progress-linear v-if="loading" indeterminate color="primary"></v-progress-linear>
        <v-list-item
          v-for="cat in categories"
          :key="cat"
          :title="cat.toUpperCase()"
          :value="cat"
          :to="`/category/${cat}`"
          prepend-icon="mdi-tag"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
