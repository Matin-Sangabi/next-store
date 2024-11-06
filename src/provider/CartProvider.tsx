"use client";

const CART_STORAGE = "carts";

import {
  CartAction,
  CartContext,
  CartContextDispatch,
  CartState,
  INITIAL_STATE,
} from "@/context/CartContext";
import { cartReducer } from "@/reducer/CartReducer";
import React, { ReactNode, useEffect, useReducer } from "react";

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer<React.Reducer<CartState, CartAction>>(
    cartReducer,
    INITIAL_STATE
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data =
        JSON.parse(window.localStorage.getItem(CART_STORAGE) ?? "null") ||
        INITIAL_STATE;
      dispatch({ type: "STORAGE", payload: data.carts });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE, JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatch.Provider value={dispatch}>
        {children}
      </CartContextDispatch.Provider>
    </CartContext.Provider>
  );
}
