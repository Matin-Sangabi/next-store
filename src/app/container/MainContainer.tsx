import React, { ReactNode } from "react";
import Header from "../Header/Header";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-main">
      <Header />
      <main>{children}</main>
    </div>
  );
}
