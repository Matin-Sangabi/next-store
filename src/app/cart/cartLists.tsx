"use client";

import ProductImage from "@/Components/Image/ProductImage";
import Stars from "@/Components/Stars/Stars";
import { formatNumber } from "@/utils/formatter";
import React, { useCallback } from "react";
import ProductsInCartAction from "../products/productsInCartAction";
import { useCartAction } from "@/hook/useCartDispatch";
import { ProductsDataTypes } from "@/types";

export default function CartLists({ carts }: { carts: ProductsDataTypes[] }) {
  const dispatch = useCartAction();

  const removeCartHandler = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const calcItemPrice = useCallback(
    (price: number, quality: number | undefined) => {
      let prices = 0;
      if (quality) {
        prices = price * quality;
      } else {
        prices = price;
      }
      return formatNumber(prices);
    },
    []
  );

  return (
    <div className="flex flex-col gap-y-2 w-full">
      {carts.map((item) => (
        <div
          key={item.id}
          className="w-full p-4 bg-white rounded-xl shadow-sm flex items-center justify-between flex-col lg:flex-row gap-y-4"
        >
          <div className="flex items-start gap-x-4">
            <div className="w-[100px] h-[100px] p-3 flex items-center justify-center">
              <ProductImage image={item.image} title={item.title} />
            </div>
            <div className="flex flex-col gap-y-2 pt-3">
              <span className="text-base font-semibold">{item.title}</span>
              <div className="max-w-[150px] w-full">
                <Stars rate={item.rating.rate} category={item.category} />
              </div>
              <strong>{formatNumber(item.price)}$</strong>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <ProductsInCartAction {...item} />
            <strong className="text-sm text-center hidden lg:block">
              {calcItemPrice(item.price, item.quantity)}$
            </strong>
            <div
              onClick={() => removeCartHandler(item.id)}
              className="mt-4 text-[10px] text-red-600/80 text-center cursor-pointer underline underline-offset-4 "
            >
              Remove From Cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
