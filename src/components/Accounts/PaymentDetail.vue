<template>
    <hr style="margin: 3px 0; opacity: 1;">
    <div class="container" style="padding-bottom:80px ;">
        <div class="bg-info fw-bold text-decoration-underline text-center p-1 mt-2">
            <p>Select PO Number</p>
        </div>
        <div class="box p-2 mb-2">
            <div class="form ">
                <select style="background-color: #DAF5FF;" class="form-select" id="Select"
                    aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option v-for=" (paymentDetail, index) in paymentDetails" :key="index" value="1">{{ paymentDetail.txt1
                    }}</option>
                </select>
            </div>
        </div>

        <div v-for="paymentDetail1 in paymentDetail1s" class="container  w-100 border border-2 border-secondary p-2">
            <p class="m-0 fw-bold mx-3 ">Invoice No.{{ paymentDetail1.txt2 }}</p>
            <p class="m-0 fw-bold mx-3 mb-3">{{ paymentDetail1.txt3 }}</p>
            <div class="sec mx-3 mb-3">
                <p class="m-0">{{ paymentDetail1.txt4 }}</p>
                <p class="m-0">{{ paymentDetail1.txt5 }}</p>
                <p class="m-0">{{ paymentDetail1.txt6 }}</p>
            </div>
            <img :src="paymentDetail1.img" style="width: 100%;" alt="">
            <div class="third bg-info p-2 m-3">
                <p class="m-0">Amount</p>
                <p class="m-0">Txn ID.</p>
                <p class="m-0">Partly Payment</p>
            </div>
        </div>




        <form class="w-100 mt-2">
            <TextInputs name="Date" type="text" design="inline" />
            <TextInputs name="Mode" type="text" design="inline" />
            <TextInputs name="Txn No." type="text" design="inline" />
            <TextInputs name="Amount" type="text" design="inline" />
            <input type="file">
            <div class="d-flex justify-content-center mt-3">
                <div class="btn btn-warning d-flex justify-content-center mt-2 w-25">Submit</div>
            </div>
        </form>
    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';
import Avatar from '../Avatarinput/Avatar.vue'
export default {
    components: {
        TextInputs,
        Avatar
    },
    computed: {
        paymentDetails() {
            return this.$store.getters.getPaymentDetails
        },
        paymentDetail1s() {
            return this.$store.getters.getPaymentDetail1s
        },
    }

}
</script>

<style lang="scss" scoped></style>