import axios from "axios";
import { defineStore } from "pinia";
import { ProductType } from "../types/productType";
import { StateType } from "../types/productType";
import { toast } from "vue3-toastify";

export const productsStore = defineStore("products", {
  state: (): StateType => {
    return {
      products: [],
      product: {} as ProductType,
      cartList: [],
    };
  },
  actions: {
    async getOneProduct(id: number) {
      await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => (this.product = res.data));
    },
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => (this.products = res.data.products));
    },
    addToCart(item: ProductType, quantity: number) {
      item.quantity = quantity;
      const index = this.cartList.findIndex((ele) => ele.id === item.id);
      index !== -1
        ? (this.cartList[index].quantity += quantity)
        : this.cartList.push(item);
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
    },
    increment(item: ProductType) {
      const index = this.cartList.findIndex((ele) => ele.id === item.id);
      index !== -1 && (this.cartList[index].quantity += 1);
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
      toast.success("Added successfully");
    },
    decrement(item: ProductType) {
      const index = this.cartList.findIndex((ele) => ele.id === item.id);
      index !== -1 && (this.cartList[index].quantity -= 1);
      this.cartList[index].quantity === 0 &&
        (this.cartList = this.cartList.filter((ele) => ele.id !== item.id));
      localStorage.setItem("cartList", JSON.stringify(this.cartList));
      toast.warn("Deleted successfully");
    },
  },
});
