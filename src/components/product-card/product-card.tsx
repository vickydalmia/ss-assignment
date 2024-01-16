import styled from "styled-components";
import type { ProductType } from "../../data/product";
import StarRating from "../../ui/star-rating";
import { Text } from "../../ui/text";
import OldPrice from "../../ui/old-price";
import SellingPrice from "../../ui/selling-price";
import TaxPrice from "../../ui/tax-price";
import SelectButton from "../../ui/select-button";

const ProductImageWrapper = styled.div`
  width: 225px;
  height: 225px;
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
`;

interface ProductCardProps {
  product: ProductType;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductImage src={product.images[0]} />
      </ProductImageWrapper>
      <StarRating totalStars={5} initialRating={5} noOfRatings={3} />
      <Text fontSize={14} fontWeight={400}>
        {product.title}
      </Text>
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
      <SelectButton />
    </ProductWrapper>
  );
};

export default ProductCard;
