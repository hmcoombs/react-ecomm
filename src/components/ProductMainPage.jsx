import React from "react";
// import ProductApi from './components/ProductApi';
import { StyledProductCard, StyledImg, StyledButton } from "./styles";
// import 'bootstrap/dist/css/bootstrap.min.css';

const ProductMainPage = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <StyledProductCard key={product.id}>
          <div>
            <div>
              <StyledImg src={product.image} alt={""} />
            </div>

            <div>
              <h4>{product.title}</h4>
            </div>
          </div>

          <StyledButton>Item Details</StyledButton>
        </StyledProductCard>
      ))}
    </>
  );
};
export default ProductMainPage;

// style={{ display: "flex" }}
