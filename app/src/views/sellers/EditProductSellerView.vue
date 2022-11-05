<template>
    <div class="m-8" v-if="product">
        <h1 class="text-3xl">Edit Product {{$route.params.id}}</h1>
        <div class="m-8">
        <h1>name :{{ product.name }}</h1>
        <h1>description :{{ product.description }}</h1>
        <h1>price :{{ product.price }}</h1>
        </div>
        
    </div>
</template>

<script>
export default{
    data (){
        return{
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
                this.error = error.message
            }
        }
}
</script>