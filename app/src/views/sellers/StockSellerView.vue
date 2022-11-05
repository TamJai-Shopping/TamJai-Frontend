<template>
    <section class = "mx-8">
        <h1 class="text-3xl text-green-700">{{ title }}</h1>
        
        <ProductSellerCard v-for="product in products" 
        :product="product"
        :key="product.id"
        :url="`products/${product.id}`"></ProductSellerCard>

        <!-- <div v-for="product in products" :key="product.id" class="grid grid-cols-2 p-4 border-2 border-blue-800 rounded-lg">
            <h3 class="text-xl">{{product.id}}</h3>
            <p class="text-xl">{{product.name}}</p>
            <p class="text-xl">{{product.price}}</p>
            <button v-on:click="selectProduct(product)" class="px-2 py-1 border rounded-xl">Edit</button>
        </div> -->

        {{ selected }}
    </section>
</template>

<script>
import ProductSellerCard from '@/components/sellers/ProductSellerCard.vue'
export default{
    data(){
        return {
            title : "All Product",
            selected: null,
            products: null
        }
    },
    methods: {
        selectProduct(product){
            this.$router.push(`products/${product.id}`)
        }
    },
    async mounted(){
        console.log("mounted")
        try {
            const response = await this.$axios.get('/products')
            if (response.status === 200) {
                this.products = response.data.data
                console.table(this.products)
            } else {
                console.error(response.status)
            }
        } catch (error) {
            this.error = error.message
        }
    },
    components:{
        ProductSellerCard
    }
}
</script>

<style>

</style>