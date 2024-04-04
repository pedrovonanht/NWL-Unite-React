import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}
export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "border border-white/10 rounded-md px-1.5 size-7 flex items-center",
        transparent ? "bg-black/20" : "bg-white/10",
        props.disabled ? " opacity-50 border-none" : null
      )}
    ></button>
  );
}
