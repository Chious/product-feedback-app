"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { ReactNode, useState } from "react";
import clsx from "clsx";

export default function Navbar({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed h-full w-full">
      <nav className=" flex bg-gradient-to-r to-[#E84D70] via-[#A337F6] via-53% from-[#28A7ED] text-white w-full p-4 px-8 md:hidden lg:hidden flex-row justify-between items-center">
        <div>
          <h1>Frontend Mentor</h1>
          <h3 className="text-gray">Feedback Board</h3>
        </div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hover:rotate-180 duration-500"
        >
          {isOpen ? (
            <IoCloseOutline size="2rem" />
          ) : (
            <RxHamburgerMenu size="2rem" />
          )}
        </button>
      </nav>
      <div
        className={clsx(
          "absolute z-10 w-full h-full bg-black opacity-10",
          isOpen ? "visible" : "opacity-0 invisible"
        )}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div
          className={clsx(
            "absolute z-20 h-full w-4/5 bg-white right-0 p-6 transition-all duration-500",
            isOpen ? "translate-x-0" : "translate-x-2/4"
          )}
        >
          <button className="bg-white text-black p-2 rounded-md">Login</button>
          <button className="bg-white text-black p-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
      <main className="absolute z-0 w-full h-[100vh]">{children}</main>
    </div>
  );
}
