import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

import { createVuetify } from 'vuetify' // Import Vuetify
import 'vuetify/styles' // Import Vuetify styles
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)

const authStore = useAuthStore()
authStore.checkLoginStatus()

app.mount('#app')
