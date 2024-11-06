import MainLogo from "@/Components/Logo/MainLogo";
import React from "react";
import { navigation } from "@/static/data";
import Link from "next/link";

import CartBtn from "./Cartbtn";
export default function Header() {
  return (
    <header className="w-full sticky top-0 ">
      <div className="py-4 w-full bg-default shadow-md rounded-xl max-w-screen-2xl mx-auto px-3">
        <div className="w-full flex items-center justify-between ">
          <MainLogo href="/" alt="store-logo" />
          <ul className="flex items-center gap-x-4">
            {navigation.map((item, index) => (
              <li key={index} className="text-primary font-bold flex-auto">
                <Link className="block flex-auto" href={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-2">
            <CartBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
