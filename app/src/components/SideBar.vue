<template>
  <aside class="w-64 shadow-lg bg-gray-50" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <div class="flex">
        <img src="src/assets/filter.svg" class="mx-2 mb-1" style="width: 30px; height: 30px;">
        <h2>หมวดหมู่สินค้า</h2>
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
      </div>
      <div>
      <select v-model="selected" class="px-14 rounded-lg bg-gray-100 border-gray-300 my-3" >
        <option disabled value="">เลือกหมวดหมู่</option>
        <option value="profile">โปรไฟล์</option>
        <option value="setting">การตั้งค่า</option>
        <option value="logOut">ออกจากระบบ</option>
      </select>
      </div>
      <div>
        <h2 class="my-3">เลือกตามช่วงราคา</h2>
        <div class="flex">
        <input type="text" class="border border-2 rounded-xl px-4 py-2 w-24 h-8 mr-1.5" name="minPrice" placeholder="ราคาต่ำที่สุด"/>
        <p> - </p>
        <input type="text" class="border border-2 rounded-xl px-4 py-2 w-24 h-8 ml-1.5" name="maxPrice" placeholder="ราคาสูงสุด"/>
        <button class="rounded-lg "></button>
        </div>
      </div>
      <div class="my-3 flex flex-col space-y-3">
        <div class="flex-auto">
          <div class="flex-auto">
        <input type="checkbox" id="jack" value="Jack">
        <label for="jack">Jack</label>
          </div>
          <div class="flex-auto">
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
          </div>
          <div class="flex-auto">
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
          </div>
          <div class="flex-auto">
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Job</label>
          </div>
          <div class="flex-auto">
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Marry</label>
          </div>
        </div>
      </div>
      <div class="flex my-3">
        <button type="submit" class="rounded-lg bg-green-200 m-3 p-2">ตกลง</button>
        <button type="reset" class="rounded-lg bg-red-300 m-3 p-2">ล้างสิ่งที่เลือก</button>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Filter"
}
</script>

<style scoped>

</style>