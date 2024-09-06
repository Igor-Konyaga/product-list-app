import { StyledProductsPage } from "./Products.styled.ts";
import Container from "../../components/Container/Container.tsx";
import ProductsList from "../../components/ProductsList/ProductsList.tsx";
import Filters from "../../components/Filters/Filters.tsx";


function ProductsPage() {
  return (
    <StyledProductsPage>
      <Container>
        <Filters />
        <ProductsList />
      </Container>
    </StyledProductsPage>
  );
}

export default ProductsPage;