import Strike from "../strike";
import { Text } from "../text";
interface OldPriceProps {
  fontSize: 32 | 30 | 28 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | 10;
  price: string;
}
const OldPrice = ({ fontSize, price }: OldPriceProps) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={400}
      style={{ "--text-color": "var(--text-light)" }}
    >
      Was <Strike>{price}</Strike>
    </Text>
  );
};
export default OldPrice;
