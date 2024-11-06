import React, { ReactNode } from "react";
import Header from "../Header/Header";
import CartProvider from "@/provider/CartProvider";
import { Toaster } from "react-hot-toast";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="w-full min-h-screen bg-main  px-1 lg:px-3">
        <Header />
        <main className="max-w-screen-2xl mx-auto px-4">{children}</main>
      </div>
      <Toaster />
    </CartProvider>
  );
}
