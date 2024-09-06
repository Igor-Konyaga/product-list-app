import { StyledProductsList } from "./ProductsList.styled.ts";
import Product from "../Product/Product.tsx";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/slices/products.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { ProductType } from "../../models/models.ts";
import { filteredProducts } from "../../redux/selectors/selectors.ts";

function ProductsList() {
  const dispatch = useAppDispatch();
  const filteredProductsData: ProductType[] = useAppSelector(filteredProducts) || [];


  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <StyledProductsList>
      {filteredProductsData?.map((product) => {
        return <Product key={product.name} productData={product} />;
      })}
    </StyledProductsList>
  );
}

export default ProductsList;