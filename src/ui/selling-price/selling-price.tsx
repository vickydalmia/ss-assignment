import { Text } from "../text";
interface SellingPriceProps {
  fontSizeSm: 32 | 30 | 28 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  fontSize: 32 | 30 | 28 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  price: string;
}
const SellingPrice = ({ fontSize, fontSizeSm, price }: SellingPriceProps) => {
  return (
    <Text fontSize={fontSize} fontWeight={700}>
      {price}
      <Text fontSize={fontSizeSm} fontWeight={700} margin="0 0 0 5px">
        inc VAT
      </Text>
    </Text>
  );
};

export default SellingPrice;
