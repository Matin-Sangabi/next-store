"use client";

import { Button } from "@/Components/Button/Button";
import { useCart } from "@/hook/useCart";
import { useCartAction } from "@/hook/useCartDispatch";
import { ProductsDataTypes } from "@/types";
import { formatNumber } from "@/utils/formatter";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useMemo } from "react";

export default function ProductsInCartAction({
  id,
  title,
  image,
  rating,
  category,
  price,
  size = "sm",
}: ProductsDataTypes) {
  const { carts } = useCart();

  const inCart = useMemo(
    () => carts.find((item) => item.id === id),
    [carts, id]
  );

  const dispatch = useCartAction();

  const addToCartHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: ProductsDataTypes
  ) => {
    e.preventDefault();
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decrementCartHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    dispatch({ type: "DECREMENT", payload: { id } });
  };

  if (inCart)
    return (
      <div className="flex items-center gap-x-1">
        <Button
          onClick={(e) =>
            addToCartHandler(e, {
              id,
              title,
              image,
              rating,
              category,
              price: +formatNumber(price),
            })
          }
          variant={"light"}
          colors={"default"}
          size={size}
          isIconOnly
          className="!text-primary"
        >
          <Icon icon={"mdi:add"} width={22} />
        </Button>
        <Button className="!text-primary" size={size} isIconOnly>
          {inCart.quantity}
        </Button>
        <Button
          size={size}
          isIconOnly
          onClick={(e) => decrementCartHandler(e, id)}
          colors={
            inCart?.quantity && inCart?.quantity > 1 ? "primary" : "danger"
          }
          variant={"light"}
          className="!text-primary"
        >
          {inCart.quantity && inCart?.quantity > 1 ? (
            <Icon icon={"ic:round-minus"} width={22} />
          ) : (
            <Icon
              icon={"solar:trash-bin-minimalistic-bold-duotone"}
              width={22}
            />
          )}
        </Button>
      </div>
    );
}
