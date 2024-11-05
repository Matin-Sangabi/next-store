"use client";
import { Button } from "@/Components/Button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function AddMore() {
  const { push } = useRouter();

  const search = useSearchParams();
  const limit = search.get("limit");

  return (
    <div className="w-full  mx-auto flex items-center justify-center">
      <Button
        className="min-w-[150px]"
        colors="primary"
        onClick={() => {
          push(`/products?limit=${limit && +limit === 10 ? "20" : "10"}`, {
            scroll: false,
          });
        }}
      >
        {limit && +limit === 20 ? "Add Less" : "Add More"}
      </Button>
    </div>
  );
}
