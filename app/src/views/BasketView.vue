<template>
    <div v-if="baskets == null" role="status">
      <svg aria-hidden="true" class="flex items-center justify-center mt-20 mx-auto w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    <div v-for="basket in baskets" v-bind:key="baskets.id" class="m-8">
        <div v-if="basket.id == 1">
            <div class="flex items-center justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" class="mr-6" width="40" height="40">
                <h1 class="font-mono text-center text-3xl">ตะกร้าสินค้า</h1>
            </div>
            <div v-for="shop in shops" v-bind:key="shops.id"
                class="font-mono m-60 my-8 text-lg bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md p-4">
                <p class="my-4 mx-10">ร้านค้า: {{ shop.id }}</p>
                <div v-for="basketItem in basket.basketItems" v-bind:key="basket.basketItems.id" class="m-8">
                    <div v-if="shop.id == basketItem.shop_id" class="flex items-center">
                        <img class="rounded-lg mr-10" src="https://cdn-icons-png.flaticon.com/512/2957/2957307.png"
                            width="100" height="100">
                        <!-- <p class="mx-8">ชื่อสินค้า: {{ searchProductById(basketItem.product_id).name }}</p> -->
                        <p class="mx-8">ชื่อสินค้า: {{ basketItem.product_name }}</p>
                        <p class="mx-8">จำนวน: {{ basketItem.quantity }} ชิ้น</p>
                        <p class="mx-8">ราคาต่อชิ้น: {{ basketItem.product_price }} </p>
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
import { useAuthStore } from '@/stores/auth.js'

export default {
    setup() {
        const basket_store = useBasketStore()
        const product_store = useProductStore()
        const shop_store = useShopStore()
        const auth_store = useAuthStore()

        return { basket_store, product_store, shop_store, auth_store }
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
            auth: '',
            productName: ''

        }
    },
    // watch: {
    //     auth_store: {
    //         immediate: true,
    //         deep: true,
    //         handler(newValue, oldValue) {
    //             console.log(newValue.getAuth)
    //             this.auth = this.auth_store.getAuth
    //         }
    //     }
    // },
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
        async buyItems(shop_id) {
            try {
                this.basket.id = 1
                this.basket.user_id = 1
                this.basket.selectShop = shop_id
                const id = this.basket_store.getBasketsByUser(1).id
                this.basket_store.totalPrice(basket)
                // const response = await this.$axios.put(`/baskets/${id}`, this.basket)
                console.log(this.basket)
                const response = await this.basket_store.update(this.basket)
                // if (response.status == 201) {
                //     this.basket_id = response.data.basket_id
                //     this.$router.push(`${this.basket_id}`)
                //     console.log(response.data.message)

                // }
                this.$router.push('/baskets/' + this.basket.id)
            } catch (error) {
                this.error = error.message
                console.log(error)
            }

        },
        emergencyPush(shop_id){
            this.basket.selectShop = shop_id
            this.basket_store.update(this.basket, this.basket_store.getBasketsByUser(1))
            this.$router.push(`/baskets/1`)
        },
        getProductFromId(product_id){
            
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

            // if (this.auth_store.isAuthen) {
            //     this.auth = this.auth_store.getAuth
            // } else {
            //     this.auth = null
            // }
            console.log(this.basket_store)
        } catch (error) {
            this.error = error.message
        }


    }
}
</script>

<style scoped>

</style>