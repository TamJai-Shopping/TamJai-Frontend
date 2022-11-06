import {defineStore} from 'pinia'

import {shopAPI} from "@/services/api.js"

export const useShop = defineStore({
    id: 'shops',
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

        sortByMinPriceToMaxPrice(state) {
            const sortable = [...state.shops]
            return sortable.sort((a, b) => {
                return a.price - b.price
            })
        },

        sortByMaxPriceToMinPrice(state) {
            const sortable = [...state.shops]
            return sortable.sort((a, b) => {
                return b.price - a.price
            })
        },

        sortByLatest(state) {
            const sortable = [...state.shops]
            return sortable.sort((a, b) => {
                return b.id - a.id
            })
        },

        sortByBestSeller(state) {
            const sortable = [...state.shops]
            return sortable.sort((a, b) => {
                return b.sell_amount - a.sell_amount
            })
        },
    },

    actions: {
        async fetch() {
            this.shops = await shopAPI.getAll()
        },
        async add(shop) {
            const response = await shopAPI.saveNew(shop)
            if (response.success) {
                const shops_id = response.shops_id
                this.categories.push({...shop})
                return shops_id
            }
            return false
        },

        delete(id) {
            this.categories = this.categories.filter((shop) => shop.id != id)
        },

    },

})

