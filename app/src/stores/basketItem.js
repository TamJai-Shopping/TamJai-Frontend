import { defineStore } from 'pinia'
import { basketItemAPI } from '@/services/api.js'

export const useBasketItemStore = defineStore({
  id: 'basketItem',
  state: () => {
    return {
        basketItems: []
    }
  },
  getters: {
    getBasketItems: (state) => state.basketItems,

    sortByPoint (state) {
      const sortable = [...state.basketItems]
      return sortable.sort((a, b) => {
        return a.point - b.point
      })
    },

    sortByName (state) {
      const sortable = [...state.basketItems]
      return sortable.sort((a, b) => {
        return (a.name).localeCompare(b.name)
      })
    },
    getBasketItemsByShop: (state) => (shop_id) => {
      return state.basketItems.find(basketItem => basketItem.shop_id === shop_id)
    },
  }, 

  actions: {
    async fetch () {
      this.basketItems = await basketItemAPI.getAll()
    },

    async add (basketItem) {
      const response = await basketItemAPI.saveNew(basketItem)
      if (response.success) {
        const basketItem_id = response.basketItem_id
        this.basketItems.push({ ...basketItem })
        return basketItem_id
      }
      return false
    },

    async delete() {
      await basketItemAPI.delete()
    },
  }

})