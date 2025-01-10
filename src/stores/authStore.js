import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    username: '',
  }),
  actions: {
    login(username, password) {
      // get users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || []

      // Check credentials
      const user = users.find((user) => user.username === username && user.password === password)

      if (user) {
        // Login successful
        this.isLoggedIn = true
        this.username = username
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('username', username)
      } else {
        // Invalid credentials
        alert('Nombre de usuario o contraseña incorrectos')
      }
    },
    logout() {
      this.isLoggedIn = false
      this.username = ''
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('username')
    },
    checkLoginStatus() {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
      const username = localStorage.getItem('username')

      if (isLoggedIn) {
        this.isLoggedIn = true
        this.username = username || ''
      }
    },
  },
})
