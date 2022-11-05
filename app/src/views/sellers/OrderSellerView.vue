<template>
    <section class = "mx-8">
        <h1 class="text-3xl text-green-700">{{ title }}</h1>
        
        <div v-for="order in orders" :key="order.id" class="grid grid-cols-2 p-4 border-2 border-blue-800 rounded-lg">
            <h3 class="text-xl">{{order.id}}</h3>
            <p class="text-xl">{{order.status}}</p>
            <button v-on:click="selectOrder(order)" class="px-2 py-1 border rounded-xl">Edit</button>
        </div>

        {{ selected }}
    </section>
</template>

<script>

export default{
    data(){
        return {
            title : "All Order",
            selected: null,
            orders: null
        }
    },
    methods: {
        selectOrder(order){
            this.selected = order
            console.table(this.selected)
        }
    },
    async mounted(){
        console.log("mounted")
        try {
            const response = await this.$axios.get('/orders')
            if (response.status === 200) {
                this.orders = response.data.data
                console.table(this.orders)
            } else {
                console.error(response.status)
            }
        } catch (error) {
            this.error = error.message
        }
    }
}
</script>

<style>

</style>