import React from "react";
import SortButton from "../button/sort-button";
import SuggestionItem from "./suggestion-item";
import Toolbar from "./tool-bar";
import Image from "next/image";
import blub from "@/public/shared/icon-bulb.svg";
import Button from "../button/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex flex-row items-center text-white bg-gray-blue p-2 rounded-md gap-4">
        <Image src={blub} alt="blub" />
        <h3>6 Suggestions</h3>
        <SortButton className=" flex-1" />
        <Link href="/edit">
          <Button variant="purple">+ Add Feedback</Button>
        </Link>
      </div>

      <section className="h-full flex flex-col gap-4 mt-4 ">
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </section>
    </div>
  );
}
