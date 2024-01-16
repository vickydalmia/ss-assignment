import type { ComponentPropsWithRef } from 'react';
import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: React.ReactNode | string;
  variant: 'primary' | 'secondary';
  margin?: string;
}

const ButtonWrapper = styled.div<{ margin?: string }>`
  display: flex;
  width: 100%;
  margin: ${({ margin }) => (margin ? margin : 'auto 0 0 0')};
`;

const ButtonBase = styled.button<{
  style: {
    '--bg-color': string;
    '--color': string;
    '--border-radius': string;
    '--height': string;
  };
}>`
  border: 1px solid var(--text);
  border-radius: var(--border-radius);
  color: var(--color);
  background-color: var(--bg-color);
  height: var(--height);
  width: 100%;
  &:disabled {
    opacity: 0.5;
  }
`;

const Button = (props: ButtonProps) => {
  const { variant, margin = '' } = props;
  const variantObj = {
    primary: {
      '--bg-color': 'var(--text)',
      '--color': '#fff',
      '--border-radius': '4px',
      '--height': '40px',
    },
    secondary: {
      '--bg-color': 'none',
      '--color': 'var(--text)',
      '--border-radius': '4px',
      '--height': '40px',
    },
  };

  const style = variantObj[variant];

  return (
    <ButtonWrapper margin={margin}>
      <ButtonBase {...props} style={style}>
        {props.children}
      </ButtonBase>
    </ButtonWrapper>
  );
};

export default Button;
