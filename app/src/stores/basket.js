import { defineStore } from 'pinia'
import { basketAPI } from '@/services/api.js'

export const useBasketStore = defineStore({
  id: 'basket',
  state: () => {
    return {
        baskets: [],
        key:"",
    }
  },
  getters: {
    getBaskets: (state) => state.baskets,

    sortByPoint (state) {
      const sortable = [...state.baskets]
      return sortable.sort((a, b) => {
        return a.point - b.point
      })
    },

    sortByName (state) {
      const sortable = [...state.baskets]
      return sortable.sort((a, b) => {
        return (a.name).localeCompare(b.name)
      })
    },
    getBasketsByShop: (state) => (shop_id) => {
      return state.baskets.find(basket => basket.shop_id === shop_id)
    },
    getBasketsByUser: (state) => (user_id) => {
      return state.baskets.find(basket => basket.user_id === user_id)
    },
  }, 

  actions: {
    async fetch () {
      this.baskets = await basketAPI.getAll()
    },

    async add (basket) {
      const response = await basketAPI.saveNew(basket)
      if (response.success) {
        const basket_id = response.basket_id
        this.baskets.push({ ...basket })
        return basket_id
      }
      return false
    },

    async delete() {
      await basketAPI.delete()
    },
    async totalPrice(user) {
    this.totalPrice = await basketAPI.totalPrice(user)
    },
    async createOrder(user){
      await basketAPI.createOrder(user)
    },
    async createOrderItem(user){
      await basketAPI.createOrderItem(user)
    },
    async initBasket (user) {
      const response = await basketAPI.initBasket(user)
      if (response.success) {
        const basket_id = response.basket_id
        this.baskets.push({ ...basket })
        return basket_id
      }
      return false
    },
    async update (key, basket) {
      const response = await basketAPI.update(key, basket)
      if (response.success) {
        const basket_id = response.basket_id
        this.baskets.push({ ...basket })
        return basket_id
      }
      return false
    },
  }

})