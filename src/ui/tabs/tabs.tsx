import React, { useState, ReactElement, cloneElement } from "react";
import Tab from "./tab";
import styled from "styled-components";

const TabList = styled.div`
    display: flex;
`
interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

interface TabsProps {
  children: ReactElement<TabProps>[]; // Accept only Tab components as children
}

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabList>
        {children.map((tab, index) =>
          cloneElement(tab, {
            isActive: activeTab === index,
            onClick: () => handleTabClick(index),
          })
        )}
      </TabList>
      <div className="tab-content">{children[activeTab].props.children}</div>
    </div>
  );
};
Tabs.Tab = Tab;

export default Tabs;
