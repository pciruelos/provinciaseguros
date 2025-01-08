<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import Footer from '@/components/Footer.vue'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const onSubmit = (e) => {
  e.preventDefault()

  // Attempt login
  authStore.login(username.value, password.value)

  // Redirect to home if login is successful
  if (authStore.isLoggedIn) {
    router.push({ name: 'home' })
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Login Section -->
    <div class="flex-grow flex items-center justify-center" style="background-image: url('/1.jpg')">
      <div class="login-container w-full max-w-md sm:max-w-lg p-6 bg-gray-200 rounded-xl shadow-md">
        <h4 class="text-center text-lg font-semibold text-gray-700 mb-4">Inicio de Sesión</h4>

        <div class="card-body">
          <form @submit="onSubmit" class="space-y-4">
            <div class="form-group">
              <label for="username" class="block text-sm text-gray-600">Nombre de usuario</label>
              <input
                id="username"
                v-model="username"
                name="username"
                type="text"
                class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                required
              />
            </div>

            <div class="form-group">
              <label for="password" class="block text-sm text-gray-600">Contraseña</label>
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                required
              />
            </div>

            <div class="form-group">
              <button
                type="submit"
                class="w-full py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Iniciar Sesión
              </button>
              <router-link to="/auth/register" class="block text-center text-blue-600 mt-2"
                >Registrarse</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<style scoped>
/* Tailwind handles most styling */
</style>
