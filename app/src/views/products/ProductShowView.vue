<template>
    <div class="m-8" v-if="product">
      <h1 class="text-3xl">{{ product.name }}</h1>
      <p>ข้อมูล {{ product.description }}</p>
      <p>ราคา {{ product.price }} บาท</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        error: null,
        product: null
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