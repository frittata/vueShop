import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/HomeView.vue') },
    { path: '/product/:id', component: () => import('@/views/ProductDetailsView.vue') },
    { path: '/category/:id', component: () => import('@/views/ProductsCategoryView.vue') },
    {
      path: '/cart',
      component: () => import('@/views/ProductCartView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/wishlist',
      component: () => import('@/views/ProductWishlistView.vue'),
      meta: { requiresAuth: true },
    },
    { path: '/login', component: () => import('@/views/LoginView.vue') },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return '/login'
  }
})

export default router
