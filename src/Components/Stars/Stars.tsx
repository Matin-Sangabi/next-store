import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface StarsProps {
  category?: string;
  rate: number | string;
}

export default function Stars({ category, rate }: StarsProps) {
  return (
    <div className="flex items-center justify-between w-full">
      {Boolean(category) && (
        <span className="text-xs text-secondary font-semibold">{category}</span>
      )}
      <span className="flex font-bold text-secondary items-center  text-xs">
        {rate}
        <Icon
          icon={"solar:star-bold"}
          className="text-yellow-500 "
          width={18}
        />
      </span>
    </div>
  );
}
