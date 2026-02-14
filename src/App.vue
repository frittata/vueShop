<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app">
    <NavBar />

    <main class="main">
      <RouterView />
    </main>
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
