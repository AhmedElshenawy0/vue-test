import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("@/views/ProductView.vue"),
    meta: {
      title: "product",
    },
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("@/views/ProductsCart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
