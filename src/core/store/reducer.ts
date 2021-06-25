import { ADD_TO_CART} from "./types";
import { createReducer } from "react-principal";

export default createReducer({
  [ADD_TO_CART]: (state, { payload: product }) => ({
    ...state,
    product,
  }),
  
});