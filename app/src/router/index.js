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
      path: '/products/search',
      name: 'products.search',
      component:Search,
      // props:route =>({ query: route.query.sendKey })
    // props:true
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
    }
  ]
})

export default router
