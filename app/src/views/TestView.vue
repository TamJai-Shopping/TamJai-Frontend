<template>
    <div class="m-8" v-if="product">
        <h1>-----------------------------------------------</h1>
        <h1>{{ product }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: null,
            product: null,
            buyAmount: 0
        }
    },
    methods: {
        onClickPlusBuyAmount() {
            this.buyAmount++
        },
        onClickMinusBuyAmount() {
            this.buyAmount--
        },
    },
    async created() {
        const id = this.$route.params.id

        try {
            const response = await this.$axios.get(`/products`)
            if (response.status == 200) {
                this.product = response.data.data
                console.table(this.product)
            }
        } catch (error) {
            console.log(error)
            this.error = error.message
        }
    }
}
</script>