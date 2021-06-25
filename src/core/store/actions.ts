import { ADD_TO_CART } from "./types";

const addToCard = (product:any) => ({
  type: ADD_TO_CART,
  payload: product,
});


export { addToCard };