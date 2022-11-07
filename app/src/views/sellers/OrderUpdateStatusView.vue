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
            </ul>
        </div>
        <div class="flex-initial ml-60 w-full lg:max-h-full">
            <div class="font-mono mt-4 mx-20 overflow-x-auto relative">
                <h1 class="py-8 text-2xl text-center">อัพเดทสถานะคำสั่งซื้อ</h1>

               
                <!-- <div>
            <div class="file-upload-form">
                Upload an image file:
                <input type="file" @change="previewImage" accept="image/*">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
        </div> -->

                <div class="mx-auto w-5/6 my-4">
                    <label for="name" class="mb-2 text-gray-900 dark:text-gray-300">รหัสคำสั่งซื้อที่</label>
                    <input type="text" id="" v-model="order.id"  class="mt-2 bg-[#F1F1F1] border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                </div>
        
                <div class="mx-auto w-5/6 my-4">
                    <label for="price">ที่อยู่จัดส่ง</label>
                    
                    <input type="text" v-model="order.location" ก class="mt-2 bg-[#F1F1F1] border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" disabled>
                    
                </div>
                
                <div class="mx-auto w-5/6 my-4">
                    <label for="price">ราคารวม</label>
                    <input type="text" v-model="order.total_price" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg" disabled>
                    <label class="mx-4">บาท</label>
                </div>

                <div class="mx-auto w-5/6 my-4">
                    <label for="total_amount">เลขพัสดุ</label>
                    <input type="text" v-model="order.package_number" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg">
                
                </div>
                
                <div class="mx-auto w-5/6 my-4">
                    <label for="alert_amount">สถานะพัสดุ</label>
                    <input type="text" v-model="order.status" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg">
                </div>
        
                <div class="text-center mb-4">
                    <a href="/seller/orders">
                    <button  class="m-2 bg-[#F1F1F1] border border-gray-300 text-gray-700 shadow hover:bg-[#DCDADA] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-6 py-2.5 text-center">ยกเลิก</button>
                    </a>
                    <button v-on:click="saveNewOrder()" class="m-2 text-center text-gray-700 bg-[#B0C03B] shadow hover:bg-[#aab03c] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  w-full sm:w-auto px-6 py-2.5">แก้ไขข้อมูล</button>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data (){
        return{
            error: null,
            product: null,
            image: null,
            order : null
        }
    },
    async created() {
        const id = this.$route.params.id
        try {
            const response = await this.$axios.get(`/orders/${id}`)
            if (response.status == 200) {
                this.order = response.data.data
                console.table(this.order)
            }
        } catch (error) {
            this.error = error.message
        }
    },methods:{
        async saveNewOrder(){
            //validate data
            try {
                const id = this.$route.params.id
                const response = await this.$axios.put(`/orders/${id}`, this.order)
                if (response.status == 200) {
                    this.order_id = response.data.order_id
                    this.$router.push('/seller/orders')
                    console.log(response.data.message)
                }
            } catch (error) {
                this.error = error.message
                console.log(error)
            }
        }
        
    }
}
</script>