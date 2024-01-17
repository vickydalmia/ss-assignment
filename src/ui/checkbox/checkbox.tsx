import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeCheckbox = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
`;
const CustomStyledCheckbox = styled.div`
  pointer-events: none;
  border:2px solid #fff;
  border-radius: 2px;
  ${NativeCheckbox}:disabled + & {
    opacity: 0.5;
  }
`;
export type CheckboxProps = React.ComponentPropsWithoutRef<"input">;
const CheckBox = (props: CheckboxProps) => {
  const { disabled = false, checked, onChange } = props;
  return (
    <CheckBoxWrapper>
      <NativeCheckbox
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <CustomStyledCheckbox>
        {checked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <rect width="19" height="19" rx="2" fill="#1D2024" />
            <path
              d="M5 9.71528L7.9444 12.5298C8.07325 12.653 8.2762 12.653 8.40506 12.5298L14.19 7"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="18"
              height="18"
              rx="1.5"
              fill="white"
              stroke="#1D2024"
            />
          </svg>
        )}
      </CustomStyledCheckbox>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
