import {defineStore} from 'pinia'
import {productAPI, categoriesAPI} from '@/services/api.js'
import {shopAPI} from "../services/api.js";

export const useProductStore = defineStore({
    id: 'product',
    state: () => {
        return {
            products: [],
            query:[],
            key:"",
        }
    },

    getters: {
        getProducts(state) {
            return state.products
        },
        sortByMinPriceToMaxPrice(state) {
            const sortable = [...state.products]
            return sortable.sort((a, b) => {
                return a.price - b.price
            })
        },
        sortByMaxPriceToMinPrice(state) {
            const sortable = [...state.products]
            return sortable.sort((a, b) => {
                return b.price - a.price
            })
        },
        sortByLatest(state) {
            const sortable = [...state.products]
            return sortable.sort((a, b) => {
                return b.id - a.id
            })
        },
        sortByBestSeller(state) {
            const sortable = [...state.products]
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
            this.products = await productAPI.getAll()
        },
        async add(product) {
            const response = await productAPI.saveNew(product)
            if (response.success) {
                const product_id = response.product_id
                this.products.push({...product})
                return product_id
            }
            return false
        },

        delete(id) {
            this.products = this.products.filter((product) => product.id != id)
        },
        async searchProduct(key) {
            this.products = await productAPI.getSearch(key)
        },
        async searchProductsByCategoryId(categoryId) {
            this.products = await categoriesAPI.getProductsByCategoryId(categoryId)
        },
    },

})
