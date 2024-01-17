import styled from "styled-components";
const Colors = {
  black: "var(--black)",
  red: "var(--red)",
  green: "var(--green)",
};

const ColorSelectOutSide = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-right: 8px;
  }
  align-items: center;
`;
const ColorSelectWrapper = styled.div<{
  width: string;
  height: string;
  color: "black" | "red" | "green";
  isSelected: boolean;
}>`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "40px")};
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  border-radius: 50%;
  outline: ${({ isSelected }) =>
    isSelected ? "1px solid var(--black)" : null};
  outline-offset: ${({ isSelected }) => (isSelected ? "1px" : null)};
  cursor: pointer;
  background-color: ${({ color }) => (color ? Colors[color] : null)};
`;

const ColorText = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  text-transform: capitalize;
  margin-left: 10px;
`;
interface ColorSelectProps {
  width?: string;
  height?: string;
  color?: "black" | "red" | "green";
  isSelected?: boolean;
  showText?: boolean;
}
const ColorSelect = ({
  width = "40",
  height = "40",
  color = "black",
  isSelected = false,
  showText = false,
}: ColorSelectProps) => {
  return (
    <ColorSelectOutSide>
      <ColorSelectWrapper
        width={width}
        height={height}
        color={color}
        isSelected={isSelected}
      />
      {showText ? <ColorText>{color}</ColorText> : null}
    </ColorSelectOutSide>
  );
};

export default ColorSelect;
