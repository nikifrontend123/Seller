import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Delivery from "../components/Delivery/Delivery.vue";
import Dispatch from "../components/Delivery/Dispatch.vue";
import Order from "../components/Orders/Order.vue";
import OrderDetail from "../components/Orders/OrderDetail.vue";
import Demand from "../components/Demand/Demand.vue";
import Reorder from "../components/Demand/Re-order.vue";
import Accounts from "../components/Accounts/Accounts.vue";
import PaymentDetail from "../components/Accounts/PaymentDetail.vue";
import Notification from "../components/Notification/Notification.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/Delivery",
      name: "Delivery",
      component: Delivery,
    },
        {
      path: "/Dispatch",
      name: "Dispatch",
      component: Dispatch,
    },
    {
      path: "/Order",
      name: "Order",
      component: Order,
    },
    {
      path: "/OrderDetail",
      name: "OrderDetail",
      component: OrderDetail,
    },
    {
      path: "/Demand",
      name: "Demand",
      component: Demand,
    },
    {
      path: "/Reorder",
      name: "Re-order",
      component: Reorder,
    },
    {
      path: "/Accounts",
      name: "Accounts",
      component: Accounts,
    },
    {
      path: "/PaymentDetail",
      name: "PaymentDetail",
      component: PaymentDetail,
    },
    {
      path: "/Notification",
      name: "Notification",
      component: Notification,
    },
    
  ],
});

export default router;
