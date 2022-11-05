<template>
    <div class="grid grid-cols-2 p-4 border-2 border-blue-800 rounded-lg">
            <h3 class="text-xl">{{product.name}}</h3>
            <p class="text-xl">{{product.description}}</p>
            <p class="text-xl my-style">{{product.price}}</p>
            <button v-on:click="onClickButton()" class="px-2 py-1 border rounded-xl">Edit</button>
        </div>
</template>

<script>
export default{
    props:{
        product: Object,
        url: {
            type: String,
            default:''
        }
    },
    methods: {
        onClickButton(){
            if(this.url != ''){
                this.$router.push(this.url)
            }
        }
    }
}
</script>

<style scoped>
.my-style{
    display: block;
    padding: 5px;
    background-color: rgb(20, 185, 20);
}
</style>