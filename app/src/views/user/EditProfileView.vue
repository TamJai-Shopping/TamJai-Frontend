<script setup>
</script>
    
<template >
  <div class="font-mono mx-auto max-w-7xl text-gray-700 px-20 w-5/6">
    <h1 class="py-8 text-xl text-center">แก้ไขข้อมูลผู้ใช้</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" class="mx-auto mb-8" width="160" height="160">
    <div class="text-center">
        <label class="mt-5 text-sm bg-[#F1F1F1] border border-gray-300 rounded-full shadow cursor-pointer hover:bg-[#e0e0e0] p-2.5" for="file_input">แก้ไขรูปภาพ</label>
        <input class="hidden" id="file_input" type="file">
    </div>
    <form>
        <div class="grid gap-6 mt-8 mb-6 md:grid-cols-2">
            <div>
                <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชื่อผู้ใช้</label>
                <input type="text" id="" class="bg-[#F1F1F1]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">เบอร์โทรศัพท์</label>
                <input type="tel" id="phone" class="bg-[#F1F1F1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

        </div>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">อีเมล</label>
            <input type="email" id="email" class="bg-[#F1F1F1]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div> 
        <div class="mb-6">
            <label for="old_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">รหัสผ่านเดิม</label>
            <input type="password" id="old_password" class="bg-[#F1F1F1] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div> 
        <div class="mb-6">
            <label for="new_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">รหัสผ่านใหม่</label>
            <input type="password" id="new_password" class="bg-[#F1F1F1]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div> 
        <div class="mb-6">
            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ยืนยันรหัสผ่านใหม่</label>
            <input type="password" id="confirm_password" class="bg-[#F1F1F1]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div> 
        <div class="text-center mb-4">
            <router-link to="/" class="m-2 bg-[#F1F1F1] border border-gray-300 text-gray-700 shadow hover:bg-[#DCDADA] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ยกเลิก</router-link>
            <button type="submit" class="m-2 text-gray-700 bg-[#B0C03B] shadow hover:bg-[#aab03c] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  w-full sm:w-auto px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">บันทึกข้อมูล</button>
        </div>
    </form>
  </div>
</template>
