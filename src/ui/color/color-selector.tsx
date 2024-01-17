import styled from "styled-components";
const Colors = {
  black: "var(--black)",
  red: "var(--red)",
  green: "var(--green)",
};
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
  &:not(:last-child){
    margin-right: 8px;
  }
`;
interface ColorSelectProps {
  width?: string;
  height?: string;
  color?: "black" | "red" | "green";
  isSelected?: boolean;
}
const ColorSelect = ({
  width = "40",
  height = "40",
  color = "black",
  isSelected = false,
}: ColorSelectProps) => {
  return (
    <ColorSelectWrapper
      width={width}
      height={height}
      color={color}
      isSelected={isSelected}
    />
  );
};

export default ColorSelect;
