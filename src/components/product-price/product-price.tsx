import styled from "styled-components";
import { Text } from "../../ui/text";
import OldPrice from "../../ui/old-price";
import SellingPrice from "../../ui/selling-price";
import TaxPrice from "../../ui/tax-price";
import Button from "../../ui/button";

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
  oldPrice: string;
  taxPrice: string;
  sellingPrice: string;
}
const ProductPrice = ({
  oldPrice,
  taxPrice,
  sellingPrice,
}: ProductPriceProps) => {
  return (
    <ProductPriceWrapper>
      <Text fontSize={14} fontWeight={600}>
        2 Items added
      </Text>
      <Text fontSize={14} fontWeight={400}>
        Total bundle price
      </Text>
      {oldPrice ? <OldPrice fontSize={14} price={oldPrice} /> : null}
      <SellingPrice fontSize={30} fontSizeSm={16} price={sellingPrice} />

      <TaxPrice fontSize={18} fontSizeSm={18} price={taxPrice} />
      <ButtonWrapper>
        <Button variant="primary">
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
