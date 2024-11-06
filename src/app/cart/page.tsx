"use client";

import React from "react";
import CartLists from "./cartLists";
import CartTotal from "./cartTotal";
import { useCart } from "@/hook/useCart";
import { Button } from "@/Components/Button/Button";



export default function Page() {
  const { carts } = useCart();

  if (carts.length === 0) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center flex-col gap-y-2">
        <h3 className="text-3xl font-bold text-primary">{`Your Cart's Empty`}</h3>
        <Button href="/products">Back To Shop</Button>
      </div>
    );
  }

  return (
    <div className="my-10 w-full">
      <div className="w-full flex flex-col gap-y-4 lg:flex-row items-start gap-x-4">
        <div className="grow w-full flex flex-col gap-y-2 p-2 ">
          <CartLists carts={carts} />
        </div>
        <CartTotal carts={carts} />
      </div>
    </div>
  );
}
