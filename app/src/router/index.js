import { createRouter, createWebHistory } from 'vue-router'
import Marketplace from '../views/marketPlace/Marketplace.vue'
import CoinDeskView from '@/views/CoinDeskView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Marketplace
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/UserDataView.vue')
    }
  ]
})

export default router
