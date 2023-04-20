<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <!-- <div class="search d-flex  d-flex justify-content-between align-items-center w-100">
            <div class="inp ms-3">
                <input type="search" placeholder="Search">
            </div>

            <p class="m-0">
            <div class="btn btn-primary">Reset</div>
            <button type="button" class="btn btn-primary " data-bs-toggle="collapse"
                data-bs-target="#myCollapse">Filters</button>
            </p>
        </div> -->
        <!-- Collapsible Element HTML -->
        <!-- <div class="collapse  mt-2" id="myCollapse">
            <div class="card card-body">
                <div class="first d-flex">
                    <TextInputs name="Start Date" type="date" design="floating" />
                    <TextInputs name="End Date" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Colour" type="text" design="floating" />
                <TextInputs name="Filter By Fabric" type="text" design="floating" />
                <div class="first d-flex">
                    <TextInputs name="Per Meter/KG Price Starts" type="date" design="floating" />
                    <TextInputs name="Per Meter/KG Price End" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Processings" type="text" design="floating" />
                <TextInputs name="Sort Purchase By" type="text" design="floating" />

            </div>
        </div> -->
        <div class="container">
            <div v-for="demand in demands" class="box border border-1 mt-3 container py-3">
                <p class="fw-bold text-decoration-underline">{{ demand.txt }}</p>
                <div class="first d-flex justify-content-between w-100">
                    <div class="txt d-flex  fw-semibold ">
                        <p class="m-0">{{ demand.txt1 }}</p><span class="ms-2">{{ demand.tag
                        }}</span>
                    </div>
                </div>
                <div class="sec mt-2">
                    <p>{{ demand.txt2 }}</p>
                </div>
                <div class="three mt-3">
                    <span style="text-decoration: underline;" class="fw-bold m-0">In-House:-</span><b>{{ demand.txt3
                    }}</b><br>
                    <span style="text-decoration: underline;" class="fw-bold m-0">Fabricators:-</span><b>{{ demand.txt4
                    }}</b><br>
                    <span style="text-decoration: underline;" class="fw-bold m-0">Fabric Form:-</span><b>{{ demand.txt5
                    }}</b>
                </div>
                <div class="fourth mt-3">
                    <img :src="demand.img" alt="" class="w-100">
                </div>
                <RouterLink to="/Reorder">
                    <div class="fourth w-100 mt-2">
                        <button class="btn btn-success w-100">{{ demand.btn1 }}</button>
                    </div>
                </RouterLink>
                <div class="fourth w-100 mt-2">
                    <button class="btn btn-danger w-100">{{ demand.btn2 }}</button>
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
        demands() {
            return this.$store.getters.getDemands;
        }
    }
}
</script>

<style lang="scss" scoped></style>