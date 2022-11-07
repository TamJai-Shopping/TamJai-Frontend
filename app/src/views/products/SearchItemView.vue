<template>
<search-view-template :products="productView" :loading="loading" :error="error" v-model:sortOption="sortOption" />
</template>

<script>
import ProductCard from '@/components/products/ProductCard.vue'
import {useProductStore} from '@/stores/product.js'

import SideBar from "@/components/SideBar.vue"
import SearchViewTemplate from "./SearchViewTemplate.vue";


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
    },
  },


  async mounted() {
    await this.searchProduct()
  },
  methods: {
    async searchProduct() {
      try {
        this.loading = true
        await this.product_store.searchProduct(this.$route.query.q)
        this.loading = false
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