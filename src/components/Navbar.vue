<script setup>
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

// localdata
const isMenuOpen = ref(false)

// Computed
// const fullName = computed(() => {
//   if (authStore.isLoggedIn) {
//     const user = JSON.parse(localStorage.getItem('users')).find(
//       (u) => u.username === authStore.username,
//     )
//     return user ? `${user.firstName} ${user.lastName}` : 'Usuario'
//   }
//   return ''
// })

// methods
const logout = () => {
  authStore.logout()
  router.push({ name: 'login' })
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav>
    <div class="flex items-center justify-between px-8 py-1 shadow-md bg-white">
      <!-- Logo -->
      <div class="shrink-0">
        <router-link to="/" class="no-underline">
          <img src="/logo.jpg" alt="Provincia Seguros Logo" class="w-24" />
        </router-link>
      </div>

      <!-- Hamburger Menu for Mobile -->
      <button
        class="text-2xl bg-none border-none cursor-pointer md:hidden text-black"
        @click="toggleMenu"
      >
        ☰
      </button>

      <div
        :class="[
          'flex items-center gap-4 md:gap-8',
          isMenuOpen ? 'flex-col md:flex-row z-50' : 'hidden md:flex',
        ]"
        class="absolute md:relative top-16 md:top-auto right-0 md:right-auto bg-white md:bg-transparent w-full md:w-auto px-4 md:px-0 py-1 md:py-0"
      >
        <router-link to="/" class="text-black no-underline hover:text-blue-600">
          <div>Inicio</div>
        </router-link>
        <router-link to="/seguros-personas" class="text-black no-underline hover:text-blue-600">
          <div>Seguros Personas</div>
        </router-link>
        <router-link to="/seguros-empresas" class="text-black no-underline hover:text-blue-600">
          <div>Seguros Empresas</div>
        </router-link>
        <router-link to="/proveedoras" class="text-black no-underline hover:text-blue-600">
          <div>Proveedoras/es</div>
        </router-link>
        <router-link to="/sucursales" class="text-black no-underline hover:text-blue-600">
          <div>Nuestras Sedes</div>
        </router-link>

        <div class="text-center">
          <h1 class="text-gray-800 text-base flex items-center">
            <i class="fa fa-user mr-1" aria-hidden="true"></i>
            <span class="font-bold text-blue-800 text-lg">{{ authStore.fullName }}</span>
          </h1>
        </div>

        <button
          @click="logout"
          class="bg-transparent border-none text-black text-base hover:text-blue-600"
        >
          Salir
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
