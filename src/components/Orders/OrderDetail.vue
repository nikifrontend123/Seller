<template>
    <hr style="margin: 3px 0; opacity: 1;">
    <div class="container" style="padding-bottom:80px ;">
        <div class=" text-decoration-underline">
            <p>Fabric 4 Name</p>
        </div>
        <div class="fw-bold">
            <p>SO/1008 {02/04/2023 & 18:30}</p>
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

            <button class="btn w-100 bg-warning  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                aria-expanded="false">
                Select
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item text-info" href="#">Courier Request</a></li>
                <li><a class="dropdown-item text-success" href="#">Sample Approve</a></li>
                <li><a class="dropdown-item text-danger" href="#">Sample Reject</a></li>
            </ul>

            <RouterLink to="/Sample" >
                <div class="btn btn-primary d-flex justify-content-center mt-2">Submit</div>
            </RouterLink>
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
    }

}
</script>

<style lang="scss" scoped></style>