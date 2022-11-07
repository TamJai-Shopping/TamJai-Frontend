<template>
  <header>
    <nav class="bg-[#528D58] border-gray-200 px-2 sm:px-4 py-4 font-mono">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <RouterLink to="/" class="text-white text-2xl font-bold">TamJai Shopping</RouterLink>
        <form class="w-2/4 m-1">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <input name="search" type="search" id="default-search" v-model="search"
                   class="block p-3 pl-12 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-[#B3BA1E] focus:border-blue-500"
                   placeholder="ค้นหาสินค้า" required />
           <router-link to="/products/search" v-on:click="searchProduct">
            <button type="submit" v-on:click="searchProduct"
                    class="text-white absolute right-2.5 bottom-1.5  bg-[#B3BA1E] hover:bg-[#aeb347] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-1.5 py-1.5">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>

            </button>
           </router-link>

          </div>
        </form>
        <div class="justify-between items-center w-full md:flex md:w-auto md:order-1 flex">
            <a href="/baskets"><img src="../assets/shopping-cart.png" class="mr-10" width="30" height="30"></a>
            <div v-if="auth == null" class="">
              <button class="flex items-center mr-2 p-2">
                <a href="/login" class="text-white text-lg">เข้าสู่ระบบ</a>
              </button>
            </div>
            <div v-else class="dropdown">
              <button class="dropbtn flex items-center mr-2 mb-1 p-2 rounded-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png"  style="height: 30px; width: 30px; ">
                <p class="mx-2">{{ auth.email }}</p>
              </button>
              <div class="dropdown-content w-32 rounded-lg">
                <a href="/user/profile/edit" class="rounded-lg">แก้ไขข้อมูลผู้ใช้</a>
                <a href="/shop/create" class="rounded-lg">ร้านค้าของฉัน</a>
                <a href="/logout" class="rounded-lg">ออกจากระบบ</a>
              </div>
            </div>
          </div>
        </div>
        
    </nav>
  </header>
</template>

<script>
import SearchItemView from "../views/products/SearchItemView.vue"
import { useAuthStore } from '@/stores/auth.js'
import { useProductStore } from "@/stores/product.js"
import { RouterLink, RouterView } from 'vue-router'
export default {
  setup() {
    const product_store = useProductStore()
    const auth_store = useAuthStore()
    return { product_store, auth_store }
  },
  data() {
    return {
      auth: null,
      search: "",
      showSearch:'',
      productFilter: [],
    }
  },
  components:{
    SearchItemView
  },
  props:{
    query:{
      type:String,
      default:null,
      // sendKey:String,
    },

  },
  watch: {
    auth_store: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        console.log(newValue.getAuth)
        this.auth = this.auth_store.getAuth
      }
  },
  methods: {
      async searchProduct() {
       // this.productFilter = this.product_store.searchProduct(this.search);
      this.product_store.key = this.search
      this.$router.push({name: 'products.search', query: {q: this.search}});
    }
  }
  },
  async mounted() {
      console.log("mounted")
      this.error = null
      try {
        await this.product_store.fetch()
        await this.category_store.fetch()
        console.log(this.category_store.categories)
        this.products = this.product_store.sortByLatest
        this.categories = this.category_store.categories
      } catch (error) {
        this.error = error.message
      }

      if (this.auth_store.isAuthen) {
        this.auth = this.auth_store.getAuth
      } else {
        this.auth = null
      }
  }
}
</script>

<style>
.dropbtn {
  background-color: white;
  color: black;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #f9f9f9;
}
</style>