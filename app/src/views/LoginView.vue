<template>
    <section>
        <form @submit.prevent="onFormSubmit()" class="flex flex-col items-center justify-center font-mono px-6 py-8 mx-auto md:h-screen lg:py-0">
                <RouterLink to="/" class="mx-20 text-center mb-6 text-2xl text-[#528D58] font-bold">
                    TamJai Shopping    
                </RouterLink>
                <div v-if="error">
                    {{ error }}
                </div>
                <div class="w-full bg-[#F8F8F8] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div class="space-y-4 md:space-y-6">
                            <h1 class="font-bold text-xl ml-36">
                                เข้าสู่ระบบ
                            </h1>
                            <div v-if="error">
                                {{ error }}
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-gray-900 dark:text-white">อีเมล</label>
                                <input type="email" name="email" id="email" v-model="email" required autocomplete="off" class="bg-white border border-white shadow text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="">
                            </div>
                            <div>
                                <label for="password" class="block mb-2  text-gray-900 dark:text-white">รหัสผ่าน</label>
                                <input type="password" name="password" id="password" placeholder="" v-model="password" required class="mb-2 bg-white border border-white shadow text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" >
                            </div>
                            <div>
                                <button type="submit"  class="w-full text-white mb-3 bg-[#B3BA1E] shadow hover:bg-[#aeb347] rounded-lg px-5 py-2.5 text-center">เข้าสู่ระบบ</button>
                                <p class="text-sm text-gray-600">
                                ยังไม่มีบัญชีใช่หรือไม่ <a href="/signup" class="text-base text-[#B3BA1E] hover:underline font-bold">สมัครบัญชี</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>  
    </section>
</template>

<script>
import { useAuthStore } from '@/stores/auth.js'

export default {
setup() {
    const auth_store = useAuthStore()
    return { auth_store }
},
data() {
    return {
    email: '',
    password: '',
    error: null,
    disabledButton: false
    }
},
methods: {
    async onFormSubmit() {
    this.error = null
    this.disabledButton = true
    try {
        if (await this.auth_store.login(this.email, this.password)) {
        this.$router.push('/')
        } else {
        this.disabledButton = false
        }
    } catch (error) {
        this.error = error.message
        this.disabledButton = false
    }
    }
},
}
</script>