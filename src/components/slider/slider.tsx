import { useState } from "react";
import styled from "styled-components";
import { ProductType } from "../../data/product";
import ProductCard from "../product-card";

// Styled components
const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
`;

const Slide = styled.div`
  flex: 0 0 50%; // Each slide takes up 50% of the container width
  max-width: 50%;
  text-align: center;
  margin-right: 14px;
`;

const SliderWrapper = styled.div`
  display: flex;
`;

const SliderBtn = styled.button`
  width: 30px;
  height: 60px;
  background-color: var(--black);
  border: none;
  border-radius: 2px;
  margin-top: 50%;
`;
interface SliderProps {
  products: ProductType[];
  setSelectedProduct: (product: ProductType) => void;
}

const Slider = ({ products, setSelectedProduct }: SliderProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === products.length - 2 ? 0 : current + 2);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? products.length - 2 : current - 2);
  };

  return (
    <SliderWrapper>
      <SliderBtn onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="24"
          viewBox="0 0 13 24"
          fill="none"
        >
          <path
            d="M11.5059 0.494117C11.7788 0.221223 12.2212 0.221224 12.4941 0.494117C12.767 0.767011 12.767 1.20946 12.4941 1.48235L2.68358 11.2929C2.29305 11.6834 2.29305 12.3166 2.68358 12.7071L12.4941 22.5176C12.767 22.7905 12.767 23.233 12.4941 23.5059C12.2212 23.7788 11.7788 23.7788 11.5059 23.5059L0.988235 12.9882L0.707107 12.7071C0.316583 12.3166 0.316583 11.6834 0.707107 11.2929L0.988235 11.0118L11.5059 0.494117Z"
            fill="white"
          />
        </svg>
      </SliderBtn>
      <SliderContainer>
        {products.slice(current, current + 2).map((product) => (
          <Slide key={product.id}>
            <ProductCard
              product={product}
              setSelectedProduct={setSelectedProduct}
            />
          </Slide>
        ))}
      </SliderContainer>

      <SliderBtn onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="24"
          viewBox="0 0 13 24"
          fill="none"
        >
          <path
            d="M1.49412 0.494117C1.22122 0.221223 0.778775 0.221224 0.505882 0.494117C0.232987 0.767011 0.232987 1.20946 0.505881 1.48235L10.3164 11.2929C10.7069 11.6834 10.7069 12.3166 10.3164 12.7071L0.505881 22.5176C0.232987 22.7905 0.232987 23.233 0.505881 23.5059C0.778775 23.7788 1.22122 23.7788 1.49412 23.5059L12.0118 12.9882L12.2929 12.7071C12.6834 12.3166 12.6834 11.6834 12.2929 11.2929L12.0118 11.0118L1.49412 0.494117Z"
            fill="white"
          />
        </svg>
      </SliderBtn>
    </SliderWrapper>
  );
};

export default Slider;
