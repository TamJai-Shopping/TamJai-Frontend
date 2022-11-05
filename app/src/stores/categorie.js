import {defineStore} from 'pinia'

import {categoriesAPI} from "@/services/api.js"

export const useCategories = defineStore({
    id: 'categories',
    state: () => {
        return {
            categories: [],
            query:[],
            key:"",
        }
    },

    getters: {
        getCategories(state) {
            return state.categories
        },
        sortByMinPriceToMaxPrice(state) {
            const sortable = [...state.categories]
            return sortable.sort((a, b) => {
                return a.price - b.price
            })
        },
        sortByMaxPriceToMinPrice(state) {
            const sortable = [...state.categories]
            return sortable.sort((a, b) => {
                return b.price - a.price
            })
        },
        sortByLatest(state) {
            const sortable = [...state.categories]
            return sortable.sort((a, b) => {
                return b.id - a.id
            })
        },
        sortByBestSeller(state) {
            const sortable = [...state.categories]
            return sortable.sort((a, b) => {
                return b.sell_amount - a.sell_amount
            })
        },
        getQuery(state) {
            return state.query
        },
    },

    actions: {
        async fetch() {
            this.categories = await categoriesAPI.getAll()
        },
        async add(category) {
            const response = await categoriesAPI.saveNew(category)
            if (response.success) {
                const categories_id = response.categories_id
                this.categories.push({...category})
                return categories_id
            }
            return false
        },

        delete(id) {
            this.categories = this.categories.filter((category) => category.id != id)
        },
        async searchProduct(key) {
            this.categories = await categories.getSearch(key)
        }

    },


})