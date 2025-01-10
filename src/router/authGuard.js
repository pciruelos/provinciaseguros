import { useAuthStore } from '@/stores/authStore'

export function requireAuth(to, from, next) {
  const authStore = useAuthStore()

  if (authStore.isLoggedIn && (to.name === 'login' || to.name === 'register')) {
    next({ name: 'home' })
    return
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
}
