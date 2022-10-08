<script setup>

</script>
    
<template >
  <div class="font-mono mx-auto max-w-7xl text-gray-700">
    <h1 class="pl-8 pt-6 text-xl">หมวดหมู่สินค้า</h1>
    <div class="p-7 pt-4 flex flex-wrap justify-between">
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2153/2153788.png" class="m-1 p-2" width="120" height="120">
        <h2 class="text-center pt-3">ผักและผลไม้</h2>
      </a>    
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2957/2957307.png" class="m-1 p-2" width="120" height="120">
        <h2 class="text-center pt-3">เครื่องแต่งกาย</h2>
      </a>
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png" class="m-1 p-2" width="120" height="120">
        <h2 class="text-center pt-3">อิเล็กทรอนิกส์</h2>
      </a>
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2668/2668914.png" class="m-1 p-2" width="120" height="120">
        <h2 class="text-center pt-3">กล้องถ่ายภาพ</h2>
      </a>
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/857/857418.png" class="m-1 p-2" width="120" height="120">
        <h2 class="text-center pt-3">กีฬา</h2>
      </a>
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2331/2331852.png" class="m-1 p-2" width="120" height="120">
        <h2 class="text-center pt-3">เกม</h2>
      </a>
    </div>
    <div class="pl-8 flex">
      <h1 class="pt-1.5 text-xl">สินค้าทั้งหมด</h1>
      <div class="ml-auto pr-9">
        <label class="px-3 text-lg">เรียงโดย</label>
        <select v-model="sortOption" class="rounded-lg shadow bg-gray-100 border-gray-200 py-2">
          <option value="default">ล่าสุด</option>
          <option value="name">ราคาน้อยไปมาก</option>
          <option value="point">ราคามากไปน้อย</option>
        </select>
      </div>
    </div>
    <div class="font-mono p-6 pt-4 flex flex-wrap justify-between">
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2346/2346952.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">บรอกโคลี</p>
        <p class="pt-1 text-red-500">59 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 10 ชิ้น</p>
      </a> 

      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/644/644458.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">iPhone X</p>
        <p class="pt-1 text-red-500">19999 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 200 ชิ้น</p>
      </a>  

      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/3277/3277473.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">กระเป๋านักเรียน</p>
        <p class="pt-1 text-red-500">250 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 10 ชิ้น</p>
      </a>  

      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/3978/3978929.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">Smart Watch</p>
        <p class="pt-1 text-red-500">1699 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 200 ชิ้น</p>
      </a>  
 
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/4612/4612573.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">แว่นตากันแดด</p>
        <p class="pt-1 text-red-500">299 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 30 ชิ้น</p>
      </a>   
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">จักรยาน</p>
        <p class="pt-1 text-red-500">7999 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 10 ชิ้น</p>
      </a> 

            <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2957/2957307.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">เสื้อผ้าแฟชั่น</p>
        <p class="pt-1 text-red-500">199 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 30 ชิ้น</p>
      </a>   
      
      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2668/2668914.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">กล้อง</p>
        <p class="pt-1 text-red-500">9999 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 100 ชิ้น</p>
      </a>  

      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/2224/2224115.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">แครอท</p>
        <p class="pt-1 text-red-500">23 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 10 ชิ้น</p>
      </a> 

      <a href="#" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img src="https://cdn-icons-png.flaticon.com/512/1373/1373568.png" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">Nintendo Switch</p>
        <p class="pt-1 text-red-500">9999 บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว 100 ชิ้น</p>
      </a>   
    </div>
  </div>
</template>

<style scoped>

</style>