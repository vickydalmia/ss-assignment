import styled from "styled-components";
import ProductCard from "./components/product-card";
import { product } from "./data/product";
import { useState } from "react";
import Modal from "./ui/modal";
import ProductDetail from "./components/product-detail";

const ProductSection = styled.div`
  height: 582px;
  background-color: var(--bg-card);
  width: 100%;
`;
const ProductWrapper = styled.div`
  padding: 50px 160px 47px;
`;
const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

function App() {
  const [showProductDetail, setShowProductDetail] = useState(true);

  return (
    <AppWrapper>
      <ProductSection>
        <ProductWrapper>
          <ProductCard product={product} />
        </ProductWrapper>
      </ProductSection>
      {showProductDetail ? (
        <Modal>
          <ProductDetail product={product} />
        </Modal>
      ) : null}
    </AppWrapper>
  );
}

export default App;
