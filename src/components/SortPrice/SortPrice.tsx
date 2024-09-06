import { StyledSortPrice } from "./SortPrice.styled.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { cheapToExpensive, expensiveToCheap } from "../../redux/selectors/selectors.ts";
import { setCheapToExpensiveSorting, setExpensiveToCheapSorting } from "../../redux/slices/products.ts";


function SortPrice() {
  const dispatch = useAppDispatch();
  const cheapToExpensiveSorting = useAppSelector(cheapToExpensive);
  const expensiveToCheapSorting = useAppSelector(expensiveToCheap);

  const handleCheapToExpensive = () => {
    dispatch(setExpensiveToCheapSorting(false));
    dispatch(setCheapToExpensiveSorting(!cheapToExpensiveSorting));
  };
  const handleExpensiveToCheap = () => {
    dispatch(setCheapToExpensiveSorting(false));
    dispatch(setExpensiveToCheapSorting(!expensiveToCheapSorting));
  };


  return (
    <StyledSortPrice>
      <button onClick={handleCheapToExpensive}
              className={cheapToExpensiveSorting ? "sortPriceBtn activeFirstBtn" : "sortPriceBtn"} type="button">Cheap
        to
        expensive
      </button>
      <button onClick={handleExpensiveToCheap}
              className={expensiveToCheapSorting ? "sortPriceBtn activeLastBtn" : "sortPriceBtn"}
              type="button"> Expensive to cheap
      </button>
    </StyledSortPrice>
  );
}

export default SortPrice;