import styled from "styled-components";

const CartWrapper = styled.div<{ width: string }>`
  border-radius: 4px;
  border: 1px solid #c2c7cc;
  background: #fff;
  padding: 7px 8px;
  justify-content: space-between;
  display: flex;
  margin: 10px 0 0 0;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
`;
const TotalCart = styled.span`
  color: #1d2024;
  font-size: 14px;
  font-weight: 400;
`;
const Cart = ({ width }: { width: string }) => {
  return (
    <CartWrapper width={width}>
      <Icon>
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
            d="M6.74989 11.2493H17.2499C17.4489 11.2493 17.6398 11.3283 17.7805 11.469C17.9212 11.6098 18.0003 11.8006 18.0003 11.9996C18.0003 12.1986 17.9212 12.3895 17.7805 12.5302C17.6398 12.6709 17.4489 12.75 17.2499 12.75H6.74989C6.55087 12.75 6.36001 12.6709 6.21929 12.5302C6.07857 12.3895 5.99951 12.1986 5.99951 11.9996C5.99951 11.8006 6.07857 11.6098 6.21929 11.469C6.36001 11.3283 6.55087 11.2493 6.74989 11.2493Z"
            fill="#1D2024"
          />
        </svg>
      </Icon>
      <TotalCart>4</TotalCart>
      <Icon>
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
            d="M17.2499 12.75H12.7499V17.25C12.7499 17.4489 12.6709 17.6397 12.5302 17.7803C12.3896 17.921 12.1988 18 11.9999 18C11.801 18 11.6102 17.921 11.4696 17.7803C11.3289 17.6397 11.2499 17.4489 11.2499 17.25V12.75H6.74992C6.55681 12.7414 6.37447 12.6586 6.24087 12.5189C6.10728 12.3792 6.03271 12.1933 6.03271 12C6.03271 11.8067 6.10728 11.6208 6.24087 11.4811C6.37447 11.3414 6.55681 11.2586 6.74992 11.25H11.2499V6.75C11.2499 6.55109 11.3289 6.36032 11.4696 6.21967C11.6102 6.07902 11.801 6 11.9999 6C12.1988 6 12.3896 6.07902 12.5302 6.21967C12.6709 6.36032 12.7499 6.55109 12.7499 6.75V11.25H17.2499C17.4488 11.25 17.6396 11.329 17.7802 11.4697C17.9209 11.6103 17.9999 11.8011 17.9999 12C17.9999 12.1989 17.9209 12.3897 17.7802 12.5303C17.6396 12.671 17.4488 12.75 17.2499 12.75Z"
            fill="#1D2024"
          />
        </svg>
      </Icon>
    </CartWrapper>
  );
};

export default Cart;
