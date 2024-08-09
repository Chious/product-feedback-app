import React from "react";
import SortButton from "../button/sort-button";
import SuggestionItem from "./suggestion-item";

export default function Dashboard() {
  return (
    <div className="h-full">
      <div className="flex flex-row items-center text-white bg-gray-blue p-2 rounded-md">
        <h3> 6 Suggestions</h3>
        <SortButton />
      </div>

      <section className="h-full flex flex-col gap-4 mt-4 overflow-scroll">
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </section>
    </div>
  );
}
