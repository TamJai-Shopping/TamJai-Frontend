<template>
  <div class="font-mono mx-auto max-w-7xl text-gray-700">
    <div class="inline">
      <div class="pl-8 flex mt-4">
        <h1 class="pt-1.5 text-xl pl-14">ผลการค้นหา</h1>
        <div class="flex justify-end">
            <div>
                <input type="number" min="0" v-model="priceRange.start" id="start_price" class="bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <p class="mx-4">-</p>
            <div>
                <input type="number" min="0" v-model="priceRange.end" id="end_price" class="bg-gray-50 w-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="mx-4 flex inset-y-0 left-0 items-center pl-3 cursor-pointer">
                <button @click="priceFilter()">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </div>
        </div>
        <div class="ml-auto pr-9">
          <label class="px-3 text-lg">เรียงโดย</label>
          <select v-model="sortOption" class="rounded-lg shadow bg-gray-100 border-gray-200 py-2 mr-14">
            <option value="default">ล่าสุด</option>
            <option value="bestSeller">สินค้าขายดี</option>
            <option value="minPrice">ราคาน้อยไปมาก</option>
            <option value="maxPrice">ราคามากไปน้อย</option>
          </select>
        </div>
      </div>
      <div v-if="loading" role="status">
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
      
    <!-- <div v-if="product == null">
        <p class="text-center mt-4 text-gray-500">ไม่พบสินค้าที่ค้นหา</p>
    </div> -->
    <div class="font-mono p-6 pt-4 flex flex-wrap justify-start pl-20">
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
</template>

<script>
import ProductCard from '@/components/products/ProductCard.vue'
import {useProductStore} from '@/stores/product.js'
import axios from "axios";
import SideBar from "@/components/SideBar.vue"
import {storeToRefs} from "pinia";
import {computed} from "vue";

export default {
  setup() {
    const product_store = useProductStore()
    return {product_store}
  },

  data() {
    return {
      error: null,
      sortOption: 'default',
      loading: true,
      priceRange: {
          start: null,
          end: null
      },
      products: null
    }
  },
  watch: {
    async '$route.query.q'() {
      await this.searchProduct()
    }
  },
  computed: {
    productView() {
      const mapToGetters = {
        minPrice: this.product_store.sortByMinPriceToMaxPrice,
        maxPrice: this.product_store.sortByMaxPriceToMinPrice,
        bestSeller: this.product_store.sortByBestSeller
      }
      return mapToGetters[this.sortOption] || this.product_store.products
    }

  },
  async mounted() {
    await this.searchProduct()

  },
  methods: {
    async searchProduct() {
      try {
        // await this.product_store.fetch()
        this.loading = true
        await this.product_store.searchProduct(this.$route.query.q)

        this.loading = false

        // console.log(this.products)
      } catch (error) {
        this.loading = false
        this.error = error.message
      }
    },
    async priceFilter() {
          if (this.priceRange.start == null) this.priceRange.start = 0
          if (this.priceRange.end == null) this.priceRange.end = 1000000
          if (this.priceRange.end < this.priceRange.start) {
              return null
          }
          await this.product_store.searchProduct(this.$route.query.q)
          this.products = this.product_store.sortByLatest
          this.products = this.products.filter(product => {
              return product.price >= this.priceRange.start && product.price <= this.priceRange.end
          })
          // TODO: ถ้า filter ได้แล้ว จะทำให้ sortOption กลับไปเป็น default
      },
  },
  components: {
    ProductCard,
    SideBar
  },
}
</script>

<style scoped>

</style>