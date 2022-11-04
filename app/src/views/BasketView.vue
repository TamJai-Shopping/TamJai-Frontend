<template>
    <div v-for="basket in baskets" v-bind:key="baskets.id" class="m-8">
        <p>ตะกร้า = จำนวน: {{ basket.quantity }} สินค้า: {{ searchProductById(basket.product_id).name }} </p>
        <p>-----------------------------------------------</p>
    </div>

    <div>
        ทดสอบ: {{ searchProductById(1).name }}
    </div>
    
</template>

<script>
import { useBasketStore } from '@/stores/basket.js'
import { useProductStore } from '@/stores/product.js'

export default {
    setup() {
        const basket_store = useBasketStore()
        const product_store = useProductStore()
        return { basket_store, product_store }
    },

    data() {
        return {
            basket: {
                id: '',
                quantity: '',
                product_id: ''
            },
            title: "Basket List",
            baskets: null,
            products: null,
        }
    },
    watch: {},
    methods: {
        async refreshBaskets(data) {
            if (data.refresh) {
                await this.basket_store.fetch()
                this.baskets = this.basket_store.getBaskets
            }
        },
        async refreshProducts(data) {
            if (data.refresh) {
                await this.product_store.fetch()
                this.Products = this.product_store.getProducts
            }
        },

        searchProductById(id){
            return this.product_store.getProductById(id)
        }

    },
    async mounted() {
        console.log("mounted")
        this.error = null

        try {
            await this.basket_store.fetch()
            this.baskets = this.basket_store.getBaskets

            await this.product_store.fetch()
            this.products = this.product_store.getProducts
        } catch (error) {
            this.error = error.message
        }
        
        
    }
}
</script>

<style scoped>

</style>