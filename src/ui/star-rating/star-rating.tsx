import React from "react";
import styled from "styled-components";

const StarRatingWrapper = styled.div`
  display: flex;
`;
const Star = styled.div`
  width: 20px;
  height: 20px;
`;
interface StarRatingProps {
  totalStars: number;
  initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars,
  initialRating = 0,
}) => {
  const renderStars = () => {
    const starElements = [];

    for (let i = 1; i <= totalStars; i++) {
      const isFilled = i <= initialRating;
      const fractionalPart = initialRating - i + 1;

      starElements.push(
        <Star key={i} className={`star ${isFilled ? "filled" : ""}`}>
          {!isFilled ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id={`gradient-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset={`${fractionalPart * 100}%`}
                    stopColor="#FFD700"
                  />
                  <stop
                    offset={`${fractionalPart * 100}%`}
                    stopColor="#ffd90086"
                  />
                </linearGradient>
              </defs>
              <polygon
                points="12,2.4 14.1,8.7 21,9.3 15.8,14.1 17.5,21 12,17.7 6.5,21 8.2,14.1 3,9.3 9.9,8.7"
                fill={`url(#gradient-${i})`}
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon
                points="12,2.4 14.1,8.7 21,9.3 15.8,14.1 17.5,21 12,17.7 6.5,21 8.2,14.1 3,9.3 9.9,8.7"
                fill="#FFD700"
              />
            </svg>
          )}
        </Star>
      );
    }

    return starElements;
  };

  return <StarRatingWrapper>{renderStars()}</StarRatingWrapper>;
};

export default StarRating;
