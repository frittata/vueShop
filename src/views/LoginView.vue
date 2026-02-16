<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import LoginSection from '@/components/authentication/LoginSection.vue'
import ProfileSection from '@/components/authentication/ProfileSection.vue'

const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.user)
</script>

<template>
  <LoginSection v-if="!isAuthenticated" />
  <ProfileSection v-else-if="isAuthenticated && user" />
</template>
