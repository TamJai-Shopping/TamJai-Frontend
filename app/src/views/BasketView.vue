<template>


    <div v-for="basket in baskets" v-bind:key="baskets.id" class="m-8">
        <p>สินค้าในตระกร้าทั้งหมด = {{ basket.basketItems }} </p>
        <p>-----------------------------------------------</p>
        <div v-for="basketItem in basket.basketItems" v-bind:key="basket.basketItems.id" class="m-8">



            สินค้า: {{ searchProductById(basketItem.product_id).name }} จำนวน: {{ basketItem.quantity }} ร้านค้า:
            {{ basketItem.shop_id }}
        </div>
        <p>-----------------------------------------------</p>
    </div>

    <div>
        <button @click="buyItems()"
            class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
            ซื้อสินค้า
        </button>
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
                user_id: '',
                product_id: '',
                shop_id: '',
                quantity: '',
            },
            order: {
                id: '',
                status: '',
                total_price: '',
                package_number: '',

            },
            title: "Basket List",
            baskets: null,
            basketsByShop: null,
            products: null,

        }
    },
    computed: {

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

        searchProductById(id) {
            return this.product_store.getProductById(id)
        },

        basketsByShop: function (shop_id) {
            return this.basket_store.getBasketsByShop(shop_id);
        },
        buyItems(shop_id) {

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