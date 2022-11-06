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

                <img src="@/assets/shop.png" v-if="imageData.length == 0" class="mx-auto mb-8" width="200" height="200">
                <img :src="imageData" v-if="imageData.length > 0" class="mx-auto mb-8 rounded-lg" width="200" height="200">
                <div class="text-center mb-6">
                    <label class="mt-5 text-sm bg-[#F1F1F1] border border-gray-300 rounded-full shadow cursor-pointer hover:bg-[#e0e0e0] p-2.5" for="file_input">เลือกรูปภาพ</label>
                    <input class="hidden" id="file_input" type="file" @change="imageHandle" accept="image/png, image/jpeg">
                </div>
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
                    <label for="name" class="mb-2 text-gray-900 dark:text-gray-300">ชื่อสินค้า</label>
                    <input type="text" id="" v-model="product.name" class="mt-2 bg-[#F1F1F1] border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                </div>
                <div class="mx-auto w-5/6 my-4">
                    <label for="description" class="block mb-2 text-gray-900 dark:text-gray-300">รายละเอียดสินค้า</label>
                    <textarea rows="4" type="text" id="" v-model="product.description" class="mt-2 bg-[#F1F1F1]  border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required></textarea>
                </div>
        
                <div class="mx-auto w-5/6 my-4">
                    <label for="price">หมวดหมู่ (ถ้าหลายหมวดหมู่ให้ใส่ , คั่น)</label>
                    <input type="text" v-model="product.categories" class="mt-2 bg-[#F1F1F1] border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>
                
                <div class="mx-auto w-5/6 my-4">
                    <label for="price">ราคา</label>
                    <input type="number" v-model="product.price" class="ml-5 p-2 pl-4 w-30 border-2 bg-[#F1F1F1] border-[#F1F1F1] rounded-lg">
                    <label class="mx-4">บาท</label>
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
                    <a href="/seller/products">
                    <button  class="m-2 bg-[#F1F1F1] border border-gray-300 text-gray-700 shadow hover:bg-[#DCDADA] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-6 py-2.5 text-center">ยกเลิก</button>
                    </a>
                    <button v-on:click="saveNewProduct()" class="m-2 text-center text-gray-700 bg-[#B0C03B] shadow hover:bg-[#aab03c] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  w-full sm:w-auto px-6 py-2.5">บันทึกข้อมูล</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FilePreviewfrom from '@/components/sellers/ProductImagePreview.vue'
export default {
    data(){
        return{
            selected: null,
            product: {
                name: "",
                description: "",
                total_amount: 1,
                alert_amount: 1,
                image_path: null,
                price: 0
            },
            imageData: "",
            product_id: null,
            img: null
        }
    },
    methods:{
        async saveNewProduct(){
            //validate data
            try {
                this.product.rating = 0
                this.product.shop_id = 1
                this.product.sell_amount = 0
                this.product.comments = null
                this.product.reviews = null
                this.product.review_count = 0
                this.product.review_stat = 'zero'
                const response = await this.$axios.post("/products", this.product)
                if (response.status == 201) {
                    this.product_id = response.data.product_id
                    this.$router.push(`${this.product_id}`)
                    console.log(response.data.message)

                    let formData = new FormData()
                    formData.append('image', this.img);
                    formData.append('product_id', this.product_id);
                    this.$axios.post(`/images`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                }
            } catch (error) {
                this.error = error.message
                console.log(error)
            }
        },
        imageHandle(event) {
            this.img = event.target.files[0]

            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        }//, 
        // previewImage: function(event) {
        //     // Reference to the DOM input element
        //     var input = event.target;
        //     // Ensure that you have a file before attempting to read it
        //     if (input.files && input.files[0]) {
        //         // create a new FileReader to read this image and convert to base64 format
        //         var reader = new FileReader();
        //         // Define a callback function to run, when FileReader finishes its job
        //         reader.onload = (e) => {
        //             // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
        //             // Read image as base64 and set to imageData
        //             this.imageData = e.target.result;
        //         }
        //         // Start the reader job - read file as a data url (base64 format)
        //         reader.readAsDataURL(input.files[0]);
        //     }
        // }
    },components:{
        FilePreviewfrom
    }
}
</script>