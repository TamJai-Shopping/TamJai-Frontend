<template>
  <div class="m-8 bg-gray-400">
    <img src="https://pbs.twimg.com/media/FXSOQxdVUAELv2U?format=png&name=small" class="m-1 p-3" width="150"
      height="150">
  </div>

  <div>
    <button class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
      ซื้อเลย
    </button>

    <button @click="saveNewBasket(),saveNewBasketItems()"
      class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
      หยิบลงตะกร้า
    </button>
  </div>

  <div>
    <button @click="onClickPlusBuyAmount" class="bg-gray-400 block mt-4 py-2 text-white font-semibold mb-2">
      เพิ่ม
    </button>
    <button @click="onClickMinusBuyAmount" class="bg-gray-400 block mt-4 py-2 text-white font-semibold mb-2">
      ลด
    </button>
    <input type="number" v-model="buyAmount">
  </div>

  <div class="m-8" v-if="product">
    <h1 class="text-3xl">{{ product.name }}</h1>
    <p>ข้อมูล {{ product.description }}</p>
    <p>ราคา {{ product.price }} บาท</p>
  </div>


  <div v-for="categories in product.categories" v-bind:key="product.id" class="m-8">
    <p>หมวดหมู่: {{ categories.name }}</p>
  </div>

  <div class="m-8" v-if="product">
    <h1>-----------------------------------------------</h1>
    <h1>{{ product }}</h1>
    <p>{{baskets.getBasketsByUser(this.basket.user_id)}}</p>
  </div>

</template>
  
<script>
import { useBasketStore } from '@/stores/basket.js'
import { useBasketItemStore } from '@/stores/basketItem.js'

export default {
  setup() {
    const basket_store = useBasketStore()
    const basketItem_store = useBasketItemStore()
    return { basket_store, basketItem_store }
  },
  data() {
    return {
      basket: {
        id: '',
        user_id: '',
        selectShop: '',
        total_price: ''
      },
      basketItem: {
        id: '',
        basket_id: '',
        product_id: '',
        shop_id: '',
        quantity: ''
      },
      error: null,
      baskets: null,
      product: null,
      buyAmount: 0,
    }
  },
  methods: {
    async refreshBaskets(data) {
      if (data.refresh) {
        await this.basket_store.fetch()
        this.baskets = this.basket_store.getBaskets
      }
    },
    async refreshBaskets(data) {
      if (data.refresh) {
        await this.basketItem_store.fetch()
        this.baskets = this.basketItem_store.getBasketItems
      }
    },
    onClickPlusBuyAmount() {
      this.buyAmount++
    },
    onClickMinusBuyAmount() {
      if (this.buyAmount > 0) { this.buyAmount-- }

    },
    // getBasketsByUser: function (user_id) {
    //   return this.basket_store.getBasketsByUser(user_id);
    // },
    async saveNewBasket() {
      this.error = null
      this.basket.user_id = 1;
      this.basket.selectShop = null
      this.basket.total_price = 0;

      if (this.basket_store.getBasketsByUser(this.basket.user_id) == null) {
        try {
          const basket_id = await this.basket_store.add(this.basket)
          // if (basket_id) {
          //   this.$router.push(`/baskets`)
          // }
        } catch (error) {
          this.error = error.message
          console.error(error)
        }
      }


    },
    async saveNewBasketItems() {
      this.error = null
      // this.basketItem.basket_id = 1
      this.basketItem.basket_id = this.basket_store.getBasketsByUser(this.basket.user_id).user_id
      this.basketItem.product_id = this.product.id
      this.basketItem.shop_id = this.product.shop_id
      this.basketItem.quantity = this.buyAmount


      try {
        const basketItem_id = await this.basketItem_store.add(this.basketItem)
        // if (basketItem_id) {
        //   this.$router.push(`/baskets`)
        // }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
    },
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


    },
  async created() {
    const id = this.$route.params.id

    try {
      const response = await this.$axios.get(`/products/${id}`)
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