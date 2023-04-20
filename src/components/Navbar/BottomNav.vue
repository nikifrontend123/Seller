<template>
    <div>
        <div class="position-relative w-100 h-100">
            <div class="topnav d-flex justify-content-between px-2 position-relative top-0">
                <div class="icon">
                    <i class="bi bi-list fs-3"></i>
                </div>
                <div class="txt d-flex align-items-center ">
                    <b>Monaal Creations</b>
                </div>
                <div class="icon ">
                    <RouterLink to="/Notification" style="text-decoration: none;">
                        <i class="bi bi-bell-fill fs-3"></i>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div id="mobile bottomNav">
            <div class="bnav d-flex h-100">
                <div class="bottom-nav w-100 position-fixed " style="bottom: 0;">
                    <div class="bottom-nav w-100 position-absolute" style="height: 5%;">
                        <div class="btn-front position-absolute d-flex justify-content-evenly w-100 "
                            style="bottom:0; width: 100%; background-color: #f2f2f2; ">
                            <div class="d-grid">
                                <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-microsoft fs-4"></i>
                                    <p style="font-size: 14px;">Dashboard</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/Order" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-box-seam fs-4"></i>
                                    <p style="font-size: 14px;">Order</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/Accounts" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-currency-rupee fs-4"></i>
                                    <p style="font-size: 14px;">Accounts</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/Delivery" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-truck fs-4"></i>
                                    <p style="font-size: 14px;">Delivery</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/Demand" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-arrow-up-circle-fill fs-4"></i>
                                    <p style="font-size: 14px;">Action</p>
                                </RouterLink>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>