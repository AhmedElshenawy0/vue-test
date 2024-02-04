<template>
  <nav>
    <h2>products</h2>
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link
          v-if="route.name != 'product' && route.name != 'cart'"
          :to="{ name: route.name }"
          >{{ route.name }}</router-link
        >
      </li>
    </ul>
    <button @click="$router.push({ name: 'cart' })">
      <i class="bi bi-cart"></i>
      <span>{{ cartList.length }}</span>
    </button>
  </nav>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { productsStore } from "@/store/productStore";
import { storeToRefs } from "pinia";
const store = productsStore();
const { cartList } = storeToRefs(store);

const router = useRouter();
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #c7dbd2;

  h2 {
    margin: 0;
    color: black;
  }
  ul {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 0;
    a {
      color: green;
      font-size: 18px;
      text-decoration: none;
    }
  }
  button {
    border: none;
    background-color: inherit;
    color: black;
    font-size: 25px;
    cursor: pointer;
    position: relative;

    span {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0px;
      background-color: red;
      border-radius: 50%;
      font-size: 14px;
      width: 18px;
      height: 20px;
      color: white;
    }
  }
}
</style>
