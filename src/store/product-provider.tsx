import React, { createContext, useReducer, Dispatch } from "react";
import type { ProductType } from "../data/product";

interface StateType {
  cartItems: ProductType[];
}

type ActionType =
  | { type: "ADD_PRODUCT"; payload: ProductType }
  | { type: "REMOVE_PRODUCT"; payload: number };


const initialState: StateType = {
  cartItems: [],
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Create context with initial undefined state
type CartContextType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
