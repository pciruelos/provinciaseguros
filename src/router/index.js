import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Sucursales from '@/views/Sucursales.vue'
import Errorpage from '@/views/Errorpage.vue'

import authRoutes from './auth.routes'
import { requireAuth } from './authGuard' // Import the guard function

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/', // Redirect
  //   meta: { requiresAuth: true },
  // },
  {
    path: '/sucursales',
    name: 'sucursales',
    component: Sucursales,
    meta: { requiresAuth: true },
  },
  {
    path: '/404',
    name: 'errorpage',
    component: Errorpage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
  ...authRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard
router.beforeEach(requireAuth)

export default router
