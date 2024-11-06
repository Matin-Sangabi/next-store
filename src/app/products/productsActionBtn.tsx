"use client";

import { Button } from "@/Components/Button/Button";
import { useCart } from "@/hook/useCart";
import { useCartAction } from "@/hook/useCartDispatch";
import { ProductsDataTypes } from "@/types";
import { formatNumber } from "@/utils/formatter";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useMemo } from "react";
import ProductsInCartAction from "./productsInCartAction";

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
    () => carts.some((item) => item.id === id),
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

  return (
    <>
      <div className="flex flex-col-reverse gap-y-1 lg:flex-row items-center justify-between w-full gap-x-2 lg:mt-2">
        {inCart ? (
          <ProductsInCartAction
            id={id}
            category={category}
            image={image}
            price={price}
            rating={rating}
            title={title}
            size={size}
          />
        ) : (
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
