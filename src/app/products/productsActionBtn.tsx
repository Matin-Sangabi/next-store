"use client";

import { Button } from "@/Components/Button/Button";
import { useCart } from "@/hook/useCart";
import { useCartAction } from "@/hook/useCartDispatch";
import { ProductsDataTypes } from "@/types";
import { formatNumber } from "@/utils/formatter";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useMemo } from "react";

export default function ProductsActionBtn({
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

  const addToCartHandler = (item: ProductsDataTypes) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decrementCartHandler = (id: number) => {
    dispatch({ type: "DECREMENT", payload: { id } });
  };

  return (
    <>
      <div className="flex flex-col-reverse gap-y-1 lg:flex-row items-center justify-between w-full gap-x-2 lg:mt-2">
        {inCart ? (
          <div className="flex items-center gap-x-1">
            <Button
              onClick={() =>
                addToCartHandler({
                  id,
                  title,
                  image,
                  rating,
                  category,
                  price,
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
              onClick={() => decrementCartHandler(id)}
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
        ) : (
          <Button
            onClick={() =>
              addToCartHandler({ id, title, image, rating, category, price })
            }
            radius={"default"}
            colors={"primary"}
            size={size}
            className="w-full min-w-full lg:w-auto lg:min-w-fit"
          >
            {inCart ? "in Cart" : "Add To Cart"}
          </Button>
        )}

        <span className={`text-primary ${size == "lg" ? "text-xl" : ""}`}>
          <strong>{formatNumber(price)}$</strong>
        </span>
      </div>
    </>
  );
}
