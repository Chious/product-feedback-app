"use client";
import React, { ComponentProps, useState, FC } from "react";
import clsx from "clsx";

export type TagButtonProps = ComponentProps<"button"> & {
  className?: string;
  disabled?: boolean;
  props: any;
};

const TagButton: FC<any> = ({ className, disabled, ...props }) => {
  const [isSelected, setIsSelected] = useState(false);
  const classes = clsx(
    " h-fit p-2 rounded-md hover:bg-blue/50 hover:text-white transition-all duration-200 w-fit",
    isSelected ? "bg-blue text-white" : "bg-gray text-blue"
  );

  return (
    <button
      {...props}
      className={classes}
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    >
      <h4>{props.children}</h4>
    </button>
  );
};

export default TagButton;
