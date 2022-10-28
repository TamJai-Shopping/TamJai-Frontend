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
            <input name="search" type="search" id="default-search" v-model="searchQuery"
                   class="block p-3 pl-12 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-[#B3BA1E] focus:border-blue-500"
                   placeholder="ค้นหาสินค้า" required />
            <button type="submit"
                    class="text-white absolute right-2.5 bottom-1.5  bg-[#B3BA1E] hover:bg-[#aeb347] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-1.5 py-1.5">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </form>
        <div class="justify-between items-center w-full md:flex md:w-auto md:order-1 flex">
          <img src="../assets/shopping-cart.png" class="mr-10" width="30" height="30">
          <div class="bg-white rounded-xl">
            <a class="container flex flex-wrap justify-between items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" class = "ml-3" style="height: 30px; width: 30px; ">
              <div class="ml-auto pr-9">
                <select v-model="selected" class="ml-3 rounded-lg bg-transparent border-transparent">
                  <option disabled value="">ชื่อ user</option>
                  <option value="profile">โปรไฟล์</option>
                  <option value="setting">การตั้งค่า</option>
                  <option value="logOut">ออกจากระบบ</option>
                </select>
              </div>
            </a>
          </div>
          </div>
        </div>
    </nav>
  </header>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items:[],
      search:""
    };
  },
  mounted() {
    axios.get('https://picsum.photos/v2/list?page=2&limit=10')
        .then(response => {
          this.photoFeed = response.data;
        })
        .catch(error => console.log(error))
  },
  methods:{
    searchClient(id_client){
      axios.get(`http://localhost:3000/api/client/${id_client}`, header)
          .then((response) => {
            console.log(response.data)
          }).catch((err) => {
        console.log({err:err})
      });
    }
  },
  computed:{
    filterclient(){
      return this.client.filter(clients => {
        return clients.id_clients.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
}
</script>

<style scoped>

</style>