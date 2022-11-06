<template>
    <div class="m-8 bg-gray-400">
      <img src="https://pbs.twimg.com/media/FXSOQxdVUAELv2U?format=png&name=small" class="m-1 p-3" width="150"
        height="150">
    </div>

    <div>
      <button class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
        ซื้อเลย
      </button>

      <button @click="saveNewBasketItems()"
        class="bg-gray-400 block w-full bg-angelBaby-300 mt-4 py-2 text-white font-semibold mb-2">
        หยิบลงตะกร้า
      </button>
    </div>

    <div>
      <button @click="onClickPlusBuyAmount" class="bg-gray-400 block mt-4 py-2 text-white font-semibold mb-2">
        เพิ่ม
      </button>
      <button @click="onClickMinusBuyAmount" class="bg-gray-400 block mt-4 py-2 text-white font-semibold mb-2">
        ลด
      </button>
      <input type="number" v-model="buyAmount">
    </div>

    <div class="m-8" v-if="product">
      <h1 class="text-3xl">{{ product.name }}</h1>
      <p>ข้อมูล {{ product.description }}</p>
      <p>ราคา {{ product.price }} บาท</p>
    </div>


    <div v-for="categories in product.categories" v-bind:key="product.id" class="m-8">
      <p>หมวดหมู่: {{ categories.name }}</p>
    </div>

    <div class="m-8" v-if="product">
      <h1>-----------------------------------------------</h1>
      <h1>{{ product }}</h1>
    </div>

    <hr class="my-4 mx-auto w-48 h-1 bg-gray-300 rounded border-0 md:my-10 dark:bg-gray-700">
    
    <div class="grid grid-cols-3 gap-2 px-8">
      <div class="flex justify-center items-center">
          <div class="">
              <h1 class="text-6xl font-bold text-gray-500">4.5</h1>
              <p class="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-400">out of 5</p>
          </div>
          <div class="justify-center ml-4 w-full grid-rows-5 grid-cols-1 grid">
            
              <div class="justify-center items-center w-full grid-cols-3 grid">
                  <div class="flex justify-end mr-4">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
                      <div class="h-2 bg-gray-300 rounded" style="width: 70%"></div>
                  </div>
              </div>
            
              <div class="justify-center items-center w-full grid-cols-3 grid">
                  <div class="flex justify-end mr-4">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
                      <div class="h-2 bg-gray-300 rounded" style="width: 17%"></div>
                  </div>
              </div>

              <div class="justify-center items-center w-full grid-cols-3 grid">
                  <div class="flex justify-end mr-4">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
                      <div class="h-2 bg-gray-300 rounded" style="width: 8%"></div>
                  </div>
              </div>

              <div class="justify-center items-center w-full grid-cols-3 grid">
                  <div class="flex justify-end mr-4">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
                      <div class="h-2 bg-gray-300 rounded" style="width: 4%"></div>
                  </div>
              </div>

              <div class="justify-center items-center w-full grid-cols-3 grid">
                  <div class="flex justify-end mr-4">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                  <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
                      <div class="h-2 bg-gray-300 rounded" style="width: 1%"></div>
                  </div>
              </div>
              
          </div>
      </div>
      <div>
          <div class="flex justify-center items-center ml-8">
              <p class="text-gray-500 text-xl mr-2 font-semibold">กดเพื่อให้คะแนน: </p>
              <label class="rating-label">
                  <input v-model="new_review.rating" class="rating rating--nojs hover:cursor-pointer" oninput="this.style.setProperty('--value', this.value)" step="1" type="range" max="5">
              </label>
          </div>
      </div>
      <div class="flex justify-center row-span-2 col-span-2 col-start-2 row-start-1">
          <div class="mb-4 w-11/12 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="review" class="sr-only">review</label>
                  <textarea v-model="new_review.detail" id="review" rows="3" class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="อธิบายถึงการให้คะแนน..." required=""></textarea>
              </div>
              <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                  <div class="flex pl-0 space-x-1 sm:pl-2">
                      <button type="file" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                          <span class="sr-only">Upload image</span>
                          <!-- TODO:แก้ให้ปุ่มแนบภาพได้ -->
                      </button>
                  </div>
                  <button v-on:click="postNewReview(product.id)" type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      โพสต์
                  </button>
              </div>
          </div>
      </div>
    </div>

    <div v-for="review in product.reviews" v-bind:key="product.id">
        <hr class="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700 mx-10">

        <div class="my-8 ml-14">
            <figure class="max-w-screen-md">
                <blockquote>
                    <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ review.detail }}</p>
                </blockquote>
                <figcaption class="flex items-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture">
                    <div class="flex items-center divide-x-3 divide-gray-300 dark:divide-gray-700">
                        <cite class="pr-3 font-medium text-gray-900 dark:text-white">{{ review.username }}</cite>
                        <div class="flex items-center text-yellow-300 pl-2 border-l-2">
                            <svg v-for="rate in review.rating" aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <div class="flex items-center text-gray-300 boader-l-0">
                            <svg v-for="rate in (5 - review.rating)" aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
