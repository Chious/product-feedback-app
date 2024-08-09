"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function CountButton() {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const classes = clsx(
    "p-2 rounded-md hover:bg-blue/50 transition-all duration-200 h-fit",
    isActive ? "bg-blue text-white hover:text-black" : "text-black bg-gray"
  );

  return (
    <button
      className={classes}
      onClick={() => {
        setIsActive(true);
        setCount(count + 1);
      }}
    >
      <FaAngleUp color={isActive ? "white" : "blue"} />
      {count}
    </button>
  );
}
