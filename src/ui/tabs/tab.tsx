import styled from "styled-components";

const TabTitle = styled.button<{
  isActive: boolean | undefined;
  fontSize?: string;
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  line-height: normal;
  color: ${({ isActive }) => (isActive ? "var(--red)" : "var(--text)")};
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const TabWrapper = styled.div<{ marginRight?: string }>`
  display: flex;
  flex-direction: column;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "32px")};
  width: fit-content;
`;

const TabBorder = styled.div<{ isActive: boolean | undefined }>`
  width: 100%;
  height: 2px;
  background-color: ${({ isActive }) =>
    isActive ? "var(--red)" : "transparent"};
  margin-top: 4px;
`;
interface TabProps {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  fontSize?: string;
  marginRight?: string;
}

const Tab = ({ title, isActive, onClick, fontSize, marginRight }: TabProps) => {
  return (
    <TabWrapper marginRight={marginRight}>
      <TabTitle isActive={isActive} onClick={onClick} fontSize={fontSize}>
        {title}
      </TabTitle>
      <TabBorder isActive={isActive} />
    </TabWrapper>
  );
};

export default Tab;
