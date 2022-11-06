<template>
    <section>
        <div class="flex flex-col items-center my-10 font-mono px-6 py-8 mx-auto md:h-screen lg:py-0">
                <RouterLink to="/" class="mx-20 text-center mb-6 text-2xl text-[#528D58] font-bold">
                    TamJai Shopping    
                </RouterLink>
                <div v-if="error">
                    {{ error }}
                    </div>
                <form @submit.prevent="saveNewUser()">
                <div class="w-full bg-[#F8F8F8] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div class="space-y-4 md:space-y-6">
                            <h1 class="font-bold text-xl ml-36">
                                สมัครบัญชี
                            </h1>
                            
                            <div>
                                <label for="email" class="block mb-2 text-gray-900 dark:text-white">อีเมล</label>
                                <input type="email" name="email" id="email" v-model="form.email" required autocomplete="off" class="bg-white border border-white shadow text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="" >
                            </div>
                            <div>
                                <label for="username" class="block mb-2 text-gray-900 dark:text-white">ชื่อผู้ใช้</label>
                                <input type="text" name="username" id="username" v-model="form.name" required autocomplete="off" class="bg-white border border-white shadow text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="" >
                            </div><div>
                                <label for="tel" class="block mb-2 text-gray-900 dark:text-white">เบอร์โทรศัพท์</label>
                                <input type="tel" name="tel" id="tel" v-model="form.phone_number" required autocomplete="off" class="bg-white border border-white shadow text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 " placeholder="" >
                            </div>
                            <div>
                                <label for="password" class="block mb-2  text-gray-900 dark:text-white">รหัสผ่าน</label>
                                <input type="password" name="password" id="password" placeholder="" v-model="form.password" required autocomplete="off" class="mb-2 bg-white border border-white shadow text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" >
                            </div>
                            <div>
                                <label for="confirm_password" class="block mb-2  text-gray-900 dark:text-white">ยืนยันรหัสผ่าน</label>
                                <input type="password" name="confirm_password" id="confirm_password" placeholder="" v-model="form.password_confirmation" required autocomplete="off" class="mb-2 bg-white border border-white shadow text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" >
                            </div>
                            <div>
                                <button type="submit" class="w-full text-white mb-3 bg-[#B3BA1E] shadow hover:bg-[#aeb347] rounded-lg px-5 py-2.5 text-center">สมัครบัญชี</button>
                                <p class="text-sm text-gray-600">
                                มีบัญชีอยู่แล้ว <a href="/login" class="text-base text-[#B3BA1E] hover:underline font-bold">เข้าสู่ระบบ</a>
                                </p>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                </form> 
        </div>
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
        form: {
                                name:'',
                                email: '',
                                password: '',
                                password_confirmation: '',
                                phone_number: '',
                                image_path: null,
                                error: null
                                }
    }
},
methods: {
    async saveNewUser(){
            //validate data
            try {                
                const response = await this.$axios.post("/signup", this.form)
                if (response.status == 201) {
                    this.user_id = response.data.user_id
                    this.$router.push('/login')
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