// src/router/authGuard.js
import { useAuthStore } from '@/stores/authStore'

export function requireAuth(to, from, next) {
  const authStore = useAuthStore()
  console.log('Navigating to:', to.name, 'from:', from.name)

  if (authStore.isLoggedIn && (to.name === 'login' || to.name === 'register')) {
    console.log('Redirecting logged-in user to home')
    next({ name: 'home' })
    return
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    console.log('Redirecting unauthenticated user to login')
    next({ name: 'login' })
  } else {
    console.log('Allowing navigation')
    next()
  }
}
