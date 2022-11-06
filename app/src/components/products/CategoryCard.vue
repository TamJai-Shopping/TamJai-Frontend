<template>
  <router-link v-if="url != ''" :to="url" class="m-2 block p-6 w-40 max-w-sm bg-[#F8F8F8] rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
    <p class="pt-3 text-gray-700">{{ category.name }}</p>
  </router-link>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    category: Object,
    url: {
      type: String,
      default: '',
    },
  }
}
</script>