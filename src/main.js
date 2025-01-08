import './index.css'
import '../node_modules/flowbite-vue/dist/index.css'
import '../node_modules/flowbite/dist/flowbite.css' // Import Flowbite CSS

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Check login status on app initialization
console.log(
  'LocalStorage on app start:',
  localStorage.getItem('isLoggedIn'),
  localStorage.getItem('username'),
)

const authStore = useAuthStore()
authStore.checkLoginStatus()

app.mount('#app')
