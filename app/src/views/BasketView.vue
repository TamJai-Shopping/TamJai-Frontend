<template>
    <div v-for="basket in baskets" v-bind:key="baskets.id" class="m-8">
        <div v-if="basket.id == 1">
            <div class="flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" class="mr-6" width="40" height="40">
                <h1 class="font-mono text-center text-3xl">ตะกร้าสินค้า</h1>
            </div>
            <div v-for="shop in shops" v-bind:key="shops.id" class="font-mono m-60 my-8 text-lg bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md p-4">
                <p class="my-4 mx-10">ร้านค้า: {{ shop.id }}</p>
                <div v-for="basketItem in basket.basketItems" v-bind:key="basket.basketItems.id" class="m-8">
                    <div v-if="shop.id == basketItem.shop_id" class="flex items-center">
                        <img class="rounded-lg mr-10" src="https://cdn-icons-png.flaticon.com/512/2957/2957307.png" width="100" height="100">
                            <p class="mx-8">ชื่อสินค้า: {{ searchProductById(basketItem.product_id).name }}</p>
                            <p class="mx-8">จำนวน: {{ basketItem.quantity }} ชิ้น</p>
                    </div>
                </div>
                <div class="mx-10">
                    <button @click="buyItems(shop.id)" 
                        class="bg-gray-400 block w-full rounded-lg mt-4 py-2 text-white font-semibold mb-2">
                        ซื้อสินค้า
                    </button>
                </div>
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