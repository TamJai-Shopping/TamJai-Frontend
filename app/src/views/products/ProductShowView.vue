<template>
  <div class="font-mono m-20 my-10 text-lg bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md p-4">
    <div class="m-8 flex items-center text-gray-700" v-if="product">
      <img class="rounded-lg mx-20" :src="this.$axios.defaults.baseURL + '/images/search?product_id=' + product.id"
        width="300" height="300">
      <div class="w-full">
        <h1 class="text-4xl mt-2 mb-6">{{ product.name }}</h1>
        <div class="flex items-center my-4">ราคา
          <p class="font-bold text-2xl mb-1 mx-4"> {{ product.price }} </p>
          บาท
        </div>
        <div class="flex items-center my-4"> ร้านค้า:
          <a :href="`/shops/${product.shop_id}`" class="font-bold mx-4"> {{ product.shop_id }} </a>
        </div>
        <div class="my-6 flex">
          <p>หมวดหมู่:</p>
          <div v-for="categories in product.categories" v-bind:key="product.id" class="mx-2">
            <a :href="`/categories/${categories.id}`" class="bg-gray-200 text-base shadow rounded-lg p-2">{{ categories.name }}</a>
          </div>
        </div>
        <div v-if="product" class="my-8 mr-4">
          <p class="my-2">รายละเอียดสินค้า</p>
          <p class="text-base text-gray-500">{{ product.description }}</p>
        </div>
        <div class="my-6 flex items-center">
          <label>จำนวน</label>
          <button @click="onClickMinusBuyAmount"
            class="rounded-lg shadow bg-white border border-gray-300 p-2.5 px-4 ml-4 mr-2">-</button>
          <input type="number" v-model="buyAmount"
            class="text-center w-20 overflow-hidden rounded-lg shadow bg-white border border-gray-300 py-3 mr-2">
          <button @click="onClickPlusBuyAmount"
            class="rounded-lg shadow bg-white border border-gray-300 p-2.5 px-4 mr-2">+</button>
          <div class="mx-6 flex items-center my-4">
            <p>จำนวนสินค้าที่เหลือ: {{ product.total_amount }}</p>
          </div>
        </div>
        <div class="flex">
          <button class="bg-gray-500 w-40 py-3 px-4 text-white my-2 shadow rounded-lg hidden">
            ซื้อสินค้า
          </button>
          <button @click="saveNewBasketItems()"
            class="bg-gray-400 py-3 px-4 my-2 mx-4 w-58 text-white flex items-center shadow rounded-lg">
            <img src="@/assets/add-to-cart.png" class="mr-3" width="28" height="28">
            เพิ่มไปยังตะกร้า
          </button>
        </div>
        <div class="flex justify-end dropdown">
          <a :href="'/products/' + product.id + '/report'"
            class="text-sm hover:text-blue-400 hover:underline cursor-pointer">รานงานสินค้าชิ้นนี้</a>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-2 px-8 ml-10">
    <div class="flex justify-center items-center">
      <div class="w-2/12">
        <h1 v-if="product.rating != null" class="ml-10 text-6xl font-bold text-gray-500 flex justify-center">{{
            product.rating
        }}</h1>
        <p class="flex justify-center text-sm font-medium text-gray-500 ml-2">out of 5</p>
      </div>
      <div class="justify-center ml-6 w-full grid-rows-5 grid-cols-1 grid">
        <div class="justify-center items-center w-full grid-cols-3 grid">
          <div class="flex justify-end mr-4">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
          </div>
          <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
            <div class="h-2 bg-gray-300 rounded"
              :style="'width: ' + product.review_stat.five * 100 / product.review_count + '%'"></div>
          </div>
        </div>

        <div class="justify-center items-center w-full grid-cols-3 grid">
          <div class="flex justify-end mr-4">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
          </div>
          <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
            <div class="h-2 bg-gray-300 rounded"
              :style="'width: ' + product.review_stat.four * 100 / product.review_count + '%'"></div>
          </div>
        </div>

        <div class="justify-center items-center w-full grid-cols-3 grid">
          <div class="flex justify-end mr-4">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
          </div>
          <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
            <div class="h-2 bg-gray-300 rounded"
              :style="'width: ' + product.review_stat.three * 100 / product.review_count + '%'"></div>
          </div>
        </div>

        <div class="justify-center items-center w-full grid-cols-3 grid">
          <div class="flex justify-end mr-4">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
          </div>
          <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
            <div class="h-2 bg-gray-300 rounded"
              :style="'width: ' + product.review_stat.two * 100 / product.review_count + '%'"></div>
          </div>
        </div>

        <div class="justify-center items-center w-full grid-cols-3 grid">
          <div class="flex justify-end mr-4">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Fifth star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
              </path>
            </svg>
          </div>
          <div class="col-span-2 w-full h-2 bg-gray-100 rounded dark:bg-gray-700">
            <div class="h-2 bg-gray-300 rounded"
              :style="'width: ' + product.review_stat.one * 100 / product.review_count + '%'"></div>
          </div>
        </div>

      </div>
    </div>
    <div>
      <div class="flex justify-center items-center ml-8">
        <p class="text-gray-500 text-xl mr-2 font-semibold">กดเพื่อให้คะแนน: </p>
        <label class="rating-label">
          <input v-model="new_review.rating" class="rating rating--nojs hover:cursor-pointer"
            oninput="this.style.setProperty('--value', this.value)" step="1" type="range" max="5" min="1">
        </label>
      </div>
    </div>
    <div class="flex justify-center row-span-2 col-span-2 col-start-2 row-start-1 mr-2">
      <div class="mb-4 w-11/12 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
          <label for="review" class="sr-only">review</label>
          <textarea v-model="new_review.detail" id="review" rows="3"
            class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="อธิบายถึงการให้คะแนน..." required></textarea>
        </div>
        <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
          <div class="flex pl-0 space-x-1 sm:pl-2 items-center">
            <button type="file"
              class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <label for="file_input" class="cursor-pointer">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Upload image</span></label>
              <input class="hidden" id="file_input" type="file" @change="imageHandle" accept="image/png, image/jpeg">
            </button>
            <p>{{ file_name.name }}</p>
          </div>
          <button v-on:click="postNewReview(product.id)" type="submit"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-gray-400">
            รีวิวสินค้า
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="product.review_count != 0" v-for="review in product.reviews" v-bind:key="product.id">
    <hr class="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700 mx-20">

    <div class="my-8 ml-20">
      <figure class="max-w-screen-md">
        <blockquote>
          <p class="text-2xl font-semibold text-gray-700 dark:text-white">{{ review.detail }}</p>
        </blockquote>
        <figcaption class="flex items-center mt-6 space-x-3">
          <img class="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture">
          <div class="flex items-center divide-x-3 divide-gray-300 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">{{ review.username }}</cite>
            <div class="flex items-center text-yellow-300 pl-2 border-l-2">
              <svg v-for="rate in review.rating" aria-hidden="true" class="w-7 h-7" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </div>
            <div class="flex items-center text-gray-300 boader-l-0">
              <svg v-for="rate in (5 - review.rating)" aria-hidden="true" class="w-7 h-7" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
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
import { useAuthStore } from '@/stores/auth.js'

