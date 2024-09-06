import { StyledProduct } from "./Product.styled.ts";
import { ProductType } from "../../models/models.ts";
import React, { useState } from "react";
import ProductModal from "../ProductModal/ProductModal.tsx";

type ProductProps = {
  productData: ProductType
}

function Product({ productData }: ProductProps) {
  const [openModal, setOpenModal] = useState(false);
  const { name, urlImg, price } = productData;

  const handleVisibleModal = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    setOpenModal(false);
  };

  return (
    <>
      <StyledProduct>
        <div className="wrapperImg">
          <img className="img" src={urlImg} alt={name} />
        </div>
        <div className="productInfo">
          <h3 className="productTitle">{name}</h3>
          <p className="productPrice">Price: {price}$</p>
        </div>
        <button onClick={() => setOpenModal(true)} className="productBtn">More details</button>
      </StyledProduct>
      <ProductModal openModal={openModal} setOpenModal={setOpenModal}
                    handleVisibleModal={handleVisibleModal} productData={productData} />
    </>
  )
    ;
}

export default Product;