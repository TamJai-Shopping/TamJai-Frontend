<template>


    <div v-for="basket in baskets" v-bind:key="baskets.id" class="m-8">
        <div v-if="basket.id == 1">

            <div v-for="shop in shops" v-bind:key="shops.id" class="m-8">
                <p>แสดงร้านค้าที่: {{ shop.id }}</p>

                <!-- <p>สินค้าในตระกร้าทั้งหมด = {{ basket.basketItems }} </p> -->

                <p>-----------------------------------------------</p>
                <div v-for="basketItem in basket.basketItems" v-bind:key="basket.basketItems.id" class="m-8">

                    <div v-if="shop.id == basketItem.shop_id">
                        <!-- สินค้า: {{ searchProductById(basketItem.product_id).name }} จำนวน: {{ basketItem.quantity }} -->
                        ร้านค้า: {{ basketItem.shop_id }} รหัสสินค้า: {{ basketItem.product_id }}
                    </div>

                </div>

                <div>
                    <button @click="buyItems(shop.id)" 
                        class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
                        ซื้อสินค้า
                    </button>
                </div>
                <p>-----------------------------------------------</p>

            </div>



        </div>

    </div>






</template>

<script>
import { useBasketStore } from '@/stores/basket.js'
import { useProductStore } from '@/stores/product.js'
import { useShopStore } from '@/stores/shop.js'

export default {
    setup() {
        const basket_store = useBasketStore()
        const product_store = useProductStore()
        const shop_store = useShopStore()
        return { basket_store, product_store, shop_store }
    },

    data() {
        return {
            basket: {
                id: '',
                user_id: '',
                selectShop: '',
                total_price: ''
  
            },
            order: {
                id: '',
                status: '',
                total_price: '',
                package_number: '',

            },
            title: "Basket List",
            baskets: null,
            products: null,
            shops: null,

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
        async refreshShops(data) {
            if (data.refresh) {
                await this.shop_store.fetch()
                this.Products = this.shop_store.getShops
            }
        },

        searchProductById(id) {
            return this.product_store.getProductById(id)
        },

        basketsByShop: function (shop_id) {
            return this.basket_store.getBasketsByShop(shop_id);
        },
        buyItems(shop_id) {
            this.selectShop = shop_id
            this.$router.push(`/baskets/`)
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

            await this.shop_store.fetch()
            this.shops = this.shop_store.getShops
        } catch (error) {
            this.error = error.message
        }


    }
}
</script>

<style scoped>

</style>