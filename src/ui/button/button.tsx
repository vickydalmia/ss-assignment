import type { ComponentPropsWithRef } from "react";
import React from "react";
import styled from "styled-components";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode | string;
  variant: "primary" | "secondary";
  margin?: string;
}

const ButtonBase = styled.button<{
  style: {
    "--bg-color": string;
    "--color": string;
    "--border-radius": string;
    "--height": string;
  };
  margin: string;
}>`
  border: 1px solid var(--text);
  border-radius: var(--border-radius);
  color: var(--color);
  background-color: var(--bg-color);
  height: var(--height);
  width: 100%;
  margin: ${({ margin }) => (margin ? margin : null)};
  &:disabled {
    opacity: 0.5;
  }
`;

const Button = (props: ButtonProps) => {
  const { variant, margin = "" } = props;
  const variantObj = {
    primary: {
      "--bg-color": "var(--text)",
      "--color": "#fff",
      "--border-radius": "4px",
      "--height": "40px",
    },
    secondary: {
      "--bg-color": "none",
      "--color": "var(--text)",
      "--border-radius": "4px",
      "--height": "40px",
    },
  };

  const style = variantObj[variant];

  return (
    <ButtonBase {...props} style={style} margin={margin}>
      {props.children}
    </ButtonBase>
  );
};

export default Button;
