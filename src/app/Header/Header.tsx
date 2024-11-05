import MainLogo from "@/Components/Logo/MainLogo";
import React from "react";
import { Icon } from "@iconify/react";
import { navigation } from "@/static/data";
import Link from "next/link";
import Badge from "@/Components/Badge/Badge";
import { Button } from "@/Components/Button/Button";
export default function Header() {
  return (
    <header className="w-full sticky top-0 pt-4">
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
            <button className="border py-2 border-primary rounded-full px-6 font-semibold">
              login
            </button>
            <Badge content={1}>
              {/* <button className="size-10 rounded-full bg-main flex items-center justify-center text-primary"></button> */}
              <Button colors={"primary"}>
                <Icon icon={"solar:cart-large-4-bold-duotone"} width={24} />
              </Button>
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
