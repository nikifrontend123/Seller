<template>
    <hr style="margin: 3px 0; opacity: 1;">
    <div class="container" style="padding-bottom:80px ;">
        <div class="d-flex justify-content-between">
            <p class="m-0 fw-bold">P0/001008</p>
            <p class="m-0 fw-bold text-decoration-underline">By Supplier 1</p>
        </div>
        <div class="container d-flex justify-content-center w-100 border border-3 border-dark p-2">
            <img src="../../assets/cotton.jpg" style="width: 100%;" alt="">
        </div>
        <form class="w-100 mt-2">
            <TextInputs name="Name" type="text" design="inline" />
            <TextInputs name="Price" type="text" design="inline" />
            <TextInputs name="MOQ" type="text" design="inline" />
            <TextInputs name="Length" type="text" design="inline" />
            <TextInputs name="GSM" type="text" design="inline" />
            <TextInputs name="Color" type="text" design="inline" />
            <TextInputs name="Design" type="text" design="inline" />
            <TextInputs name="Construction" type="text" design="inline" />
            <TextInputs name="Processes" type="text" design="inline" />
            <TextInputs name="Discription" type="text" design="inline" />

            <div class="btn btn-warning d-flex justify-content-center mt-2">Confirm Re-Order</div>

        </form>
    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';

export default {
    components: {
        TextInputs,

    }

}
</script>

<style lang="scss" scoped></style>