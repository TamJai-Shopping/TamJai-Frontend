<template>
    <div class="m-8">
        <h1 class="text-3xl">Create Product</h1>

        <div>
            <label for="name">name</label>
            <input type="text" v-model="product.name">
        </div>
        <div>
            <label for="description">Description</label>
            <textarea name="" id="" cols="30" rows="10" v-model="product.description"></textarea>
        </div>

        <div>
            <label for="total_amount">Total Amount</label>
            <input type="number" v-model="product.total_amount">
        </div>
        
        <div>
            <label for="alert_amount">alert_amount</label>
            <input type="number" v-model="product.alert_amount">
        </div>

        <div>
            <label for="price">Price</label>
            <input type="number" v-model="product.price">
        </div>
        <div class="row">
        

            <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <img src="" alt="" title=""/>
        </div>
        <div class="col-md-6">
            <input type="file" name="image" id="image" class="form-control">
            </div>
        </div>

        
            

        <button v-on:click="saveNewProduct()" class="px-4 py-3 rounded-lg bg-lime-400">Create</button>
        <button v-on:click="" class="px-4 py-3 rounded-lg bg-lime-400">Cancel</button>
        <div>
            <ProductSellerCard :product="product"></ProductSellerCard>
        </div>
    </div>
    
</template>

<script>
import ProductSellerCard from '@/components/sellers/ProductSellerCard.vue'
export default {
    data(){
        return{
            selected: null,
            product: {
            name: "",
            description: "",
            total_amount: 1,
            alert_amount: 1,
            //image_path: null,
            price: 0
            }
        }
    },
    methods:{
        async saveNewProduct(){
            //validate data
            try {
                    this.product.sell_amount = 0
                    this.product.image_path = null
                    this.product.rating = 0
                    this.product.shop_id = 1
                    const response = await this.$axios.post("/products", this.product)
                    if (response.status == 201) {
                        let new_product_id = response.data.product_id
                        this.$router.push(`${new_product_id}`)
                        console.log(response.data.message)
                    }
                } catch (error) {
                    this.error = error.message
                    console.log(error)
                }
        }
    },components:{
        ProductSellerCard
    }
}
</script>