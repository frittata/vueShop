<script setup lang="ts">
import { computed } from 'vue'
import NavBar from './components/NavBar.vue'
import { useSnackbarStore } from './stores/snackbar'

const snackbarstore = useSnackbarStore()
const snackbar = computed(() => snackbarstore.snackbar)
</script>

<template>
  <div class="app">
    <NavBar />

    <main class="main">
      <RouterView />
    </main>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color">
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>

<style>
.app {
  margin-top: 70px;
}
html,
body,
.v-application {
  font-family: 'Poppins', sans-serif !important;
}
</style>
