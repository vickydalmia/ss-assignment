import { useState } from "react";
import styled from "styled-components";
import { ProductType } from "../../data/product";
import ProductCard from "../product-card";

// Styled components
const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 50%; // Each slide takes up 50% of the container width
  max-width: 50%;
  text-align: center;
`;

// Slider component
interface SliderProps {
  products: ProductType[];
}

const Slider = ({ products }: SliderProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === products.length - 2 ? 0 : current + 2);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? products.length - 2 : current - 2);
  };

  return (
    <div>
      <SliderContainer>
        {products.slice(current, current + 2).map((product) => (
          <Slide key={product.id}>
            <ProductCard product={product} />
          </Slide>
        ))}
      </SliderContainer>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
