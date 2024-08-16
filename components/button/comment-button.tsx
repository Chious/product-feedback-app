import React from "react";
import { FaComment } from "react-icons/fa";

export default function CommentButton({ count }: { count: number }) {
  return (
    <button className="flex gap-2 text-gray-blue items-center hover:text-blue duration-300">
      <FaComment />
      <h3>{count}</h3>
    </button>
  );
}