</template>
  
<script>
import { useBasketStore } from '@/stores/basket.js'
import { useBasketItemStore } from '@/stores/basketItem.js'
import { useProductStore } from '@/stores/product.js'

export default {
  setup() {
    const basket_store = useBasketStore()
    const basketItem_store = useBasketItemStore()
    const product_store = useProductStore()
    return { basket_store, basketItem_store, product_store }
  },
  data() {
    return {
      basket: {
        id: '',
        user_id: '',
        selectShop: '',
      },
      basketItem: {
        id: '',
        basket_id: '',
        product_id: '',
        shop_id: '',
        quantity: ''
      },
      error: null,
      product: null,
      buyAmount: 0,
      new_review: {
        user_id: 1, // TODO: แก้ให้เป็น user ที่ login
        detail: '',
        rating: 0,
      }
    }
  },
  methods: {
    async refreshBaskets(data) {
      if (data.refresh) {
        await this.basket_store.fetch()
        this.baskets = this.basket_store.getBaskets
      }
    },
    async refreshBaskets(data) {
      if (data.refresh) {
        await this.basketItem_store.fetch()
        this.baskets = this.basketItem_store.getBasketItems
      }
    },
    onClickPlusBuyAmount() {
      this.buyAmount++
    },
    onClickMinusBuyAmount() {
      if (this.buyAmount > 0) { this.buyAmount-- }

    },
    async saveNewBasket() {
      this.error = null
      this.basket.user_id = 1;
      this.basket.selectShop = null

      try {
        const basket_id = await this.basket_store.add(this.basket)
        if (basket_id) {
          this.$router.push(`/basket`)
        }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
    },
    async saveNewBasketItems() {
      this.error = null
      this.basketItem.basket_id = 1
      this.basketItem.product_id = this.product.id
      this.basketItem.shop_id = this.product.shop_id
      this.basketItem.quantity = this.buyAmount

      try {
        const basketItem_id = await this.basketItem_store.add(this.basketItem)
        if (basketItem_id) {
          this.$router.push(`/basket`)
        }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
    },
    async postNewReview(product_id) {
        this.error = null
        this.new_review.product_id = product_id

        try {
          console.table(this.new_review)
          const response = await this.$axios.post("/reviews", this.new_review)
          if (response.status === 201) {
              console.log(response.data.message + response.data.review_id) 
              this.$router.go()
              // TODO: Make page update data without refresh
          }
        } catch (error) {
          this.error = error.message
          console.error(error)
        }
    }
  },
  async created() {
    const id = this.$route.params.id

    try {
      const response = await this.$axios.get(`/products/${id}`)
      if (response.status == 200) {
        this.product = response.data.data
        console.table(this.product)
        this.rating = response.data.data.rating
      }
    } catch (error) {
      console.log(error)
      this.error = error.message
    }
  }
}
</script>

<style>
    .rating {
        --dir: right;
        --fill: gold;
        --fillbg: rgba(100, 100, 100, 0.15);
        --star: url('data:image/svg+xml,<svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>');
        --stars: 5;
        --starsize: 3rem;
        --symbol: var(--star);
        --value: 0;
        --w: calc(var(--stars) * var(--starsize));
        --x: calc(100% * (var(--value) / var(--stars)));
        block-size: var(--starsize);
        inline-size: var(--w);
        position: relative;
        touch-action: manipulation;
        -webkit-appearance: none;
    }
    .rating::-moz-range-track {
        background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
        block-size: 100%;
        mask: repeat left center/var(--starsize) var(--symbol);
    }
    .rating::-webkit-slider-runnable-track {
        background: linear-gradient(to var(--dir), var(--fill) 0 var(--x), var(--fillbg) 0 var(--x));
        block-size: 100%;
        mask: repeat left center/var(--starsize) var(--symbol);
        -webkit-mask: repeat left center/var(--starsize) var(--symbol);
    }
    .rating::-moz-range-thumb {
        height: var(--starsize);
        opacity: 0;
        width: var(--starsize);
    }
    .rating::-webkit-slider-thumb {
        height: var(--starsize);
        opacity: 0;
        width: var(--starsize);
        -webkit-appearance: none;
    }

</style>