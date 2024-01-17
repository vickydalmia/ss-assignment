import styled from "styled-components";
import type { ProductType } from "../../data/product";
import StarRating from "../../ui/star-rating";
import { Text } from "../../ui/text";
import OldPrice from "../../ui/old-price";
import SellingPrice from "../../ui/selling-price";
import TaxPrice from "../../ui/tax-price";
import SelectButton from "../../ui/select-button";
import Cart from "../cart/cart";
import CheckBox from "../../ui/checkbox/checkbox";
import { useCart } from "../../store/use-cart";
import { useEffect, useState } from "react";

const ProductImageWrapper = styled.div`
  width: 225px;
  height: 225px;
  position: relative;
`;

const ProductSelect = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  align-items: flex-start;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  align-items: flex-start;
  justify-content: flex-end;
`;

const TitleBox = styled.div`
  height: 35px;
  display: flex;
  margin-bottom: 20px;
`;

interface ProductCardProps {
  product: ProductType;
  setSelectedProduct: (product: ProductType) => void;
}
const ProductCard = ({ product, setSelectedProduct }: ProductCardProps) => {
  const { dispatch } = useCart();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      dispatch({ type: "ADD_PRODUCT", payload: product });
    } else {
      dispatch({ type: "REMOVE_PRODUCT", payload: product.id });
    }
  }, [checked]);

  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductImage src={product.images[0]} />
        <ProductSelect>
          <CheckBox
            onChange={() => setChecked((prev) => !prev)}
            checked={checked}
          />
        </ProductSelect>
      </ProductImageWrapper>
      <StarRating
        totalStars={5}
        initialRating={5}
        noOfRatings={3}
        margin="5px 0 0 0"
      />
      <TitleBox>
        <Text
          fontSize={14}
          fontWeight={400}
          margin="10px 0 13px 0"
          textAlign="left"
        >
          {product.title}
        </Text>
      </TitleBox>
      <PriceBox>
        {product.mrp > product.sellingPrice ? (
          <OldPrice fontSize={14} price={`${product.currency}${product.mrp}`} />
        ) : null}
        <SellingPrice
          fontSize={24}
          fontSizeSm={14}
          price={`${product.currency}${product.sellingPrice}`}
        />

        <TaxPrice
          fontSize={14}
          fontSizeSm={14}
          price={`${product.currency}${product.withoutTaxPrice}`}
        />
      </PriceBox>
      {product.variant.length > 0 ? (
        <SelectButton
          onClick={() => setSelectedProduct(product)}
          color={product.variant[0].color}
        />
      ) : (
        <Cart width="225" />
      )}
    </ProductWrapper>
  );
};

export default ProductCard;
