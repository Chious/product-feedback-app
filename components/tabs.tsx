"use client";
import clsx from "clsx";
import React, { ComponentProps, useState } from "react";

type TabsProps = ComponentProps<"div"> & {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Tabs({ activeTab, setActiveTab, ...props }: TabsProps) {
  return (
    <div
      className="max-sm:grid sm: grid-cols-3 bg-white border-b border-gray-dark/40 hidden"
      {...props}
    >
      <Tab
        isActive={activeTab === "Planned"}
        onClick={() => setActiveTab("Planned")}
      >
        Planned
      </Tab>
      <Tab
        isActive={activeTab === "In-Progress"}
        onClick={() => setActiveTab("In-Progress")}
        activeColor="purple"
      >
        In-Progress
      </Tab>
      <Tab
        isActive={activeTab === "Live"}
        onClick={() => setActiveTab("Live")}
        activeColor="blue"
      >
        Live
      </Tab>
    </div>
  );
}

type TabProps = ComponentProps<"button"> & {
  children: React.ReactNode;
  isActive: boolean;
  activeColor?: string;
  onClick: () => void;
};

function Tab({ children, isActive, activeColor, ...props }: TabProps) {
  return (
    <button
      {...props}
      className={clsx(
        "p-4 duration-200 border-b-4 ",
        isActive
          ? `text-black border-${activeColor ?? "orange"}`
          : "text-gray-dark/40 border-transparent"
      )}
    >
      {children}
    </button>
  );
}
