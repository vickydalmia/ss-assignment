import styled from "styled-components";

const SavingInfoWrapper = styled.div<{ height: string; margin: string }>`
  display: flex;
  height: ${({ height }) => (height ? `${height}px` : "30px")};
  background-color: var(--red);
  border-radius: 4px;
  color: var(--white);
  width: 90px;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  margin: ${({ margin }) => (margin ? margin : null)};
`;

const SavingInfo = ({
  price,
  height,
  margin,
}: {
  price: string;
  height: string;
  margin: string;
}) => {
  return (
    <SavingInfoWrapper height={height} margin={margin}>
      {price}
    </SavingInfoWrapper>
  );
};

export default SavingInfo;
