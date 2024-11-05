import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MainLogoProps {
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  href?: string;
}

export default function MainLogo({
  alt,
  width = 50,
  height = 50,
  className,
  href,
}: MainLogoProps) {
  if (href) {
    return (
      <Link href={href}>
        <Image
          src={"/images/logo/7542461.png"}
          alt={alt}
          width={width}
          height={height}
          className={className}
          unoptimized
          quality={100}
        />
      </Link>
    );
  }
  return (
    <Image
      src={"/images/logo/7542461.png"}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
