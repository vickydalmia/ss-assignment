import { Text } from "../text";
interface TaxPriceProps {
  fontSizeSm: 32 | 30 | 28 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  fontSize: 32 | 30 | 28 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  price: string;
}
const TaxPrice = ({ fontSize, fontSizeSm, price }: TaxPriceProps) => {
  return (
    <Text fontSize={fontSize} fontWeight={400}>
      {price}
      <Text fontSize={fontSizeSm} fontWeight={400} margin="0 0 0 5px">
        ex VAT
      </Text>
    </Text>
  );
};

export default TaxPrice;
