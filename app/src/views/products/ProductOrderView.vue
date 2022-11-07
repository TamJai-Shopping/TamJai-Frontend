<template>
    <div class="flex items-center justify-center">
        <div class="font-mono w-full mx-60 my-8 bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md p-4">
            <h1 class="text-center text-2xl mt-10 mb-2">รายการสินค้าที่สั่งซื้อ</h1>
            <div v-for="basketItem in basket.basketItems" v-bind:key="basket.basketItems.id">
                <div class="flex items-center  mx-16">
                    <img class="rounded-lg mr-10 mt-8" src="https://cdn-icons-png.flaticon.com/512/2957/2957307.png" width="100" height="100">
                    <p class="mx-8">basketItem: {{ basketItem.id }}</p>
                    <p class="mx-8">product: {{ basketItem.product_id }}</p>
                    <p class="mx-8">จำนวน {{ basketItem.quantity }} ชิ้น</p>
                </div>
            </div>
            <div class="flex ml-20 mt-10">
                <p class="mr-4">ราคารวมทั้งหมด </p>
                <p>{{ basket.total_price }}</p>
                <p class="ml-4 mr-20">บาท</p>
            </div>
            <hr class="my-8 mx-10 h-px bg-gray-300 border">
            <div class="mx-20">
                <div class="w-full my-6">
                    <label for="address">ที่อยู่จัดส่ง</label>
                    <textarea v-model="createOrder.location" rows="4" type="text" id="" class="mt-4 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required></textarea>
                </div>
            </div>
            <hr class="my-8 mx-10 h-px bg-gray-300 border">
            <div class="mx-20">
                <div class="w-full my-6">
                    <label for="address">การชำระเงิน</label>
                    <select name="รหัสพนักงาน" id="รหัสพนักงาน"  class="ml-10 p-2 pl-4 w-2/4 border-2 border-gray-300 rounded-lg">
                        <option value="เก็บเงินปลายทาง">เก็บเงินปลายทาง</option>
                        <option value="Mobile Banking">Mobile Banking</option>
                        <option value="บัตรเครดิต/บัตรเดบิต">บัตรเครดิต/บัตรเดบิต</option>
                    </select>
                </div>
            </div>
            <div class="text-center m-4">
                <button type="submit" @click="createOrder()" class="m-2 text-center text-white bg-[#528D58] shadow hover:bg-[#aab03c] rounded-lg  w-full sm:w-auto px-6 py-2.5">ยืนยันการสั่งซื้อ</button>
            </div>
        </div> 
    </div>

    <div>
        <p>-----------------------------------------------</p>
        <p>test: {{basket}}</p>
        <p>Key: {{key}}</p>
        <button @click="getTotalPrice()">คำนวนราคา</button>
    </div>
    
</template>

<script>
import { useBasketStore } from '@/stores/basket.js'
import { useProductStore } from '@/stores/product.js'
import { useShopStore } from '@/stores/shop.js'
import { useBasketItemStore } from '@/stores/basketItem.js'

export default {
    setup() {
        const basket_store = useBasketStore()
        const product_store = useProductStore()
        const shop_store = useShopStore()
        const basketItem_store = useBasketItemStore()
        return { basket_store, product_store, shop_store, basketItem_store }
    },

    data() {
        return {
            createOrder: {
                user_id: '',
                location: '',
            },
            createOrderItem: {
                user_id: '',
            },
            title: "Basket List",
            basket: null,
            basketItems: '',
            key: ''

        }
    },
    computed: {

    },
    watch: {},
    methods: {
        async refreshBaskets(data) {
            if (data.refresh) {
                await this.basket_store.fetch()
                this.basket = this.basket_store.getBaskets
            }
        },
        async refreshProducts(data) {
            if (data.refresh) {
                await this.product_store.fetch()
                this.Products = this.product_store.getProducts
            }
        },
        async refreshShops(data) {
            if (data.refresh) {
                await this.shop_store.fetch()
                this.Products = this.shop_store.getShops
            }
        },
        async refreshBasketItems(data) {
            if (data.refresh) {
                await this.basketItem_store.fetch()
                this.basketItems = this.basketItem_store.getBaskets
            }
        },

        searchProductById(id) {
            return this.product_store.getProductById(id)
        },

        basketsByShop: function (shop_id) {
            return this.basket_store.getBasketsByShop(shop_id);
        },
        buyItems(shop_id) {
            this.selectShop = shop_id
        },

        getTotalPrice(){
            // this.basket_store.key = idd
            // this.basket_store.totalPrice()
        },
        createOrder(){
            this.createOrder.user_id = 1
            this.createOrderItem.user_id = 1
            this.basket_store.createOrder($createOrder)
            this.basket_store.createOrderItem(createOrderItem)
            // this.basket_store.delete()
            // this.basketItem_store.delete()
        }

    },
    async mounted() {
        console.log("mounted")
        this.error = null

        try {

            await this.product_store.fetch()
            this.products = this.product_store.getProducts

            await this.shop_store.fetch()
            this.shops = this.shop_store.getShops

            await this.basketItem_store.fetch()
            this.basketItems = this.basketItem_store.getBaskets
        } catch (error) {
            this.error = error.message
        }


    },
    async created() {
    const id = this.$route.params.id

    try {
      const response = await this.$axios.get(`/baskets/${id}`)
      if (response.status == 200) {
        this.basket = response.data.data
        console.table(this.basket)
      }
    } catch (error) {
      console.log(error)
      this.error = error.message
    }
  }
}
</script>