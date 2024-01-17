import styled from "styled-components";
import { Text } from "../../ui/text";
import { useCart } from "../../store/use-cart";
import Button from "../../ui/button";
import { useState } from "react";
import Tabs from "../../ui/tabs";
import { products } from "../../data/product";
import ProductCard from "../product-card";
import SidebarPrice from "../sidebar-product-price/sidebar-product-price";

const SidebarWrapper = styled.div`
  width: 600px;
  height: 100%;
  background-color: var(--white);
  position: fixed;
  right: 0;
  overflow-y: auto;
`;

const SidebarHeader = styled.div`
  background-color: #f0f1f2;
  height: 292px;
  padding: 28px 24px;
`;

const SidebarHeaderButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const IconButton = styled.div`
  display: flex;
`;

const SidebarHeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;
const SidebarTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
const ProductImage = styled.img`
  max-width: 100%;
`;
const ProductImageList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
const TabList = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
`;

const TabListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

const TabContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  margin: 32px;
`;

interface SidebarProps {
  onClose: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const { state } = useCart();
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    {
      title: "Gaming Desks",
      element: <></>,
    },
    {
      title: "Gaming Chairs",
      element: <></>,
    },
    {
      title: "Gaming Headsets",
      element: <></>,
    },
    {
      title: "Gaming Mice & Keyboards",
      element: <></>,
    },
  ];

  const oldPrice = (() => {
    let oldPrice = 0;
    let currency = "";
    state.cartItems.forEach((each) => {
      oldPrice = oldPrice + each.mrp;
      currency = each.currency;
    });
    return `${currency}${oldPrice.toFixed(2)}`;
  })();
  const sellingPrice = (() => {
    let sellingPrice = 0;
    let currency = "";
    state.cartItems.forEach((each) => {
      sellingPrice = sellingPrice + each.sellingPrice;
      currency = each.currency;
    });
    return `${currency}${sellingPrice.toFixed(2)}`;
  })();
  const taxPrice = (() => {
    let taxPrice = 0;
    let currency = "";
    state.cartItems.forEach((each) => {
      taxPrice = taxPrice + each.withoutTaxPrice;
      currency = each.currency;
    });
    return `${currency}${taxPrice.toFixed(2)}`;
  })();
  const savePrice = (() => {
    let mrpPrice = 0;
    let sellingPrice = 0;
    let currency = "";
    state.cartItems.forEach((each) => {
      sellingPrice = sellingPrice + each.sellingPrice;
      mrpPrice = mrpPrice + each.mrp;
      currency = each.currency;
    });
    return `Save ${currency}${(mrpPrice - sellingPrice).toFixed(2)}`;
  })();

  return (
    <SidebarWrapper>
      <SidebarHeader>
        <SidebarTitleWrapper>
          <SidebarHeaderTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
            >
              <path
                d="M6.11069 10.0468C5.71987 10.4385 5.08529 10.4383 4.69465 10.0465L2.05582 7.39956C1.67831 7.0209 1.06535 7.01981 0.686506 7.39714C0.307411 7.77473 0.306327 8.38818 0.684086 8.7671L4.69431 12.7896C5.08508 13.1816 5.71992 13.1816 6.11069 12.7896L16.3206 2.5484C16.6961 2.17168 16.6961 1.5621 16.3206 1.18538C15.9435 0.807142 15.3309 0.806998 14.9537 1.18506L6.11069 10.0468Z"
                fill="#1D2024"
              />
            </svg>
            <Text fontSize={14} fontWeight={600} margin="0 0 0 5px">
              Just added to your Basket
            </Text>
          </SidebarHeaderTitle>
          <IconButton onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0425 11.9993L17.7855 16.7423C17.9149 16.8823 17.9852 17.0669 17.9815 17.2576C17.9778 17.4482 17.9004 17.63 17.7656 17.7649C17.6309 17.8998 17.4491 17.9773 17.2585 17.9811C17.0678 17.985 16.8831 17.9149 16.743 17.7855L11.9992 13.0425L7.25623 17.7855C7.11789 17.9237 6.93029 18.0014 6.73472 18.0013C6.53914 18.0012 6.3516 17.9235 6.21336 17.7851C6.07511 17.6468 5.99749 17.4592 5.99756 17.2636C5.99763 17.068 6.07539 16.8805 6.21373 16.7423L10.9567 11.9993L6.21373 7.257C6.08428 7.117 6.01404 6.93232 6.01774 6.74167C6.02144 6.55103 6.09879 6.36921 6.23357 6.23433C6.36836 6.09945 6.55012 6.02197 6.74076 6.01813C6.9314 6.0143 7.11613 6.0844 7.25623 6.21375L11.9992 10.9568L16.743 6.21375C16.8115 6.1453 16.8928 6.09101 16.9823 6.05399C17.0718 6.01696 17.1677 5.99792 17.2645 5.99796C17.3613 5.99799 17.4572 6.0171 17.5467 6.05419C17.6361 6.09128 17.7174 6.14563 17.7859 6.21413C17.8543 6.28263 17.9086 6.36394 17.9456 6.45342C17.9827 6.54291 18.0017 6.6388 18.0017 6.73564C18.0016 6.83248 17.9825 6.92837 17.9454 7.01782C17.9083 7.10728 17.854 7.18855 17.7855 7.257L13.0425 11.9993Z"
                fill="#1D2024"
              />
            </svg>
          </IconButton>
        </SidebarTitleWrapper>
        <ProductImageList>
          {state.cartItems.map((each) => {
            return (
              <ProductImageWrapper key={each.id}>
                <ProductImage src={each.images[0]} />
              </ProductImageWrapper>
            );
          })}
        </ProductImageList>
        <SidebarPrice
          oldPrice={oldPrice}
          sellingPrice={sellingPrice}
          savingPrice={savePrice}
          taxPrice={taxPrice}
        />
        <SidebarHeaderButtonWrapper>
          <Button variant="secondary">
            <Text fontSize={14} fontWeight={700}>
              Continue shopping
            </Text>
          </Button>
          <Button variant="primary">
            <Text
              fontSize={14}
              fontWeight={700}
              style={{ "--text-color": "var(--white)" }}
            >
              View Basket
            </Text>
          </Button>
        </SidebarHeaderButtonWrapper>
      </SidebarHeader>
      <TabListWrapper>
        <Text fontSize={20} fontWeight={700}>
          customers also bought
        </Text>
        <TabList>
          {tabsData.map((tab, index) => {
            return (
              <Tabs
                title={tab.title}
                isActive={index === activeTab}
                onClick={() => setActiveTab(index)}
                key={tab.title}
                marginRight="28px"
                fontSize="14px"
              />
            );
          })}
        </TabList>
        <TabContent>
          {products.map((product) => {
            return (
              <ProductCard
                product={product}
                setSelectedProduct={() => {}}
                key={product.id}
              />
            );
          })}
        </TabContent>
      </TabListWrapper>
    </SidebarWrapper>
  );
};
export default Sidebar;
