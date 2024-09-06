import { StyledFilters } from "./Filters.styled.ts";
import FilterPriceRange from "../FilterPriceRange/FilterPriceRange.tsx";
import SortPrice from "../SortPrice/SortPrice.tsx";
import { useEffect } from "react";
import { productsFiltering, productsSorting } from "../../services/filtration.ts";
import { setFilteredProducts, setMaxPriceFilter, setMinPriceFilter } from "../../redux/slices/products.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import {
  cheapToExpensive,
  expensiveToCheap,
  maxPrice,
  minPrice,
  productsList,
} from "../../redux/selectors/selectors.ts";
import { ProductType } from "../../models/models.ts";


function Filters() {
  const dispatch = useAppDispatch();
  const minPriceFilter = useAppSelector(minPrice);
  const maxPriceFilter = useAppSelector(maxPrice);
  const cheapToExpensiveSorting = useAppSelector(cheapToExpensive);
  const expensiveToCheapSorting = useAppSelector(expensiveToCheap);
  const allProducts: ProductType[] = useAppSelector(productsList);

  useEffect(() => {
    if (minPriceFilter === 0) {
      dispatch(setMinPriceFilter(""));
    } else if (maxPriceFilter === 0) {
      dispatch(setMaxPriceFilter(""));
    }

    const filtrationProducts = productsFiltering(allProducts, minPriceFilter, maxPriceFilter);
    const sortingProducts = productsSorting(filtrationProducts, cheapToExpensiveSorting, expensiveToCheapSorting);

    dispatch(setFilteredProducts(sortingProducts));

  }, [allProducts, cheapToExpensiveSorting, dispatch, expensiveToCheapSorting, maxPriceFilter, minPriceFilter]);
  return (
    <StyledFilters>
      <FilterPriceRange />
      <SortPrice />
    </StyledFilters>
  );
}

export default Filters;