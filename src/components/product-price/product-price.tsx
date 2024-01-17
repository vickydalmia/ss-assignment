import styled from "styled-components";
import { Text } from "../../ui/text";
import OldPrice from "../../ui/old-price";
import SellingPrice from "../../ui/selling-price";
import TaxPrice from "../../ui/tax-price";
import Button from "../../ui/button";
import { useCart } from "../../store/use-cart";

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 32px;
  margin-top: 15%;
`;

const ButtonWrapper = styled.div`
  width: 263px;
  margin-top: 16px;
`;
interface ProductPriceProps {
  currency: string;
  showSidebar: () => void;
}
const ProductPrice = ({ currency, showSidebar }: ProductPriceProps) => {
  const { state } = useCart();

  const oldPrice = (() => {
    let oldPrice = 0;
    state.cartItems.forEach((each) => {
      oldPrice = oldPrice + each.mrp;
    });
    return `${currency}${oldPrice.toFixed(2)}`;
  })();
  const sellingPrice = (() => {
    let sellingPrice = 0;
    state.cartItems.forEach((each) => {
      sellingPrice = sellingPrice + each.sellingPrice;
    });
    return `${currency}${sellingPrice.toFixed(2)}`;
  })();
  const taxPrice = (() => {
    let taxPrice = 0;
    state.cartItems.forEach((each) => {
      taxPrice = taxPrice + each.withoutTaxPrice;
    });
    return `${currency}${taxPrice.toFixed(2)}`;
  })();
  return (
    <ProductPriceWrapper>
      <Text fontSize={14} fontWeight={600}>
        {state.cartItems.length} Items added
      </Text>
      <Text fontSize={14} fontWeight={400} margin="8px 0">
        Total bundle price
      </Text>
      {oldPrice ? <OldPrice fontSize={14} price={oldPrice} /> : null}
      <SellingPrice fontSize={30} fontSizeSm={16} price={sellingPrice} />

      <TaxPrice fontSize={18} fontSizeSm={18} price={taxPrice} />
      <ButtonWrapper>
        <Button variant="primary" onClick={showSidebar}>
          <Text
            fontSize={14}
            fontWeight={700}
            style={{ "--text-color": "var(--white)" }}
          >
            Add both to Basket
          </Text>
        </Button>
      </ButtonWrapper>
    </ProductPriceWrapper>
  );
};

export default ProductPrice;
