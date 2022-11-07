<template>
    <div class="grid grid-cols-2 p-4 border-2 border-blue-800 rounded-lg">
            <h3 class="text-xl">{{order.id}}</h3>
            <p class="text-xl">{{order.status}}</p>
            <button v-on:click="selectOrder(order)" class="px-2 py-1 border rounded-xl">Edit</button>
        </div>
</template>

<script>
export default{
    data() {
        return{
            order: {
                
            }
        }
    }
}
</script>