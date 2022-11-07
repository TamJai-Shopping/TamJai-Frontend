<template >
  <div class="font-mono mx-auto max-w-7xl text-gray-700 px-20">
    <h1 class="py-8 text-2xl text-center">เปิดร้านค้า</h1>
    <!-- <img @change="imageHandle" src="@/assets/shop.png" class="mx-auto mb-8" width="160" height="160"> -->
    <img src="@/assets/shop.png" v-if="image.length == 0" class="mx-auto mb-8" width="200" height="200">
    <img :src="image" v-if="image.length > 0" class="mx-auto mb-8 rounded-lg" width="200" height="200">
    <div class="text-center mb-6">
        <label class="mt-5 text-sm bg-[#F1F1F1] border-[#F1F1F1] rounded-full shadow cursor-pointer hover:bg-[#e0e0e0] p-2.5" for="file_input">เลือกรูปภาพ</label>
        <input class="hidden" id="file_input" type="file">
    </div>
    <form>
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
        imageHandle(e){
            this.image = e.target.files[0]
        },
        async openNewStore() {
            let formData = new FormData()
            formData.append('name', this.name)
            formData.append('description', this.description)
            formData.append('user_id', this.auth.id)
            let response = await this.$axios.post('/shops', formData)

            console.log(response)
            
            formData = new FormData()
            formData.append('image', this.image)
            formData.append('shop_id', response.data.shop_id)
            response = await this.$axios.post('/images', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
            console.log(response)
            this.$router.push('/seller/products')
        }
    },
}
</script>