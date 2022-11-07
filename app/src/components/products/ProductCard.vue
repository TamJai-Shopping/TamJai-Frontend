<template>
    <router-link v-if="url != ''" :to="url" class="m-2 block p-6 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <img :src="this.$axios.defaults.baseURL + '/images/search?product_id=' + product.id" class="m-1 p-3" width="150" height="150">
        <p class="pt-3 text-gray-700">{{ product.name }}</p>
        <p class="pt-1 text-red-500"> {{ product.price }} บาท</p>
        <p class="pt-2 text-gray-500 text-sm">ขายแล้ว {{ product.sell_amount }} ชิ้น</p>
    </router-link>
</template>

<script>
export default {
   data() {
     return {
      product: null
     }
   },
   props: {
    product: Object,
    url: {
        type: String,
        default: '',
    },
   }
 }
</script>