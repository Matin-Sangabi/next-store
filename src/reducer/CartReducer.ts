import { CartAction, CartState } from "@/context/CartContext";

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      const carts = [...state.carts];
      const payload = action.payload;
      const findIndexCart = carts.findIndex((item) => item.id === payload.id);
      if (findIndexCart < 0) {
        // not exist
        const newItem = { ...payload, quantity: 1 };
        carts.push(newItem);
      } else {
        const updateCartItems = { ...carts[findIndexCart] };
        if (updateCartItems.quantity) {
          updateCartItems.quantity++;
          carts[findIndexCart] = updateCartItems;
        }
      }

      return { ...state, carts };
    case "REMOVE_FROM_CART":
      const { id } = action.payload;
      const removeCarts = [...state.carts];
      const newCarts = removeCarts.filter((item) => item.id !== id);
      return { ...state, carts: newCarts };

    case "DECREMENT": {
      const { id } = action.payload;
      const decrementCarts = [...state.carts];
      const findIndexCart = decrementCarts.findIndex((item) => item.id === id);
      if (findIndexCart >= 0) {
        if (
          decrementCarts[findIndexCart].quantity &&
          decrementCarts[findIndexCart].quantity > 1
        ) {
          // decrement
          const updatedCart = { ...decrementCarts[findIndexCart] };
          if (updatedCart.quantity) {
            updatedCart.quantity--;
          }
          decrementCarts[findIndexCart] = updatedCart;
          return { ...state, carts: decrementCarts };
        } else {
          // remove from cart
          const newCarts = decrementCarts.filter((item) => item.id !== id);
          return { ...state, carts: newCarts };
        }
      }
      return state;
    }
    case "STORAGE": {
      const carts = action.payload;
      return { ...state, carts };
    }
    default:
      return state;
  }
}
