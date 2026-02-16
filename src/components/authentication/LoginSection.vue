<script setup lang="ts">
import { ref } from 'vue'
import { useSnackbarStore } from '@/stores/snackbar'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const snackbarStore = useSnackbarStore()

const username = ref('')
const password = ref('')
const loading = ref(false)
const showPassword = ref(false)

const handleLogin = async () => {
  if (!username.value || !password.value) return
  loading.value = true
  try {
    await authStore.login(username.value, password.value)
    snackbarStore.showToast('Login successfully!', 'success')
  } catch (e) {
    console.error(e)
    snackbarStore.showToast('Invalid credentials. Try again.', 'error')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 pa-4">
          <v-card-title class="text-h5 text-center">Accedi a Vue Shop</v-card-title>

          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="username"
                label="Username"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                required
              ></v-text-field>

              <v-btn
                type="submit"
                color="primary"
                block
                size="large"
                :loading="loading"
                class="mt-4"
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
