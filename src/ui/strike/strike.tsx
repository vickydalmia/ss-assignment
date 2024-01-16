import styled from "styled-components";

const Strike = styled.s`
  text-decoration: none;
  position: relative;
  width: fit-content;
  &:after {
    content: "";
    position: absolute;
    top: 9px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #f58585;
    transform: rotate(-15deg);
  }
`;

export default Strike;
