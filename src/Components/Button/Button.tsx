"use client";

import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex min-w-20 items-center justify-center  gap-x-2 hover:ring-2 outline-none  focus:scale-90 transition-all ease-in-out duration-200 shadow-sm",
  {
    variants: {
      variant: {
        border: "bg-transparent border  ",
        ghost: "backdrop-blur-sm",
        default: "",
      },
      colors: {
        default: "bg-default text-primary font-semibold border-default ring-default/80",
        primary: "bg-primary text-main font-semibold border-primary ring-primary/40",
        secondary: "bg-secondary text-white font-semibold border-secondary ring-secondary",
        danger: "bg-red-600 text-white font-semibold border-red-600 ring-red-600",
        success: "bg-green-600 text-white font-semibold border-green-600 ring-green-600",
      },
      size: {
        default: "py-2 px-2 h-10",
        sm: "p-2 h-7 text-xs",
        lg: "h-12 px-8 py-3",
        md: "h-11 px-6 py-2",
      },
      radius: {
        default : "rounded-[4px]",
        sm: "rounded-md",
        lg: "rounded-xl",
        md: "rounded-lg",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full ",
        false: "",
      },
      isIconOnly: {
        true: "w-12 h-12 min-w-12 rounded-full !text-main",
        false: "",
      },
    },
    defaultVariants: {
      colors: "default",
      size: "default",
      variant: "default",
      radius: "md",
      fullWidth: false,
      isIconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof motion.button>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  fullWidth?: boolean;
  children: ReactNode;
  isIconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      href,
      variant,
      size,
      fullWidth = false,
      radius,
      isIconOnly,
      colors,
      ...props
    },
    ref
  ) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            buttonVariants({
              variant,
              colors,
              isIconOnly,
              size,
              radius,
              className,
              fullWidth,
            })
          )}
        >
          {children}
        </Link>
      );
    }
    return (
      <motion.button
        whileTap={{ scale: "0.9" ,  }}
        
        className={cn(
          buttonVariants({
            variant,
            colors,
            size,
            radius,
            isIconOnly,
            className,
            fullWidth,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export { Button, buttonVariants };
