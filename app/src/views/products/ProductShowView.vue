<template>
  <div class="m-8 bg-gray-400">   
    <img src="https://pbs.twimg.com/media/FXSOQxdVUAELv2U?format=png&name=small" class="m-1 p-3" width="150" height="150">
  </div>

  <div>
    <button class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
      ซื้อเลย
    </button>

    <button class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
      หยิบลงตะกร้า
    </button>
  </div>

  <div>
    <button class="bg-gray-400 block mt-4 py-2 text-white font-semibold mb-2">
      เพิ่ม
    </button>
    <button class="bg-gray-400 block mt-4 py-2 text-white font-semibold mb-2">
      ลด
    </button>
    <input type="text">
  </div>

  <div class="m-8" v-if="product">
    <h1 class="text-3xl">{{ product.name }}</h1>
    <p>ข้อมูล {{ product.description }}</p>
    <p>ราคา {{ product.price }} บาท</p>
  </div>
  <div class="m-8">
    <p>หมวดหมู่</p>
  </div>

  <div class="m-8" v-if="product">
    <h1>-----------------------------------------------</h1>
    <h1 >{{ product }}</h1>
  </div>

</template>
  
  <script>
  export default {
    data() {
      return {
        error: null,
        product: null,
        category: null
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