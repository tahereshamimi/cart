import { createStore, Provider } from "react-principal";
import reducer from "./reducer";
import { initialState } from "./initialStates";

export const CartStore = createStore({
  reducer,
  initialState,
});

export const CartProvider = ({ children }: any) => {
  return <Provider store={CartStore}>{children}</Provider>;
};