import { defineStore } from 'pinia'
import { orderAPI } from '@/services/api.js'

export const useOrderStore = defineStore({
  id: 'order',
  state: () => {
    return {
        orders: []
    }
  },
  getters: {
    getOrders: (state) => state.orders,

    sortByPoint (state) {
      const sortable = [...state.orders]
      return sortable.sort((a, b) => {
        return a.point - b.point
      })
    },

    sortByName (state) {
      const sortable = [...state.orders]
      return sortable.sort((a, b) => {
        return (a.name).localeCompare(b.name)
      })
    },
    getOrdersByOrder: (state) => (order_id) => {
      return state.orders.find(order => order.order_id === order_id)
    },
  }, 

  actions: {
    async fetch () {
      this.orders = await orderAPI.getAll()
    },

    async add (order) {
      const response = await orderAPI.saveNew(order)
      if (response.success) {
        const order_id = response.order_id
        this.orders.push({ ...order })
        return order_id
      }
      return false
    },

    delete (id) {
      this.orders = this.orders.filter((order) => order.id != id)
    }
  }

})