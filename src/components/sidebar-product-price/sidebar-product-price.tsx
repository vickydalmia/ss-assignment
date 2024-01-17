import styled from "styled-components";
import { Text } from "../../ui/text";
import OldPrice from "../../ui/old-price";
import SellingPrice from "../../ui/selling-price";
import TaxPrice from "../../ui/tax-price";
import SavingInfo from "../../ui/saving-info";

const SidebarPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 12px;
`;
const SidebarPriceRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarPriceRightTop = styled.div`
  display: flex;
  align-items: flex-end;
`;
const SidebarPriceRightBottom = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Margin = styled.div`
  margin-right: 8px;
`;

interface SidebarPriceProps {
  oldPrice: string;
  sellingPrice: string;
  taxPrice: string;
  savingPrice: string;
}

const SidebarPrice = ({
  oldPrice,
  sellingPrice,
  taxPrice,
  savingPrice,
}: SidebarPriceProps) => {
  return (
    <SidebarPriceWrapper>
      <Text fontSize={14} fontWeight={600} margin="0 16px 0 0">
        Subtotal
      </Text>
      <SidebarPriceRight>
        <SidebarPriceRightTop>
          <OldPrice fontSize={14} price={oldPrice} />
          <Margin />
          <SellingPrice fontSize={30} fontSizeSm={16} price={sellingPrice} />
        </SidebarPriceRightTop>
        <SidebarPriceRightBottom>
          <TaxPrice fontSize={18} fontSizeSm={18} price={taxPrice} />
          <Margin />
          <SavingInfo height="22" price={savingPrice} margin="" />
        </SidebarPriceRightBottom>
      </SidebarPriceRight>
    </SidebarPriceWrapper>
  );
};

export default SidebarPrice;
