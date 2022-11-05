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
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">ที่ต้องจัดส่ง</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">ระหว่างจัดส่ง</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">สำเร็จ</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">การยกเลิกสินค้า</span>
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
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">วางขายอยู่</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">สินค้าหมด</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-9 whitespace-nowrap">สินค้าที่ถูกรายงาน</span>
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
            <div class="font-mono mt-4 mx-20 overflow-x-auto relative">
        <h1 class="py-8 text-2xl text-center">เพิ่มสินค้า</h1>

        <img src="@/assets/shop.png" class="mx-auto mb-8" width="160" height="160">
        <div class="text-center mb-6">
            <label class="mt-5 text-sm bg-[#F1F1F1] border border-gray-300 rounded-full shadow cursor-pointer hover:bg-[#e0e0e0] p-2.5" for="file_input">เลือกรูปภาพ</label>
            <input class="hidden" id="file_input" type="file">
        </div>
        <div class="mx-auto w-5/6 my-4">
            <label for="name" class="mb-2 text-gray-900 dark:text-gray-300">ชื่อสินค้า</label>
            <input type="text" id="" v-model="product.name" class="mt-2 bg-[#F1F1F1] border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
        </div>
        <div class="mx-auto w-5/6 my-4">
            <label for="description" class="block mb-2 text-gray-900 dark:text-gray-300">รายละเอียดสินค้า</label>
            <textarea rows="4" type="text" id="" v-model="product.description" class="mt-2 bg-[#F1F1F1]  border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required></textarea>
        </div>
        
        <div class="mx-auto w-5/6 my-4">
            <label for="price">ราคา</label>
            <input type="number" v-model="product.price" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg">
            <label class="mx-4">บาท</label>
        </div>

        <div class="mx-auto w-5/6 my-4">
            <label for="price">หมวดหมู่</label>
            <input type="text" v-model="product.categories" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg">
        </div>

        <div class="mx-auto w-5/6 my-4">
            <label for="total_amount">จำนวนสินค้าในคลัง</label>
            <input type="number" v-model="product.total_amount" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg">
            <label class="mx-4">ชิ้น</label>
        </div>
        
        <div class="mx-auto w-5/6 my-4">
            <label for="alert_amount">แจ้งเตือนสินค้าเมื่อเหลือน้อยกว่า</label>
            <input type="number" v-model="product.alert_amount" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg">
            <label class="mx-4">ชิ้น</label>
        </div>

        
        <div class="text-center mb-4">
            <button v-on:click="" class="m-2 bg-[#F1F1F1] border border-gray-300 text-gray-700 shadow hover:bg-[#DCDADA] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-6 py-2.5 text-center">ยกเลิก</button>
            <button v-on:click="saveNewProduct()" class="m-2 text-center text-gray-700 bg-[#B0C03B] shadow hover:bg-[#aab03c] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  w-full sm:w-auto px-6 py-2.5">บันทึกข้อมูล</button>
        <div>
        </div>
        </div>
    </div>
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
            price: 1
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