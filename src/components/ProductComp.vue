<template>
  <div class="col-sm-6 col-md-4 col-lg-3 d-flex align-content-stretch mb-4">
    <div class="card border-0">
      <img
        style="height: 150px"
        class="card-img-top"
        :src="props.data.thumbnail"
        alt=""
      />
      <div
        class="card-body text-start p-0 d-flex flex-column justify-content-between py-2"
      >
        <h3 class="card-title m-0 fs-5 fw-semibold mb-2">
          {{ props.data.title }}
        </h3>
        <p class="card-text fs-6 overflow-hidden text-truncate">
          {{ props.data.description }}
        </p>
        <p>{{ props.data.brand }}</p>
        <p class="fw-bold text-danger">${{ props.data.price }}</p>
        <div>
          <router-link :to="`product/${props.data.id}`" class="text-center"
            ><button class="btn btn-outline-primary w-100 mb-1">
              View
            </button></router-link
          >
          <button @click="setQuantity()" class="btn btn-outline-success w-100">
            <i class="bi bi-cart-check-fill"></i> Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { productsStore } from "@/store/productStore";
import { storeToRefs } from "pinia";
import { ProductType } from "@/types/productType";
import { toast } from "vue3-toastify";
const store = productsStore();
const { cartList } = storeToRefs(store);

const addToCart = store.addToCart;

const props = defineProps<{ data: ProductType }>();

function setQuantity(): void {
  addToCart(props.data, 1);
  toast.success("Added successfully");
  console.log(cartList.value);
}
</script>

<style></style>
