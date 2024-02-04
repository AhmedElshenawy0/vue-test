<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import { onMounted } from "vue";
import { productsStore } from "./store/productStore";
import { storeToRefs } from "pinia";

const store = productsStore();
const { cartList } = storeToRefs(store);
function setlocal(): void {
  localStorage.getItem("cartList") &&
    (cartList.value = JSON.parse(localStorage.getItem("cartList") as string));
}
onMounted(() => {
  setlocal();
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1,
h2,
h3,
h4 {
  margin: 0;
}
body {
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
