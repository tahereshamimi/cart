import { Product } from "../constants";
import { SET_PRODUCTS, INCREASE_CART, DECREASE_CART } from "./types";

const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products
});
const increaseCart = (id: number) => ({
  type: INCREASE_CART,
  payload: id
});
const decreaseCart = (id: number) => ({
  type: DECREASE_CART,
  payload: id
});


export { setProducts, increaseCart, decreaseCart };