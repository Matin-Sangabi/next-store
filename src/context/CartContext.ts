import { ProductsDataTypes } from "@/types";
import { createContext, Dispatch } from "react";

export type CartState = {
  carts: ProductsDataTypes[];
};

export type CartAction =
  | { type: "ADD_TO_CART"; payload: ProductsDataTypes }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "DECREMENT"; payload: { id: number } };

export const INITIAL_STATE: CartState = {
  carts: [],
};

export const CartContext = createContext(INITIAL_STATE);
export const CartContextDispatch = createContext<Dispatch<CartAction>>(
  () => {}
);
