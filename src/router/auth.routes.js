export default [
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import('@/views/auth/Register.vue'),
  },
]
