import "normalize.css";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products/Products.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
