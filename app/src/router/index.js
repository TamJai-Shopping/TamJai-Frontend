import { createRouter, createWebHistory } from 'vue-router'
import Marketplace from '../views/products/Marketplace.vue'
import Search from '@/views/products/SearchItemView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Marketplace
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('@/views/products/ProductShowView.vue')
    },
    {
      path: '/products/search',
      name: 'products.search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
	  },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/views/LogoutView.vue')
	  },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/Register.vue')
	  }
  ]
})

export default router
