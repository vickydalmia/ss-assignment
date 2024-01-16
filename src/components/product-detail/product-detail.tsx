import styled from "styled-components";
import type { ProductType } from "../../data/product";
import { Text } from "../../ui/text";
import StarRating from "../../ui/star-rating";
import Tabs from "../../ui/tabs";
import ProductImage from "../product-image";

const ProductDetailWrapper = styled.div`
  width: 1000px;
  height: 650px;
  background-color: #fff;
`;
interface ProductDetailProps {
  product: ProductType;
}
const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <ProductDetailWrapper>
      <Text fontSize={24} fontWeight={700}>
        {product.title}
      </Text>
      <StarRating initialRating={5} totalStars={5} />
      <Tabs>
        <Tabs.Tab title="Overview">
          <ProductImage images={product.images} />
        </Tabs.Tab>
        <Tabs.Tab title="Description">
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </Tabs.Tab>
      </Tabs>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
