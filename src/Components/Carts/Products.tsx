import Image from "next/image";
import React from "react";
import { ProductsDataTypes } from "@/types";
import Stars from "../Stars/Stars";

import ProductsActionBtn from "@/app/products/productsActionBtn";

export default function ProductsCard({
  title,
  price,
  rating,
  category,
  image,
  id,
}: ProductsDataTypes) {
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
        <ProductsActionBtn
          id={id}
          price={price}
          category={category}
          image={image}
          rating={rating}
          title={title}
        />
      </div>
    </div>
  );
}
