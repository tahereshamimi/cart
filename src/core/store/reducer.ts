import {
  INCREASE_CART,
  DECREASE_CART,
  SET_PRODUCTS,
} from "./types";
import { createReducer } from "react-principal";
import { Product } from "../constants";

export default createReducer({
  [INCREASE_CART]: (state, { payload: id }) => ({
    ...state,
    products: state.products.map((product: Product) =>
      product.id === id
        ? { ...product, count: (product?.count || 0) + 1 }
        : product
    ),
    selectedItemCount: state.selectedItemCount + 1,
    selectedItemAmount:
      state.selectedItemAmount +
      state.products.find((p: Product) => p.id === id).price,
  }),
  [DECREASE_CART]: (state, { payload: id }) => ({
    ...state,
    products: state.products.map((product: Product) =>
      product.id === id
        ? {
          ...product,
          count: product?.count
            ? product.count > 1
              ? product.count - 1
              : 0
            : 0,
        }
        : product
    ),
    selectedItemCount:
      state.products.find((p: Product) => p.id === id).count > 0
        ? state.selectedItemCount - 1
        : state.selectedItemCount,
    selectedItemAmount:
      state.products.find((p: Product) => p.id === id).count > 0
        ? state.selectedItemAmount -
        state.products.find((p: Product) => p.id === id).price
        : state.selectedItemAmount,
  }),
  [SET_PRODUCTS]: (state, { payload: products }) => ({
    ...state,
    products: products.map((product: Product) => ({
      ...product,
      count:
        state.products?.find((p: Product) => p.id === product.id).count > 0
          ? state.products?.find((p: Product) => p.id === product.id).count
          : 0,
    })),
  }),
});
