import { Product } from "../constants";

export interface InitialState {
    products: Product[],
    selectedItemCount: number,
    selectedItemAmount: number,
}
const dataStorage = localStorage.getItem('cart')

const initialState: InitialState = {
    products: dataStorage ? JSON.parse(dataStorage).products : undefined,
    selectedItemCount: dataStorage ? JSON.parse(dataStorage).selectedItemCount : 0,
    selectedItemAmount: dataStorage ? JSON.parse(dataStorage).selectedItemAmount : 0,

};

export { initialState };