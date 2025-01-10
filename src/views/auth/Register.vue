<script setup>
import useVuelidate from '@vuelidate/core'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import { registerRules } from '@/validations/registerValidation'

// Reactive form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
})

const v$ = useVuelidate(registerRules, form)
const authStore = useAuthStore()
const router = useRouter()

const onSubmit = async () => {
  v$.value.$validate()
  if (!v$.value.$invalid) {
    // Save the new user to localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []
    users.push(form.value)
    localStorage.setItem('users', JSON.stringify(users))

    // Log the user in using authStore
    authStore.login(form.value.username, form.value.password)

    // Redirect to home after login
    if (authStore.isLoggedIn) {
      alert('Usuario registrado y logueado con éxito')
      router.push({ name: 'home' })
    }
  }
}
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gray-100"
    style="background-image: url('/1.jpg')"
  >
    <div class="max-w-md w-full p-6 bg-gray-200 rounded-xl shadow-lg">
      <h4 class="text-center text-2xl font-bold text-gray-800 mb-4">Registro de usuario</h4>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div class="form-group">
          <label for="firstName" class="text-gray-600 text-sm">Nombre</label>
          <input
            id="firstName"
            v-model="form.firstName"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
          <span v-if="v$.firstName.$error" class="text-red-600 text-sm">{{
            v$.firstName.$errors[0].$message
          }}</span>
        </div>

        <div class="form-group">
          <label for="lastName" class="text-gray-600 text-sm">Apellido</label>
          <input
            id="lastName"
            v-model="form.lastName"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
          <span v-if="v$.lastName.$error" class="text-red-600 text-sm">{{
            v$.lastName.$errors[0].$message
          }}</span>
        </div>

        <div class="form-group">
          <label for="email" class="text-gray-600 text-sm">Correo Electrónico</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
          <span v-if="v$.email.$error" class="text-red-600 text-sm">{{
            v$.email.$errors[0].$message
          }}</span>
        </div>

        <div class="form-group">
          <label for="username" class="text-gray-600 text-sm">Nombre de usuario</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
          <span v-if="v$.username.$error" class="text-red-600 text-sm">{{
            v$.username.$errors[0].$message
          }}</span>
        </div>

        <div class="form-group">
          <label for="password" class="text-gray-600 text-sm">Contraseña</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="w-full p-2 border border-gray-300 rounded-md"
          />
          <span v-if="v$.password.$error" class="text-red-600 text-sm">{{
            v$.password.$errors[0].$message
          }}</span>
        </div>

        <button type="submit" class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md">
          Registrarse
        </button>
        <router-link
          to="/auth/login"
          class="block text-center text-sm text-blue-600 hover:text-blue-700"
        >
          Cancelar
        </router-link>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
