<template >
  <div class="font-mono mx-auto max-w-7xl text-gray-700 px-20">
    <h1 class="py-8 text-2xl text-center">เปิดร้านค้า</h1>
    <form>
    <!-- <img @change="imageHandle" src="@/assets/shop.png" class="mx-auto mb-8" width="160" height="160"> -->
    <img src="@/assets/shop.png" v-if="image.length == 0" class="mx-auto mb-8" width="200" height="200">
    <img :src="image" v-if="image.length > 0" class="mx-auto mb-8 rounded-lg" width="200" height="200">
    <div class="text-center mb-6">
        <label class="mt-5 text-sm bg-[#F1F1F1] border-[#F1F1F1] rounded-full shadow cursor-pointer hover:bg-[#e0e0e0] p-2.5" for="file_input">เลือกรูปภาพ</label>
        <input class="hidden" id="file_input" type="file" @change="imageHandle">
    </div>
    
        <div class="mx-auto w-5/6 my-4">
            <label for="" class="mb-2 text-gray-900 dark:text-gray-300">ชื่อร้านค้า</label>
            <input v-model="name" type="text" id="" class="mt-2 bg-[#F1F1F1]  border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
        </div>
        <div class="mx-auto w-5/6 my-4">
            <label for="" class="block mb-2 text-gray-900 dark:text-gray-300">รายละเอียด</label>
            <textarea v-model="description" rows="4" type="text" id="" class="mt-2 bg-[#F1F1F1]  border-[#F1F1F1] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
        </div>
        <div class="text-center m-4">
            <button type="submit" v-on:click="openNewStore()" class="m-2 text-center text-gray-700 bg-[#B0C03B] shadow hover:bg-[#aab03c] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  w-full sm:w-auto px-6 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เปิดร้านค้า</button>
        </div>
    </form>
  </div>

</template>

<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
    setup() {
        const auth_store = useAuthStore()
        return { auth_store }
    },
    data() {
        return{
            auth: null,
            image: '',
            name: null,
            description: null,
        }
    },
    created() {
        this.auth = this.auth_store.auth
    },
    methods: {
        imageHandle(event){
            this.image = event.target.files[0]

            var input = event.target;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.image = e.target.result;
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        },
        async openNewStore() {
            try {
                let formData = new FormData()
                formData.append('name', this.name)
                formData.append('description', this.description)
                formData.append('user_id', this.auth.id)
                let response = await this.$axios.post('/shops', formData)
                if (response.status == 200) {
                    let Data = new FormData()
                    Data.append('image', this.image)
                    Data.append('shop_id', response.data.shop_id)
                    response = await this.$axios.post('/images', Data, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            })
                }
                this.goTo('/sellers/products')
                        
            } catch (error) {
                console.log(error)
            }
        },
        goTo(path) {
            this.$router.push(path)
        }
    },
}
</script>