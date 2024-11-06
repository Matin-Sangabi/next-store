import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) {
    throw "not find this context";
  }
  return cart;
};
