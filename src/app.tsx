import styled from "styled-components";
import ProductCard from "./components/product-card";
import { ProductType, product, products } from "./data/product";
import { useState } from "react";
import Modal from "./ui/modal";
import ProductDetail from "./components/product-detail";
import { Text } from "./ui/text";
import PlusIcon from "./ui/icons/plus-icon";
import Slider from "./components/slider";
import ProductPrice from "./components/product-price";
import { CartProvider } from "./store/product-provider";

const ProductSection = styled.div`
  height: 582px;
  background-color: var(--bg-card);
  width: 100%;
`;
const ProductWrapper = styled.div`
  padding: 50px 0;
  width: 1125px;
  margin: auto;
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

const PlusIconWrapper = styled.div`
  margin: 15% 6px 0 32px;
`;

function App() {
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProduct, setProduct] = useState<null | ProductType>(null);

  const setSelectedProduct = (product: ProductType) => {
    setShowProductDetail(true);
    setProduct(product);
  };

  return (
    <CartProvider>
      <AppWrapper>
        <ProductSection>
          <ProductWrapper>
            <Text fontSize={20} fontWeight={700}>
              Frequently bought together
            </Text>
            <ProductList>
              <ProductCard
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
              {product.frequentlyBought.length > 0 ? (
                <FrequentlyBoughtSection>
                  <PlusIconWrapper>
                    <PlusIcon />
                  </PlusIconWrapper>
                  <Slider
                    products={products}
                    setSelectedProduct={setSelectedProduct}
                  />
                </FrequentlyBoughtSection>
              ) : null}
              <ProductPrice
                oldPrice={`${product.currency}${product.mrp}`}
                sellingPrice={`${product.currency}${product.sellingPrice}`}
                taxPrice={`${product.currency}${product.withoutTaxPrice}`}
              />
            </ProductList>
          </ProductWrapper>
        </ProductSection>
        {showProductDetail && selectedProduct ? (
          <Modal>
            <ProductDetail
              product={selectedProduct}
              onClose={() => {
                setShowProductDetail(false);
                setProduct(null);
              }}
            />
          </Modal>
        ) : null}
      </AppWrapper>
    </CartProvider>
  );
}

export default App;
