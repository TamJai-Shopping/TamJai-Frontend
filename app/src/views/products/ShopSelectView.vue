<template>
  <div v-if="shop != null">
    <div class="font-mono mx-auto max-w-7xl text-gray-700">
      <div class="pl-8 flex">
        <div
            class="pl-8 pt-6 text-xl w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-between items-center mt-4 p-4">
            <img :src="this.$axios.defaults.baseURL + '/images/search?shop_id=' + this.shop.id" alt="">
            {{ this.shop.image_path }}
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              {{ this.shop.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>


    <div class="font-mono mx-auto max-w-7xl text-gray-700">
      <div class="inline">
        <div class="pl-8 flex">
          <h1 class="pt-1.5 text-xl">สินค้าทั้งหมด</h1>
          <div class="ml-auto pr-9">
            <label class="px-3 text-lg">เรียงโดย</label>
            <select :value="sortOption" class="rounded-lg shadow bg-gray-100 border-gray-200 py-2"
                    @input="$emit('update:sortOption', $event.target.value)">
              <option value="default">ล่าสุด</option>
              <option value="bestSeller">สินค้าขายดี</option>
              <option value="minPrice">ราคาน้อยไปมาก</option>
              <option value="maxPrice">ราคามากไปน้อย</option>
            </select>
          </div>
        </div>
        <div v-if="shopLoading" role="status">
          <svg aria-hidden="true" class="mx-auto w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
               fill="none" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"></path>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"></path>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <div class="font-mono p-6 pt-4 flex flex-wrap justify-between">
          <div v-if="error != null">
            {{ error }}
          </div>
          <product-card v-for="product in productView"
                        :key="product.id"
                        :product="product"
                        :url="`/products/${product.id}`">
          </product-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/products/ProductCard.vue";
import {shopAPI} from "../../services/api";
import {useProductStore} from "../../stores/product";

export default {
  name: "ShopSelectView",
  components: {
    ProductCard
  },
  setup() {
    const product_store = useProductStore()
    return {product_store}
  },

  data: () => {
    return {
      shop: null,
      error: null,
      shopLoading: false,
      sortOption: 'default'
    }
  },
  watch: {
    async '$route.params.id'() {
      await this.findProduct()
    }
  },
  computed: {
    productView() {
      const mapToGetters = {
        minPrice: this.product_store.sortByMinPriceToMaxPrice,
        maxPrice: this.product_store.sortByMaxPriceToMinPrice,
        bestSeller: this.product_store.sortByLatest
      }
      return mapToGetters[this.sortOption] || this.product_store.products
    }
  },
  async mounted() {
    await this.findProduct()
  },
  methods: {
    async findProduct() {
      try {
        this.shopLoading = true
        this.shop = await shopAPI.getShopById(this.$route.params.id)
        this.shopLoading = false
        this.product_store.products = this.shop.products
        console.log(this.product_store.products)
      } catch (error) {
        this.shopLoading = true
        this.error = error.message
      }
    }
  }
}
</script>

<style scoped>
/*.photoSize{*/
/*  width:200px;*/
/*  height:200px;*/
/*}*/
</style>