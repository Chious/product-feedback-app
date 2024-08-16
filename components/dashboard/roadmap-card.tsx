import React from "react";
import TagButton from "../button/tag-button";
import CountButton from "../button/count-button";
import CommentButton from "../button/comment-button";

export default function RoadmapCard() {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-3 border-t-8 border-orange">
      <p className="body-2 before:content-['\2219'] before:mr-4 before:text-orange text-gray-dark">
        Planned
      </p>
      <h4>More comprehensive reports</h4>
      <p className="body-2 text-gray-dark">
        It would be great to see a more detailed breakdown of solutions.
      </p>
      <div className="flex flex-wrap gap-2">
        <TagButton>Feature</TagButton>
        <TagButton>Feature</TagButton>
        <TagButton>Feature</TagButton>
      </div>
      <div className="flex justify-between">
        <CountButton />
        <CommentButton count={10} />
      </div>
    </div>
  );
}
