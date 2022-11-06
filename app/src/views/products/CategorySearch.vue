<template>
  <search-view-template :products="productView" :loading="loading" :error="error" v-model:sortOption="sortOption" />
</template>

<script>
import ProductCard from '@/components/products/ProductCard.vue'
import SearchViewTemplate from "./SearchViewTemplate.vue"
import {useProductStore} from '@/stores/product.js'
import SideBar from "@/components/SideBar.vue"


export default {
  setup() {
    const product_store = useProductStore()
    return {product_store}
  },

  data() {
    return {
      error: null,
      sortOption: 'default',
      loading: true
    }
  },

  watch: {
    async '$route.params.id'() {
      await this.searchProductsByCategoryId()
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
    await this.searchProductsByCategoryId()
  },

  methods: {
    async searchProductsByCategoryId() {
      try {
        // await this.product_store.fetch()
        this.loading = true
        await this.product_store.searchProductsByCategoryId(this.$route.params.id)
        // console.log(this.product_store.searchProductsByCategoryId(this.$route.params.id))
        // change categoryId to given param
        // await this.product_store.searchProductsByCategoryId(categoryId)

        this.loading = false

        // console.log(this.products)
      } catch (error) {
        this.loading = false
        this.error = error.message
      }
    },
  },
  components: {
    SearchViewTemplate,
    ProductCard,
    SideBar
  },
}
</script>

<style scoped>

</style>