import { ProductType } from "../models/models.ts";

type ProductsFilteringFuncType = (productsData: ProductType[], minPriceFilter: number | string, maxPriceFilter: number | string) => ProductType[];
type ProductsSortingFuncType = (productsData: ProductType[], cheapToExpensiveSorting: boolean, expensiveToCheapSorting: boolean) => ProductType[];

export const productsFiltering: ProductsFilteringFuncType = (productsData, minPriceFilter, maxPriceFilter) => {

  const minPriceNumber = Number(minPriceFilter);
  const maxPriceNumber = Number(maxPriceFilter);

  return productsData.filter((product) => {
    if (minPriceFilter !== "" && maxPriceFilter !== "") {
      return product.price >= minPriceNumber && product.price <= maxPriceNumber;
    } else if (minPriceFilter !== "") {
      return product.price >= minPriceNumber;
    } else if (maxPriceFilter !== "") {
      return product.price <= maxPriceNumber;
    }
    return true;
  });

};

export const productsSorting: ProductsSortingFuncType = (productsData: ProductType[], cheapToExpensiveSorting, expensiveToCheapSorting) => {
  return [...productsData].sort((a, b) => {
    if (cheapToExpensiveSorting) {
      return a.price - b.price;
    } else if (expensiveToCheapSorting) {
      return b.price - a.price;
    }
    return 0;
  });
};