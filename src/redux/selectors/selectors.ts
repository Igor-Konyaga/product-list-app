import { InitialStateType } from "../slices/products.ts";

type StateType = {
  products: InitialStateType
}

export const productsList = (state: StateType) => state.products.productsData;
export const filteredProducts = (state: StateType) => state.products.filteredProducts;
export const minPrice = (state: StateType) => state.products.minPriceFilter;
export const maxPrice = (state: StateType) => state.products.maxPriceFilter;
export const cheapToExpensive = (state: StateType) => state.products.cheapToExpensiveSorting;
export const expensiveToCheap = (state: StateType) => state.products.expensiveToCheapSorting;


