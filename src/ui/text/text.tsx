import type { CSSProperties } from "react";
import styled from "styled-components";

interface StyleProps extends CSSProperties {
  "--text-color"?: string;
}
interface TextProps {
  fontWeight: 400 | 500 | 600 | 700;
  fontSize: 32 | 30 | 28 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  lineHeight?: number;
  letterSpacing?: number;
  style?: StyleProps;
  margin?: string;
  textAlign?: "left" | "right" | "center";
}

const Text = styled.span<TextProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "12px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "normal")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? `${letterSpacing}px` : null};
  color: var(--text-color, var(--text));
  margin: ${({ margin }) => (margin ? margin : null)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : null)};
`;

Text.displayName = "Text";

export default Text;
