import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  content?: number;
}

export default function Badge({ children, content }: BadgeProps) {
  return (
    <div className="relative inline-flex flex-shrink-0">
      {children}
      {content && content > 0 ? (
        <span className="flex items-center justify-center text-[11px] font-bold text-white rounded-full size-5 bg-red-600 absolute -right-2 -top-1 border-2 border-primary">
          {content}
        </span>
      ) : null}
    </div>
  );
}
