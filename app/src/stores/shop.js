import { defineStore } from 'pinia'
import { shopAPI } from '@/services/api.js'

export const useShopStore = defineStore({
  id: 'shop',
  state: () => {
    return {
        shops: [],
        query: [],
        key: "",
    }
  },
  getters: {
    getShops(state) {
        return state.shops
    },

    sortByPoint (state) {
      const sortable = [...state.shops]
      return sortable.sort((a, b) => {
        return a.point - b.point
      })
    },

    sortByName (state) {
      const sortable = [...state.shops]
      return sortable.sort((a, b) => {
        return (a.name).localeCompare(b.name)
      })
    },
    getShopsByShop: (state) => (shop_id) => {
      return state.shops.find(shop => shop.shop_id === shop_id)
    },
  }, 

  actions: {
    async fetch () {
      this.shops = await shopAPI.getAll()
    },

    async add (shop) {
      const response = await shopAPI.saveNew(shop)
      if (response.success) {
        const shop_id = response.shop_id
        this.shops.push({ ...shop })
        return shop_id
      }
      return false
    },

    delete (id) {
      this.shops = this.shops.filter((shop) => shop.id != id)

    }
  }
})