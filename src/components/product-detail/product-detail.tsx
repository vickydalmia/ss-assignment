import styled from "styled-components";
import type { ProductType } from "../../data/product";
import { Text } from "../../ui/text";
import StarRating from "../../ui/star-rating";
import ProductImage from "../product-image";
import OldPrice from "../../ui/old-price";
import SellingPrice from "../../ui/selling-price";
import TaxPrice from "../../ui/tax-price";
import SavingInfo from "../../ui/saving-info";
import ColorSelect from "../../ui/color/color-selector";
import Button from "../../ui/button";
import Cart from "../cart/cart";
import { useState } from "react";
import Tab from "../../ui/tabs/tab";

const ProductDetailWrapper = styled.div`
  width: 1000px;
  height: 650px;
  background-color: #fff;
  padding: 24px 32px;
`;
interface ProductDetailProps {
  product: ProductType;
  onClose: () => void;
}
const ProductDetailSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const RightSection = styled.div`
  width: 356px;
  display: flex;
  flex-direction: column;
`;

const LeftSection = styled.div`
  max-width: 517px;
  display: flex;
  flex-direction: column;
`;

const Border = styled.div<{ margin: string }>`
  width: 100%;
  height: 1.5px;
  background-color: #c2c7cc;
  margin: ${({ margin }) => (margin ? margin : null)};
`;

const ColorSelectors = styled.div`
  display: flex;
  margin-top: 8px;
`;
const ColorSelectorsWrapper = styled.div`
  margin: 16px 0;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1.5px solid #c2c7cc;
  margin-bottom: 32px;
`;

const Description = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const OpenLink = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 5px;
`;

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    {
      title: "Overview",
      element: <ProductImage images={product.images} />,
    },
    {
      title: "Description",
      element: (
        <Description
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></Description>
      ),
    },
  ];

  return (
    <ProductDetailWrapper>
      <TopHeader>
        <Text fontSize={24} fontWeight={700}>
          {product.title}
        </Text>
        <IconButton onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0425 11.9993L17.7855 16.7423C17.9149 16.8823 17.9852 17.0669 17.9815 17.2576C17.9778 17.4482 17.9004 17.63 17.7656 17.7649C17.6309 17.8998 17.4491 17.9773 17.2585 17.9811C17.0678 17.985 16.8831 17.9149 16.743 17.7855L11.9992 13.0425L7.25623 17.7855C7.11789 17.9237 6.93029 18.0014 6.73472 18.0013C6.53914 18.0012 6.3516 17.9235 6.21336 17.7851C6.07511 17.6468 5.99749 17.4592 5.99756 17.2636C5.99763 17.068 6.07539 16.8805 6.21373 16.7423L10.9567 11.9993L6.21373 7.257C6.08428 7.117 6.01404 6.93232 6.01774 6.74167C6.02144 6.55103 6.09879 6.36921 6.23357 6.23433C6.36836 6.09945 6.55012 6.02197 6.74076 6.01813C6.9314 6.0143 7.11613 6.0844 7.25623 6.21375L11.9992 10.9568L16.743 6.21375C16.8115 6.1453 16.8928 6.09101 16.9823 6.05399C17.0718 6.01696 17.1677 5.99792 17.2645 5.99796C17.3613 5.99799 17.4572 6.0171 17.5467 6.05419C17.6361 6.09128 17.7174 6.14563 17.7859 6.21413C17.8543 6.28263 17.9086 6.36394 17.9456 6.45342C17.9827 6.54291 18.0017 6.6388 18.0017 6.73564C18.0016 6.83248 17.9825 6.92837 17.9454 7.01782C17.9083 7.10728 17.854 7.18855 17.7855 7.257L13.0425 11.9993Z"
              fill="#1D2024"
            />
          </svg>
        </IconButton>
      </TopHeader>
      <StarRating
        initialRating={5}
        totalStars={5}
        noOfRatings={5}
        margin="0 0 17px 0"
      />
      <TabList>
        {tabsData.map((tab, index) => {
          return (
            <Tab
              title={tab.title}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
              key={tab.title}
            />
          );
        })}
        <OpenLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M9.5625 7.00276L14.875 2.01657"
              stroke="#D80A00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3335 2.01657H14.8752V5.3407"
              stroke="#D80A00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.875 9.32964V12.6538C14.875 13.0064 14.7257 13.3446 14.4601 13.594C14.1944 13.8433 13.8341 13.9834 13.4583 13.9834H3.54167C3.16594 13.9834 2.80561 13.8433 2.53993 13.594C2.27426 13.3446 2.125 13.0064 2.125 12.6538V3.34622C2.125 2.99358 2.27426 2.65537 2.53993 2.40602C2.80561 2.15666 3.16594 2.01657 3.54167 2.01657H7.08333"
              stroke="#D80A00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Text fontSize={14} fontWeight={400} margin="0 0 0 5px">
            Open in a new tab
          </Text>
        </OpenLink>
      </TabList>

      <ProductDetailSection>
        <LeftSection>{tabsData[activeTab].element}</LeftSection>
        <RightSection>
          {product.mrp > product.sellingPrice ? (
            <OldPrice
              fontSize={14}
              price={`${product.currency}${product.mrp}`}
            />
          ) : null}
          <SellingPrice
            fontSize={30}
            fontSizeSm={18}
            price={`${product.currency}${product.sellingPrice}`}
          />
          <TaxPrice
            fontSize={14}
            fontSizeSm={14}
            price={`${product.currency}${product.withoutTaxPrice}`}
          />
          {product.mrp > product.sellingPrice ? (
            <SavingInfo
              height="30"
              margin="10px 0 0 0"
              price={`Save ${product.currency}${(
                product.mrp - product.sellingPrice
              ).toFixed(2)}`}
            />
          ) : null}

          {product.variant.length > 0 ? (
            <>
              <Border margin="29px 0 0 0" />
              <ColorSelectorsWrapper>
                <Text
                  fontSize={16}
                  fontWeight={700}
                  style={{ "--text-color": "var(--black)" }}
                >
                  Color: {product.variant[0].color}
                </Text>
                <ColorSelectors>
                  {product.variant.map((each, index) => (
                    <ColorSelect
                      color={each.color}
                      key={each.color}
                      width="40"
                      height="40"
                      isSelected={index === 0 ? true : false}
                    />
                  ))}
                </ColorSelectors>
              </ColorSelectorsWrapper>
              <Border margin="0 0 24px 0" />
            </>
          ) : (
            <Border margin="24px 0 24px 0" />
          )}

          <Cart width="125" />
          <Button variant="primary" margin="16px 0 0 0">
            <Text
              fontSize={14}
              fontWeight={700}
              style={{ "--text-color": "var(--white)" }}
            >
              Update
            </Text>
          </Button>
        </RightSection>
      </ProductDetailSection>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
