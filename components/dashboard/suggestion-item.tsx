import React from "react";
import TagButton from "../button/tag-button";
import CountButton from "../button/count-button";
import { FaComment } from "react-icons/fa";
import Link from "next/link";

export default function SuggestionItem() {
  return (
    <div className="bg-white rounded-md p-4 flex gap-4 items-center justify-between">
      <CountButton />
      <div className="flex flex-col gap-2 flex-1">
        <Link href="/suggestion/1">
          <h3 className="text-gray-blue hover:text-blue duration-300">
            Add tags for solutions
          </h3>
        </Link>
        <h4 className="text-gray-dark">
          Easier to search for solutions based on a specific stack.
        </h4>
        <TagButton>UX</TagButton>
      </div>
      <Link href="/suggestion/1">
        <div className="flex gap-2 text-gray-blue items-center hover:text-blue duration-300">
          <FaComment />
          <h3>3</h3>
        </div>
      </Link>
    </div>
  );
}
