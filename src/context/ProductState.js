import { useState } from "react";
import ProductContext from "./productContext";


const ProductState = (props) => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const initialState = {
    currentProduct
  };
  return (
    <ProductContext.Provider
      value={{
        state: initialState,
        currentProduct,
        setCurrentProduct
      }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState