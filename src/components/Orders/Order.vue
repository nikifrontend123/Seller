<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
      
        <div class="container">
            <div v-for="order in orders" class="box border border-1 mt-3 container py-3">
                <div class="first w-100">
                    <div class="txtC ">
                        <p style="text-decoration: underline;" class="m-0">{{ order.txt1 }}</p>
                        <p>{{ order.tag }}</p>
                    </div>
                    
                </div>
                <p class="m-0 fw-semibold">{{ order.code }}</p>
                <div class="sec mt-2">
                    <p class="m-0">Fabric :-</p>
                    <p class="m-0">Length :-</p>
                    <p class="m-0">Pana :-</p>
                    <p class="m-0">Colour :-</p>
                    <p class="m-0">Length :-</p>
                </div>
                <div class="fourth mt-3">
                    <RouterLink to="/OrderDetail">
                        <img :src="order.img" alt="" class="w-100">
                    </RouterLink>
                </div>
                <div class="fourth w-100 mt-2">
                    <button class="btn btn-warning w-100">{{order.btn}}</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';

export default {
    components: {
        TextInputs,
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders;
        }
    }
}
</script>

<style lang="scss" scoped></style>