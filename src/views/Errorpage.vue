<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-red-600 mb-4">404</h1>
    <p class="text-lg text-gray-800 mb-6">This is an error test page.</p>
    <button
      @click="goHome"
      class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Go Back to Home
    </button>
  </div>
</template>

<style scoped>
/* Add any custom styles if necessary */
</style>
