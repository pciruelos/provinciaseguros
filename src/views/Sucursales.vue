<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { getAllSucursales } from '@/services/sucursales/sucursalesService'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

//
const SucursalesList = defineAsyncComponent(
  () => import('@/components/Sucursales/SucursalesList.vue'),
)

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
      provincias.value = data
    })
    .catch((error) => {
      console.error('Error fetching provincias:', error)
    })
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-cover bg-center text-black">
    <Navbar />

    <main class="flex-grow text-center py-12">
      <Suspense>
        <template #default>
          <SucursalesList :sucursales="provincias" :selected="selectedSucursales" />
        </template>
        <template #fallback>
          <p>Cargando provincias...</p>
        </template>
      </Suspense>
    </main>

    <Footer />
  </div>
</template>
