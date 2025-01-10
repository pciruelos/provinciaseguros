<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Carousel from '@/components/Carousel.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-cover bg-center text-white">
    <!-- Navbar Component -->
    <Navbar />
    <!-- Carousel Component -->
    <Carousel />
    <!-- Main Content -->
    <main class="flex-grow text-center py-12" style="background-image: url('/1.jpg')">
      <h3 class="text-2xl font-light mb-3">COTIZACIÓN ONLINE</h3>
      <div class="flex items-center justify-center mb-6">
        <div class="w-28 h-px bg-white"></div>
        <span class="mx-4 text-3xl">
          <i class="fa fa-calculator"></i>
        </span>
        <div class="w-28 h-px bg-white"></div>
      </div>
      <p class="text-lg font-light mb-16">
        Cotizá y obtené en minutos el mejor seguro para tu auto o moto.
      </p>
      <div class="flex flex-col gap-6 justify-center items-center">
        <div
          class="flex justify-center items-center w-4/5 sm:w-2/5 h-32 bg-blue-800 text-white text-xl cursor-pointer hover:bg-gray-800 transition"
        >
          Cotizá el seguro para tu auto
        </div>
        <div
          class="flex justify-center items-center w-4/5 sm:w-2/5 h-32 bg-blue-800 text-white text-xl cursor-pointer hover:bg-gray-800 transition"
        >
          Cotizá el seguro para tu moto
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
