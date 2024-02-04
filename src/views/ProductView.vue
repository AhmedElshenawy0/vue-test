<template lang="">
  <div class="container bg-light py-3 mx-auto justify-content-between row mt-4">
    <div class="col-sm-5 mx-2">
      <img class="img-thumbnail" :src="product.thumbnail" alt="" />
    </div>
    <div class="col-sm-5 text-start">
      <h3 class="fw-bold fs-5">{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p><span class="fw-bold">Brand: </span>{{ product.brand }}</p>
      <p class="fw-bold text-danger">Price : ${{ product.price }}</p>
      <div class="mb-3 d-flex gap-2 align-items-center">
        <label>Quantity</label>
        <input
          class=""
          style="width: 50px; text-align: center"
          v-model="quantity"
          type="number"
        />
      </div>
      <button @click="setQuantity" class="btn btn-primary w-100">
        <i class="bi bi-cart-check-fill"></i> Add To Cart
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { productsStore } from "@/store/productStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { toast } from "vue3-toastify";
const quantity = ref<number>(1);
const store = productsStore();
const { product } = storeToRefs(store);
const getOneProduct = store.getOneProduct;
const addToCart = store.addToCart;

function setQuantity(): void {
  toast.success("Added successfully");
  addToCart(product.value, quantity.value);
}
const route = useRoute();

onMounted(() => {
  getOneProduct(+route.params.id);
});
</script>
<style lang="scss" scoped></style>
