import Button from "../button";
import ColorSelect from "../color/color-selector";
import rightClickIcon from "../../assets/chevron-down.svg";
import { Text } from "../text";
import styled from "styled-components";

interface SelectButtonProps {
  isSelected?: boolean;
}
const RightClickButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightClickIcon = styled.img`
  max-width: 200%;
`;
const ButtonInside = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SelectButton = ({ isSelected }: SelectButtonProps) => {
  return (
    <Button variant="secondary">
      <ButtonInside>
        {isSelected ? (
          <ColorSelect color="black" isSelected={true} width="24" height="24" />
        ) : (
          <Text fontSize={14} fontWeight={700}>
            Select Option
          </Text>
        )}
        <RightClickButton>
          <RightClickIcon src={rightClickIcon} />
        </RightClickButton>
      </ButtonInside>
    </Button>
  );
};

export default SelectButton;
