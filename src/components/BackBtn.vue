<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  label?: string
  route?: string
}>()

const router = useRouter()

const goBack = () => {
  if (props.route) {
    router.push(props.route)
  } else {
    router.back()
  }
}
</script>

<template>
  <div class="d-flex justify-end">
    <v-btn variant="text" prepend-icon="mdi-arrow-left" @click="goBack">{{
      props.label ?? 'Go back'
    }}</v-btn>
  </div>
</template>
