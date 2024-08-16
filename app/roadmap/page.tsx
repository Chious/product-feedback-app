"use client";

import Button from "@/components/button/button";
import RoadmapCard from "@/components/dashboard/roadmap-card";
import Tabs from "@/components/tabs";
import React from "react";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Planned");

  return (
    <main className="p-0 md:p-4 lg:p-4 h-screen overflow-scroll">
      <nav>
        <div className="p-4 bg-gray-blue text-white md:rounded-md lg:rounded-md flex justify-between items-center">
          <Link href="/">
            <div className="flex flex-col gap-2">
              <h2 className="before:content-['\003C'] before:mr-2 before:text-gray-dark cursor-pointer hover:text-gray-dark duration-300">
                Go Back
              </h2>
              <h1>Roadmap</h1>
            </div>
          </Link>
          <Link href="/edit">
            <Button variant="purple" disabled={false}>
              + Add Feedback
            </Button>
          </Link>
        </div>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </nav>

      <section className="grid grid-cols-3 max-sm:grid-cols-1 p-4 gap-4">
        <div
          className={clsx(
            "flex flex-col gap-2",
            activeTab !== "Planned" && "max-sm:hidden"
          )}
        >
          <h3>Planned</h3>
          <p>Ideas prioritized for research</p>
          <RoadmapCard />
          <RoadmapCard />
        </div>

        <div
          className={clsx(
            "flex flex-col gap-2",
            activeTab !== "In-Progress" && "max-sm:hidden"
          )}
        >
          <h3>In-Progress</h3>
          <p>Currently being developed</p>
          <RoadmapCard />
          <RoadmapCard />
          <RoadmapCard />
        </div>

        <div
          className={clsx(
            "flex flex-col gap-2",
            activeTab !== "Live" && "max-sm:hidden"
          )}
        >
          <h3>Live</h3>
          <p>Released features</p>
          <RoadmapCard />
          <RoadmapCard />
        </div>
      </section>
    </main>
  );
}
