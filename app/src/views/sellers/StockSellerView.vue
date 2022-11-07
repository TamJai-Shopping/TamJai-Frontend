<template>
    <div class="lg:flex">
        <div class="w-60 h-full shadow-md bg-[#F0EFEF] absolute font-mono">
            <ul class="relative mt-4">
                <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                    <img src="https://cdn-icons-png.flaticon.com/512/839/839860.png" class="flex-shrink-0 w-6 h-6 text-gray-500 transition">
                    <span class="flex-1 ml-3 whitespace-nowrap">คำสั่งซื้อ</span>
                </li>
                <li>
                    <a href="/seller/orders" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">ทั้งหมด</span>
                    </a>
                </li>
                <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                    <img src="https://cdn-icons-png.flaticon.com/512/4947/4947410.png" class="flex-shrink-0 w-6 h-6 text-gray-500 transition">
                    <span class="flex-1 ml-3 whitespace-nowrap">คลังสินค้า</span>       
                </li>
                <li>
                    <a href="/seller/products/create" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">เพิ่มสินค้า</span>
                    </a>
                </li>
                <li>
                    <a href="/seller/products" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">สินค้าทั้งหมด</span>
                    </a>
                </li>
                <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                    <img src="https://cdn-icons-png.flaticon.com/512/3524/3524636.png" class="flex-shrink-0 w-6 h-6 text-gray-500 transition">
                    <span class="flex-1 ml-3 whitespace-nowrap">ตั้งค่าร้านค้า</span>
                </li>
                <li>
                    <a href="/shop/edit" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">แก้ไขร้านค้า</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="flex-initial ml-60 w-full lg:max-h-full">
            <div class="font-mono mt-4 mx-20 overflow-x-auto relative shadow-md sm:rounded">
                <table class="w-full text-left text-gray-60 mr-0">
                    <thead class="text-lg text-gray-700 bg-[#e7e7e7]">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" class="py-3 px-6">ชื่อสินค้า</th>
                            <th scope="col" class="py-3 px-6">คงเหลือในคลัง</th>
                            <th scope="col" class="py-3 px-6">ราคา</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    
                    <tbody class="m-2" v-for="product in products" :key="product.id">
                        <tr class="border-t text-gray-700">
                            <td class="py-3 px-6">
                                <a :href="'/products/' + product.id"><img :src="this.$axios.defaults.baseURL + '/images/search?id=' + product.id" class="" width="100" height="100" :alt="'product image id ' + product.id"></a>
                            </td>
                            <td class="py-3 px-6">
                                <a :href="'/products/' + product.id">{{ product.name }}</a>
                            </td>
                            <td class="py-3 px-6" @click="`/products/${product.id}`">
                                {{ product.total_amount }}
                            </td>
                            <td class="py-3 px-6">
                                {{ product.price }}
                            </td>
                            <td>
                                <a :href="`/seller/products/${product.id}`" class="text-gray-600 text-sm p-2 m-3 ml-0.5 rounded bg-[#e7e7e7] hover:bg-[#d3d1d1]">
                                    แก้ไข
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>   
</template>

<script>
import ProductSellerCard from '@/components/sellers/ProductSellerCard.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useProductStore } from "@/stores/product.js"
export default{
    setup() {
    const product_store = useProductStore()
    const auth_store = useAuthStore()
    return { product_store, auth_store }
  },
    data(){
        return {
            title : "All Product",
            selected: null,
            products: null,
            auth : null
        }
    },
    methods: {
        selectProduct(product){
            this.$router.push(`/products/${product.id}`)
        },
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