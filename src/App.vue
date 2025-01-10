<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <div class="flex flex-col min-h-screen">
      <main class="flex-grow">
        <RouterView />
      </main>
    </div>
  </v-app>
</template>

<style scoped></style>
