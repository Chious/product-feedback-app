import React from "react";
import TagButton from "../button/tag-button";
import clsx from "clsx";
import Link from "next/link";

export default function Toolbar() {
  return (
    <section className=" grid grid-cols-3 gap-3 mb-5">
      <div className="p-4 rounded-md bg-gradient-to-r justify-end flex flex-col to-[#E84D70] via-[#A337F6] via-53% from-[#28A7ED]">
        <h2 className="text-white">Frontend Mentor</h2>
        <h3 className="text-gray">Feedback Board</h3>
      </div>
      <div className="flex flex-wrap gap-2 p-4 bg-white rounded-md">
        <TagButton>UI</TagButton>
        <TagButton>UX</TagButton>
        <TagButton>Enhancement</TagButton>
        <TagButton>Bug</TagButton>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-white rounded-md">
        <div className="flex justify-between">
          <h3>Roadmap</h3>
          <Link
            href="/roadmap"
            className=" hover:underline hover:text-blue duration-300"
          >
            <h3>View</h3>
          </Link>
        </div>
        <RoadmapItem title="Planned" color="orange" count={2} />
        <RoadmapItem title="In-Progress" color="blue" count={3} />
        <RoadmapItem title="Live" color="purple" count={1} />
      </div>
    </section>
  );
}

type RoadmapItemProps = {
  title: string;
  color: string;
  count: number;
};

function RoadmapItem({ title, color, count }: RoadmapItemProps) {
  return (
    <div className="flex flex-row  items-center gap-2">
      <div className={clsx("w-[8px] h-[8px] rounded-full", `bg-${color}`)} />
      <p className="flex-1">{title}</p>
      <p>{count}</p>
    </div>
  );
}
