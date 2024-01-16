import React, { useState } from "react";
import styled from "styled-components";

const ZoomContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 382px;
  height: 382px;
`;

const ZoomedImage = styled.img<{ zoomed: boolean; x: number; y: number }>`
  width: 100%;
  height: auto;
  transition: transform 0.2s;
  transform-origin: ${({ zoomed, x, y }) =>
    zoomed ? `${x}% ${y}%` : "center"};
  transform: ${({ zoomed }) => (zoomed ? "scale(2)" : "scale(1)")};
  cursor: pointer;
`;

interface ImageZoomProps {
  src: string;
  alt: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt }) => {
  const [zoomed, setZoomed] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const newX = (mouseX / width) * 100;
    const newY = (mouseY / height) * 100;

    setZoomed(true);
    setX(newX);
    setY(newY);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  return (
    <ZoomContainer
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ZoomedImage src={src} alt={alt} zoomed={zoomed} x={x} y={y} />
    </ZoomContainer>
  );
};

export default ImageZoom;
