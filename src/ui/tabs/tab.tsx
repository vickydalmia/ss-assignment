import styled from "styled-components";

const TabTitle = styled.button<{ isActive: boolean | undefined }>`
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  line-height: normal;
  color: ${({ isActive }) => (isActive ? "var(--red)" : "var(--text)")};
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
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
  children: React.ReactNode;
}

const Tab = ({ title, isActive, onClick }: TabProps) => {
  return (
    <TabWrapper>
      <TabTitle isActive={isActive} onClick={onClick}>
        {title}
      </TabTitle>
      <TabBorder isActive={isActive} />
    </TabWrapper>
  );
};

export default Tab;
