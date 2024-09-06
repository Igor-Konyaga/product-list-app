import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { setMaxPriceFilter, setMinPriceFilter } from "../../redux/slices/products.ts";
import { maxPrice, minPrice } from "../../redux/selectors/selectors.ts";
import { StyledFilterPriceRange } from "./FilterPriceRange.styled.ts";


function FilterPriceRange() {
  const dispatch = useAppDispatch();
  const minPriceFilter = useAppSelector(minPrice);
  const maxPriceFilter = useAppSelector(maxPrice);

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinPriceFilter(Number(event.target.value)));
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxPriceFilter(Number(event.target.value)));
  };

  const handleResetFilterInputs = () => {
    dispatch(setMinPriceFilter(""));
    dispatch(setMaxPriceFilter(""));
  };

  return (
    <StyledFilterPriceRange>
      <label className="labelInput">
        Min price
        <input className="input" onChange={handleMinPriceChange} value={minPriceFilter} type="number"
               name="inputFrom" />
      </label>
      <label className="labelInput">
        Max price
        <input className="input" onChange={handleMaxPriceChange} value={maxPriceFilter} type="number" name="inputTo" />
      </label>
      <button className="resetBtn" type="button" onClick={handleResetFilterInputs}>Reset</button>
    </StyledFilterPriceRange>
  );
}

export default FilterPriceRange;