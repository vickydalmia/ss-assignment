import { useContext } from "react";
import { CartContext } from "./product-provider";

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Cart Component must be used within a CartProvider");
  }

  const { state, dispatch } = context;
  return { state, dispatch };
};

export { useCart };
