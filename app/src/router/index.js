import { createRouter, createWebHistory } from 'vue-router'
import Marketplace from '../views/products/Marketplace.vue'
import Search from '@/views/products/SearchItemView.vue'
import ShopSelectView from "@/views/products/ShopSelectView.vue"
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
      path: '/products/:id/report',
      name: 'products.report',
      component: () => import('@/views/products/ReportProductView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue')
    },
    {
      path: '/baskets',
      name: 'baskets',
      component: () => import('@/views/BasketView.vue')
    },
    {
      path: '/baskets/:id',
      name: 'baskets.show',
      component: () => import('@/views/products/ProductOrderView.vue')
    },
    {
      path: '/products/search',
      name: 'products.search',
      component:Search,
    },
    {
      path:'/categories/:id',
      name:'categories.show',
      component: ()=>import('@/views/products/CategorySearch.vue')
    },
    {
      path:'/shops/:id',
      name:'shops.select.show',
      component: ShopSelectView
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
      component: () => import('@/views/SignUpView.vue')
	  },
  ]
})

export default router
