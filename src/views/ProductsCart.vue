<template lang="">
  <div class="container mx-auto">
    <div class="my-3 text-start fs-5">Your Cart</div>
    <hr />
    <table class="table table-success table-striped my-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in cartList" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>
            <img width="70" height="70" :src="item.thumbnail" alt="" />
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>
            <i
              class="bi bi-caret-up text-success"
              style="cursor: pointer; font-size: 20px"
              @click="increment(item)"
            ></i>
            {{ item.quantity }}
            <i
              class="bi bi-caret-down text-danger"
              style="cursor: pointer; font-size: 20px"
              @click="decrement(item)"
            ></i>
          </td>
          <td>{{ item.quantity * item.price }}</td>
        </tr>
        <tr>
          <th class="text-center" colspan="3">Total</th>
          <td class="text-center" colspan="3">
            <span class="rounded-2 bg-danger p-1 text-light"
              >${{
                cartList.reduce(
                  (acc, item) => (acc += item.price * item.quantity),
                  0
                )
              }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { productsStore } from "@/store/productStore";
import { storeToRefs } from "pinia";
const store = productsStore();
const { cartList } = storeToRefs(store);
const increment = store.increment;
const decrement = store.decrement;
</script>
<style lang=""></style>
