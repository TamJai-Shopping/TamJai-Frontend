<template>
    <div class="m-8">
        <h1>Test Page</h1>
    </div>

    <div>
        <h1>Userrrr: {{ users }}</h1>
    </div>

</template>

<script>
import { useBasketStore } from '@/stores/basket.js'
import { useProductStore } from '@/stores/product.js'
import { useAuthStore } from '@/stores/auth.js'


export default {
    setup() {
        const basket_store = useBasketStore()
        const product_store = useProductStore()
        const auth_store = useAuthStore()
        return { basket_store, product_store, auth_store }
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
            users: null
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

        totalPriceButton() {
            baskets.totalPrice()
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

            await this.auth_store.fetch()
            this.users = this.auth_store.getAuth
        } catch (error) {
            this.error = error.message
        }


    },
    async created() {
    const id = this.$route.params.id

    try {
      const response = await this.$axios.get(`/baskets/${id}`)
      if (response.status == 200) {
        this.product = response.data.data
        console.table(this.product)
      }
    } catch (error) {
      console.log(error)
      this.error = error.message
    }
  }
}
</script>