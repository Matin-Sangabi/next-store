import Image from "next/image";
import React from "react";

export default function ProductImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <Image
      src={image}
      alt={title}
      width={500}
      height={500}
      unoptimized
      quality={100}
      className="w-full h-full object-contain rounded-lg "
    />
  );
}
