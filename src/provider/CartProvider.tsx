"use client";

import {
  CartAction,
  CartContext,
  CartContextDispatch,
  CartState,
  INITIAL_STATE,
} from "@/context/CartContext";
import { cartReducer } from "@/reducer/CartReducer";
import React, { ReactNode, useReducer } from "react";

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer<React.Reducer<CartState, CartAction>>(
    cartReducer,
    INITIAL_STATE
  );

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatch.Provider value={dispatch}>
        {children}
      </CartContextDispatch.Provider>
    </CartContext.Provider>
  );
}
