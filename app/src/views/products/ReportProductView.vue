<template>
    <form v-if="auth != null"
        class="font-mono m-20 my-10 text-lg bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md p-4">
        <h1 class="text-2xl">รายงาน</h1>
        <div class="my-4">
            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">อีเมลผู้รายงาน</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                </div>
                <input type="text" id="email-address-icon"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="auth.email" disabled>
            </div>
        </div>
        <div class="my-4">
            <label for="website-admin"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชื่อผู้รายงาน</label>
            <div class="flex">
                <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    @
                </span>
                <input type="text" id="website-admin"
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="auth.name" disabled>
            </div>
        </div>
        <div class="my-4">
            <label for="website-admin"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชื่อสินค้า</label>
            <div class="flex">
                <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    -
                </span>
                <input type="text" id="website-admin"
                    class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="product.name" disabled>
            </div>
        </div>
        <div class="my-4">
            <label for="website-admin"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">หัวข้อ</label>
            <div class="flex">
                <span
                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    -
                </span>
                <input type="text" id="website-admin"
                    class="outline-0 rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="report.topic" required>
            </div>
        </div>
        <div class="my-4">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">รายละเอียดเพิ่มเติม</label>
            <textarea v-model="report.detail" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="อธิบายรายละเอียด..."></textarea>
        </div>
        <div class="flex justify-end">
            <button @click="postReport()" class="bg-gray-300 rounded-lg p-2 hover:bg-gray-200">รายงาน</button>
        </div>
    </form>
    <div v-else class="wall">
        <unauth/>
    </div>
</template>

<script>
import unauth from '@/components/Unauthorize.vue'
import { useAuthStore } from '@/stores/auth.js'

export default {
    setup() {
        const auth_store = useAuthStore()
        return { auth_store }
    },
    mounted() {
        if (this.auth_store.isAuthen) {
            this.auth = this.auth_store.getAuth
        } else {
            this.auth = null
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
            console.log(error)
            this.error = error.message
        }

        try {
            const response = await this.$axios.post(`/auth/me`)
            console.log(response.data)
            if (response.status == 200) {
                this.product = response.data.data
                console.table(this.product)
                this.rating = response.data.data.rating
            }
        } catch (error) {
            console.log(error)
            this.error = error.message
        }
    },
    data() {
        return {
            auth: null,
            product: null,
            report: {
                topic: '',
                detail: ''
            }
        }
    },
    methods: {
        async postReport() {
            const id = this.$route.params.id
            report = {
                user_id: this.auth.id,
                product_id: this.product.id,
                topic: this.report.topic,
                detail: this.report.detail
            }
            try {
                const response = await this.$axios.post(`/report`, report)
                if (response.status == 200) {
                    this.$router.push(`/products/${id}`)
                }
            } catch (error) {
                console.log(error)
                this.error = error.message
            }
        }
    },
    watch: {
        auth_store: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                console.log(newValue.getAuth)
                this.auth = this.auth_store.getAuth
            }
        }
    },
    components: {
        unauth
    }
}
</script>

<style>
</style>