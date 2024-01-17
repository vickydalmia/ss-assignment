import styled from "styled-components";
import ProductCard from "./components/product-card";
import { product, products } from "./data/product";
import { useState } from "react";
import Modal from "./ui/modal";
import ProductDetail from "./components/product-detail";
import { Text } from "./ui/text";
import PlusIcon from "./ui/icons/plus-icon";
import Slider from "./components/slider";

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

const ProductList = styled.div`
  display: flex;
  margin-top: 32px;
`;

const FrequentlyBoughtSection = styled.div`
  display: flex;
`;

function App() {
  const [showProductDetail, setShowProductDetail] = useState(false);

  return (
    <AppWrapper>
      <ProductSection>
        <ProductWrapper>
          <Text fontSize={20} fontWeight={700}>
            Frequently bought together
          </Text>
          <ProductList>
            <ProductCard product={product} />
            {product.frequentlyBought.length > 0 ? (
              <FrequentlyBoughtSection>
                <PlusIcon />
                <Slider products={products} />
              </FrequentlyBoughtSection>
            ) : null}
          </ProductList>
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
