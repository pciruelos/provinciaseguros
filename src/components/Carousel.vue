<template>
  <v-carousel cycle show-arrows="hover" height="90vh" width="100%" hide-delimiters>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img :src="slide.src" height="100vh" width="100%" cover> </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const slides = [
  { src: new URL('@/assets/c1.jpg', import.meta.url).href },
  { src: new URL('@/assets/c2.jpg', import.meta.url).href },
  { src: new URL('@/assets/c3.jpg', import.meta.url).href },
]
</script>

<style scoped></style>
