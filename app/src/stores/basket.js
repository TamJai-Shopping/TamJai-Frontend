import { defineStore } from 'pinia'
import { basketAPI } from '@/services/api.js'

export const useBasketStore = defineStore({
  id: 'basket',
  state: () => {
    return {
        baskets: []
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
    }
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

    delete (id) {
      this.baskets = this.baskets.filter((basket) => basket.id != id)
    }
  }

})