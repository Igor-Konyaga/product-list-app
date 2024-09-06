import { StyledProductModal } from "./ProductModal.styled.ts";
import { ProductType } from "../../models/models.ts";
import { RxCross2 } from "react-icons/rx";
import React, { useEffect } from "react";

type ProductModalProps = {
  productData: ProductType;
  handleVisibleModal: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  setOpenModal: (open: boolean) => void;
  openModal: boolean
}

function ProductModal({
                        productData: { name, price, urlImg, description },
                        handleVisibleModal,
                        setOpenModal,
                        openModal,
                      }: ProductModalProps) {

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    function handleKeydown(e: { key: string; }): void {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [setOpenModal, openModal]);

  return (
    <StyledProductModal className={openModal && "active"} onClick={(e) => handleVisibleModal(e)}>
      <div onClick={(e) => e.stopPropagation()}
           className={openModal ? "modalBody visibleModal" : "modalBody"}>
        <div className="wrapperImg">
          <img className="img" src={urlImg} alt={name} />
        </div>
        <div className="productInfo">
          <h3 className="productTitle">{name}</h3>
          <p className="productDescription">{description}</p>
          <p className="productPrice">Price: {price}$</p>
        </div>
        <button className="productBtn">Buy now</button>
        <button onClick={() => setOpenModal(false)} className="exitBtn"><RxCross2 className="iconBtn" size={34} />
        </button>
      </div>
    </StyledProductModal>
  );
}

export default ProductModal;