import { useState } from "react";
import styled from "styled-components";
import ImageZoom from "../../ui/image-zoom";

const SliderContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

const HeroImage = styled.div`
  transition: transform 0.5s ease; /* Slide animation */
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 75px;
  height: 75px;
  object-fit: cover;
  cursor: pointer;
  transition: opacity 0.3s ease;
  border-radius: 4px;
  border: ${({ isSelected }) => (isSelected ? "1px solid var(--text)" : null)};
  &:not(:last-child) {
    margin-right: 16px;
  }
  &:hover {
    opacity: 0.6;
    border: 1px solid var(--text);
  }
`;

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <SliderContainer>
      <HeroImage>
        <ImageZoom
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </HeroImage>
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
            isSelected={index === currentImageIndex}
          />
        ))}
      </ThumbnailContainer>
    </SliderContainer>
  );
};

export default Slider;
