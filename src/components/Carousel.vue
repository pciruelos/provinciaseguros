<template>
  <div class="h-750 w-750 bg-yellow-400">
    <fwb-carousel :pictures="pictures" class="w-full h-full object-cover" />
  </div>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
  { src: new URL('@/assets/c1.jpg', import.meta.url).href },
  { src: new URL('@/assets/c2.jpg', import.meta.url).href },
  { src: new URL('@/assets/c3.jpg', import.meta.url).href },
]
</script>
