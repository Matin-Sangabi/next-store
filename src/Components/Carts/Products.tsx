"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { Button } from "../Button/Button";
import { formatNumber } from "@/utils/formatter";
import { ProductsDataTypes } from "@/types";
import Stars from "../Stars/Stars";
import { useCartAction } from "@/hook/useCartDispatch";
import { useCart } from "@/hook/useCart";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProductsCard({
  title,
  price,
  rating,
  category,
  image,
  id,
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
    <div className="rounded-lg bg-white shadow-sm w-full flex flex-col gap-y-4">
      <div className="w-full aspect-square flex mx-auto   justify-center border-b min-h-[180px]  lg:max-h-[210px] ">
        <div className="w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] leading-[0] pt-1 ">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            unoptimized
            quality={100}
            className="w-full h-full object-contain "
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 px-4 w-full pb-3">
        <h3 className="font-semibold text-primary text-sm truncate lg:line-clamp-2 h-7 lg:h-10">
          {title}
        </h3>
        <Stars rate={rating.rate} category={category} />
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
                size={"sm"}
                isIconOnly
                className="!text-primary"
              >
                <Icon icon={"ri:add-fill"} width={32} />
              </Button>
              <Button className="!text-primary" size={"sm"} isIconOnly>
                {inCart.quantity}
              </Button>
              <Button
                size={"sm"}
                isIconOnly
                onClick={() => decrementCartHandler(id)}
                colors={
                  inCart?.quantity && inCart?.quantity > 1
                    ? "primary"
                    : "danger"
                }
                variant={"light"}
                className="!text-primary"
              >
                {inCart.quantity && inCart?.quantity > 1 ? (
                  <Icon icon={"ic:round-minus"} width={22} />
                ) : (
                  <Icon
                    icon={"solar:trash-bin-minimalistic-bold-duotone"}
                    width={24}
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
              size={"sm"}
              className="w-full min-w-full lg:w-auto lg:min-w-fit"
            >
              {inCart ? "in Cart" : "Add To Cart"}
            </Button>
          )}

          <span className="text-primary">
            <strong>{formatNumber(price)}$</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
