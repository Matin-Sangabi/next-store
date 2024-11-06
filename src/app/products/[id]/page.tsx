import Stars from "@/Components/Stars/Stars";
import { ProductsDataTypes } from "@/types";
import Image from "next/image";
import React from "react";
import ProductsActionBtn from "../productsActionBtn";
import ProductImage from "@/Components/Image/ProductImage";
import { Metadata, ResolvingMetadata } from "next";

async function getProductsById(id: string) {
  // ssr request
  const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  return data.json();
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  const product = await getProductsById(id);

  return {
    title: product.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: ProductsDataTypes = await getProductsById(id);
  return (
    <div className="w-full my-10 ">
      <div className="grid grid-cols-1  lg:grid-cols-2  gap-x-4">
        <div className="w-full flex items-center justify-center  ">
          <div className="border p-2 border-secondary rounded-xl w-full flex mx-auto items-center justify-center h-[550px] ">
            <ProductImage image={product.image} title={product.title} />
          </div>
        </div>
        <div className="flex flex-col pt-4 w-full gap-y-4 max-w-lg mx-auto items-center">
          <h1 className="text-2xl font-semibold text-primary">
            {product.title}
          </h1>
          <div className="max-w-lg mx-auto w-full">
            <Stars rate={product.rating.rate} category={product.category} />
          </div>
          <h4 className="text-primary/80 font-semibold  text-center">
            {product.description}
          </h4>
          <ProductsActionBtn size="lg" {...product} />
        </div>
      </div>
    </div>
  );
}
