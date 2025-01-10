<script setup>
import { onMounted, ref, computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { getAllSucursales } from '@/services/sucursales/sucursalesService'

const provincias = ref([])
const selectedSucursales = [
  'Neuquén',
  'Buenos Aires',
  'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
  'Córdoba',
  'Misiones',
  'Santa Fe',
]

onMounted(() => {
  getAllSucursales()
    .then((data) => {
      provincias.value = data // Store the fetched provinces in the reactive variable
    })
    .catch((error) => {
      console.error('Error fetching provincias:', error)
    })
})

const filteredSucursales = computed(() => {
  return provincias.value.filter((sucursal) => selectedSucursales.includes(sucursal.nombre))
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-cover bg-center text-black">
    <Navbar />

    <main class="flex-grow text-center py-12">
      <h2>Provincias:</h2>
      <ul>
        <li v-for="(sucursal, index) in filteredSucursales" :key="index">
          {{ sucursal.nombre }}
        </li>
      </ul>
    </main>

    <Footer />
  </div>
</template>
