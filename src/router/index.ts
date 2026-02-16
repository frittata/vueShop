import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/HomeView.vue') },
    { path: '/product/:id', component: () => import('@/views/ProductDetailsView.vue') },
    {
      path: '/cart',
      component: () => import('@/views/ProductCartView.vue'),
    },
  ],
})

export default router
