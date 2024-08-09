import clsx from "clsx";
import React from "react";
import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  variant: "purple" | "blue" | "black" | "red";
  className: string;
  disabled?: boolean;
};

export default function Button({ variant, disabled, ...props }: ButtonProps) {
  let buttonClass = clsx(
    "p-4 text-white rounded-md transition-all duration-200",
    variant === "purple" && "bg-purple hover:opacity-50",
    variant === "blue" && "bg-blue hover:opacity-50",
    variant === "black" && "bg-black hover:opacity-50",
    variant === "red" && "bg-orange hover:opacity-50",
    disabled && "opacity-50 cursor-not-allowed"
  );

  return <button {...props} className={buttonClass} />;
}
