<template>
  <div class="container">
    <div class="header abnf text-start mt-4">PRODUCTS</div>
    <hr />
    <div class="row justify-content-between mt-4">
      <ProductComp
        v-for="product in products"
        :key="product.id"
        :data="product"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { productsStore } from "@/store/productStore";
import { storeToRefs } from "pinia";
import ProductComp from "@/components/ProductComp.vue";

const store = productsStore();
const { products } = storeToRefs(store);

const getProducts = store.getProducts;
onMounted(() => {
  getProducts();
  console.log(products);
});
</script>

<style lang="scss" scoped>
.home {
  padding: 0 60px;
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 60px 10px;
  }
}
</style>
