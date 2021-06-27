import { createStore, Provider } from "react-principal";
import reducer from "./reducer";
import { initialState } from "./initialStates";

export const CartStore = createStore({
  reducer,
  initialState,
  storage: window.localStorage,
  persistKey: "cart",
  mapStateToPersist: (state) => state,
});
interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  return <Provider store={CartStore}>{children}</Provider>;
};
