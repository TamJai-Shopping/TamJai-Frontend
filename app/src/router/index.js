import { createRouter, createWebHistory } from 'vue-router'
import Marketplace from '../views/products/Marketplace.vue'
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
      path: '/products/:id',
      name: 'products.show',
      component: () => import('@/views/products/ProductShowView.vue')
    },
    {
      path: '/seller/orders',
      name: 'orders',
      component: () => import('@/views/sellers/OrderSellerView.vue')
    },
    {
      path: '/seller/products',
      name: 'stock',
      component: () => import('@/views/sellers/StockSellerView.vue')
    },
    {
      path: '/seller/products/:id',
      name: 'stock.edit',
      component: () => import('@/views/sellers/EditProductSellerView.vue')
    },
    {
      path: '/seller/products/create',
      name: 'stock.create',
      component: () => import('@/views/sellers/CreateProductSellerView.vue')
    },
    {
      path: '/shop/create',
      name: 'shop.create',
      component: () => import('@/views/sellers/CreateShopView.vue')
    },
    {
      path: '/shop/edit',
      name: 'shop.edit',
      component: () => import('@/views/sellers/EditShopView.vue')
    }
  ]
})

export default router
