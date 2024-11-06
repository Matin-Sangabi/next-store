"use client";
import Badge from "@/Components/Badge/Badge";
import { Button } from "@/Components/Button/Button";
import { useCart } from "@/hook/useCart";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function CartBtn() {
  const { carts } = useCart();

    console.log(carts)

  return (
    <Badge content={carts.length}>
      {/* <button className="size-10 rounded-full bg-main flex items-center justify-center text-primary"></button> */}
      <Button radius={"full"} isIconOnly colors={"primary"}>
        <Icon icon={"solar:cart-large-4-bold-duotone"} width={28} />
      </Button>
    </Badge>
  );
}
