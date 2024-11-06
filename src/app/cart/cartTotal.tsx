"use client";

import { Button } from "@/Components/Button/Button";
import { ProductsDataTypes } from "@/types";
import { formatNumber } from "@/utils/formatter";
import React, { useMemo, useState } from "react";
import PayModal from "./PayModal";

export default function CartTotal({ carts }: { carts: ProductsDataTypes[] }) {
  const [open, setOpen] = useState<string | number | null>(null);

  const calcTotalPrices = useMemo(() => {
    if (carts.length > 0) {
      const total = carts.reduce((acc, curr) => {
        if (curr.quantity) {
          return acc + curr.price * curr.quantity;
        }
        return acc + curr.price;
      }, 0);
      return formatNumber(total);
    }
    return 0;
  }, [carts]);

  return (
    <div className="w-full  lg:max-w-xs p-2 bg-white rounded-xl shadow-sm flex flex-col gap-y-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <div className=" text-primary/70 font-semibold">Total Price : </div>
          <span className="font-bold text-lg">{calcTotalPrices} $</span>
        </div>
      </div>
      <div className="felx items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <div className=" text-primary/70 font-semibold">Discount : </div>
          <span className="font-bold text-lg">0 %</span>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between w-full">
        <div className=" text-primary/70 font-semibold">Payment : </div>
        <span className="font-bold text-lg">{calcTotalPrices} $</span>
      </div>
      <Button
        onClick={() => setOpen(calcTotalPrices)}
        colors={"primary"}
        fullWidth
      >
        Pay
      </Button>
      <PayModal open={open} onClose={() => setOpen(null)} />
    </div>
  );
}
