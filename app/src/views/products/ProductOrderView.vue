<template>

    <div>
        <h1>ProductOrderPage</h1>
    </div>

    <div v-for="basketItem in basket.basketItems" v-bind:key="basket.basketItems.id" class="m-8">
        <p>basketItem: {{ basketItem.id }} product: {{ basketItem.product_id }}</p>
        <!-- <p>basketItem.basketItem: {{ basketItem.basketItem }}</p> -->
    </div>

    <div>
        <p>-----------------------------------------------</p>
        <p>test: {{basket}}</p>
        <p>Id: {{idd}}</p>
        <p>Key: {{key}}</p>
        <button @click="getTotalPrice()">คำนวนราคา</button>
        <button @click="createOrder()">Create Order</button>
    </div>
    
</template>

<script>
import { useBasketStore } from '@/stores/basket.js'
import { useProductStore } from '@/stores/product.js'
import { useShopStore } from '@/stores/shop.js'
import { useBasketItemStore } from '@/stores/basketItem.js'

export default {
    setup() {
        const basket_store = useBasketStore()
        const product_store = useProductStore()
        const shop_store = useShopStore()
        const basketItem_store = useBasketItemStore()
        return { basket_store, product_store, shop_store, basketItem_store }
    },

    data() {
        return {
            order: {
                id: '',
                status: '',
                total_price: '',
                package_number: '',

            },
            title: "Basket List",
            basket: null,
            basketItems: '',
            key: ''

        }
    },
    computed: {

    },
    watch: {},
    methods: {
        async refreshBaskets(data) {
            if (data.refresh) {
                await this.basket_store.fetch()
                this.basket = this.basket_store.getBaskets
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
        async refreshBasketItems(data) {
            if (data.refresh) {
                await this.basketItem_store.fetch()
                this.basketItems = this.basketItem_store.getBaskets
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
        },

        getTotalPrice(){
            // this.basket_store.key = idd
            // this.basket_store.totalPrice()
        },
        createOrder(){
            this.basket_store.createOrder()
            this.basket_store.createOrderItem()
            // this.basket_store.delete()
            // this.basketItem_store.delete()
        }

    },
    async mounted() {
        console.log("mounted")
        this.error = null

        try {

            await this.product_store.fetch()
            this.products = this.product_store.getProducts

            await this.shop_store.fetch()
            this.shops = this.shop_store.getShops

            await this.basketItem_store.fetch()
            this.basketItems = this.basketItem_store.getBaskets
        } catch (error) {
            this.error = error.message
        }


    },
    async created() {
    const id = this.$route.params.id

    try {
      const response = await this.$axios.get(`/baskets/${id}`)
      if (response.status == 200) {
        this.basket = response.data.data
        console.table(this.basket)
      }
    } catch (error) {
      console.log(error)
      this.error = error.message
    }
  }
}
</script>