export default {
  setup() {
    const basket_store = useBasketStore()
    const basketItem_store = useBasketItemStore()
    const product_store = useProductStore()
    const auth_store = useAuthStore()
    return { basket_store, basketItem_store, product_store, auth_store }
  },
  data() {
    return {
      auth: null,
      basket: {
        id: '',
        user_id: '',
        selectShop: '',
        total_price: ''
      },
      basketItem: {
        basket_id: '',
        product_id: '',
        shop_id: '',
        quantity: ''
      },
      error: null,
      baskets: null,
      product: null,
      buyAmount: 1,
      new_review: {
        user_id: null, // TODO: แก้ให้เป็น user ที่ login
        detail: null,
        rating: 1,
      },
      report: {
        product_id: 0,
        user_id: null,
        detail: '',
      },
      initBasket: {
        user_id: '',
        selectShop: null,
        total_price: 0,
      },
      basketItems: '',
      file_name: '',
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
      if (this.buyAmount <= this.product.total_amount - 1) {
        this.buyAmount++
      }
    },
    onClickMinusBuyAmount() {
      if (this.buyAmount > 1) { this.buyAmount-- }

    },
    imageHandle(event) {
      this.file_name = event.target.files[0]
    },
    async saveNewBasketItems() {
      this.error = null
      // this.initBasket.user_id = this.auth.id
      this.initBasket.user_id = 1
      try {
        const basket_id = await this.basket_store.initBasket(this.initBasket)
        // if (basket_id) {
        //   this.$router.push(`/baskets`)
        // }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }

      // this.basketItem.basket_id = this.basket_store.getBasketsByUser(this.auth.id).user_id
      this.basketItem.basket_id = this.basket_store.getBasketsByUser(1).user_id
      this.basketItem.product_id = this.product.id
      this.basketItem.shop_id = this.product.shop_id
      this.basketItem.quantity = this.buyAmount

      try {
        const basketItem_id = await this.basketItem_store.add(this.basketItem)
        if (basketItem_id) {
          this.$router.push(`/baskets`)
        }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
      this.$router.push(`/baskets`)
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
          if (this.file_name != '') {
            const formData = new FormData()
            formData.append('image', this.file_name)
            formData.append('review_id', response.data.review_id)
            formData.append('user_id', this.auth.id)
            try {
              const response = await this.$axios.post("/images", formData)
              if (response.status === 201) {
                console.log(response.data.message)
                this.$router.go()
              }
            } catch (error) {

            }
          }
        }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
    },
    async postReport() {
      this.error = null
      this.report.product_id = this.product.id

      try {
        console.table(this.report)
        const response = await this.$axios.post("/reports", this.report)
        if (response.status === 201) {
          console.log(response.data.message + response.data.report_id)
          this.$router.go()
        }
      } catch (error) {
        this.error = error.message
        console.error(error)
      }
    }
  },
  async mounted() {
    console.log("mounted")
    this.error = null

    try {
      await this.basket_store.fetch()
      this.baskets = this.basket_store.getBaskets

      await this.product_store.fetch()
      this.products = this.product_store.getProducts

      await this.shop_store.fetch()
      this.shops = this.shop_store.getShops

      await this.basketItem_store.fetch()
      this.basketItems = this.basketItem_store.getShops

      if (this.auth_store.isAuthen) {
        this.auth = this.auth_store.getAuth
      } else {
        this.auth = null
      }
    } catch (error) {
      this.error = error.message
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
  },
  watch: {
    buyAmount(oldValue, newValue) {
      if (oldValue > this.product.total_amount) {
        this.buyAmount = this.product.total_amount
      }
      if (oldValue == null) {
        this.buyAmount = 1
      }
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
  --value: 1;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>