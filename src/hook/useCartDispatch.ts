import { CartContextDispatch } from "@/context/CartContext";
import { useContext } from "react";

export const useCartAction = () => {
  const dispatch = useContext(CartContextDispatch);
  if (!dispatch) {
    throw "not find this context";
  }
  return dispatch;
};
