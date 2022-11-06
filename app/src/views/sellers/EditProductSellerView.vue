<template>
    <div class="m-8" v-if="product">
        <h1 class="text-3xl">Edit Product {{$route.params.id}}</h1>
        <div class="m-8">
        <h1>name :{{ product.name }}</h1>
        <h1>description :{{ product.description }}</h1>
        <h1>price :{{ product.price }}</h1>
        </div>
        <div>
            <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                    <img class="rounded-lg" :src="this.$axios.defaults.baseURL + '/images/search?product_id=' + product.id" alt="image description">
                </a>
                <figcaption class="absolute bottom-6 px-4 text-lg text-white">
                    <p>Do you want to get notified when a new component is added to Flowbite?</p>
                </figcaption>
            </figure>
        </div>
        
    </div>
</template>

<script>
export default {
    data (){
        return{
            error: null,
            product: null,
            image: null
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