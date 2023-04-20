<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="container my-3">
            <div class="bg-warning fw-bold fs-5 text-center"><p class="p-2">Add Invoice</p></div>
            <div class="form my-3">
                <select class="form-select" id="Select" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Pending Bills</option>
                    <option value="3">Cancelled Bills</option>
                    <option value="3">Partly Paid Bills</option>
                    <option value="3">Cleared Bills</option>
                </select>
            </div>
        </div>
        <div class="search d-flex  d-flex justify-content-between align-items-center w-100">
            <div class="inp ms-3">
                <input type="search" placeholder="Search">
            </div>

            <p class="m-0">
            <div class="btn btn-primary">Reset</div>
            <button type="button" class="btn btn-primary " data-bs-toggle="collapse"
                data-bs-target="#myCollapse">Filters</button>
            </p>
        </div>
        <!-- Collapsible Element HTML -->
        <div class="collapse  mt-2" id="myCollapse">
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
        </div>
        <div class="container">
            <div v-for="payment in payments" class="box border border-1 mt-3 container py-3">
                <div class="btnbtn d-flex justify-content-between w-100">
                    <b class="m-0">Invoice No.{{ payment.Invoice }}</b>
                    <div class="dropdown">
                        <div class="btn">
                            <i class="bi bi-download"></i>
                        </div>
                        <button class="btn  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item text-warning" href="#">Partly Payment</a></li>
                            <li><a class="dropdown-item text-info" href="#">Full Payment</a></li>
                            <li><a class="dropdown-item text-success" href="#">Invoice Canceled</a></li>
                        </ul>
                    </div>
                </div>
                <p class="m-0 fw-bold">{{ payment.price }}</p>
                <div class="sec mt-2">
                    <p class="m-0">{{ payment.txt3 }}</p>
                    <p class="m-0">{{ payment.txt4 }}</p>
                    <p class="m-0">{{ payment.txt5 }}</p>
                    <p class="m-0">{{ payment.txt6 }}</p>
                </div>
                <RouterLink to="/PaymentDetail">
                    <div class="fourth mt-3">
                        <img :src="payment.img" alt="" class="w-100">
                    </div>
                </RouterLink>
                <div class="bg-info p-2 m-3">
                    <p class="m-0">Amount</p>
                    <p class="m-0">Txn ID.</p>
                    <p class="m-0">Partly Payment</p>
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
        payments() {
            return this.$store.getters.getPayments;
        }
    }
}
</script>

<style lang="scss" scoped></style>