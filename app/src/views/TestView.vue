<template>
    <div class="m-8">
        <h1>Test Page</h1>
    </div>

    <div>

        <div>
            <label for="name">Basket Id</label>
            <input type="number" v-model="basket.id">
        </div>
        
        <div>
            <label for="name">Product quantity</label>
            <input type="number" v-model="basket.quantity">
        </div>

        <div>
            <label for="total_amount">Product id</label>
            <input type="number" v-model="basket.product_id">
        </div>

        <div>
            <label for="name">User Id</label>
            <input type="number" v-model="basket.user_id">
        </div>
    </div>

    <div>
        <button @click="saveNewBasket()" class="bg-gray-400 block mt-4 py-2 text-white font-semibold mb-2">
            กดเพิ่มลงตะกร้า
        </button>
    </div>

    <div><p>---------------------------------------</p></div>

    <div>
        {{ products }}
    </div>

</template>

<script>
import { useBasketStore } from '@/stores/basket.js'
import { useProductStore } from '@/stores/product.js'
import { useOrderStore } from '@/stores/order.js'


export default {
    setup() {
        const basket_store = useBasketStore()
        const product_store = useProductStore()
                const order_store = useOrderStore()

        return { basket_store, product_store ,order_store}
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
            title: "Basket List",
            baskets: null,
            products: null,
            orders: null,

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
        async refreshOrders(data) {
            if (data.refresh) {
                await this.order_store.fetch()
                this.orders = this.order_store.getOrders
            }
        },

        clickButton() {

        },
        async saveNewBasket() {
            this.error = null
            // todo: validate data here
            try {
                const basket_id = await this.basket_store.add(this.basket)
                if (basket_id) {
                    this.$router.push(`/basket`)
                }
            } catch (error) {
                this.error = error.message
                console.error(error)
            }
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

            await this.order_store.fetch()
            this.orders = this.order_store.getOrders
        } catch (error) {
            this.error = error.message
        }


    }
}
</script>