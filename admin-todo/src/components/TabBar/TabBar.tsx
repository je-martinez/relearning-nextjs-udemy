"use client";

import { useState } from "react";
import { setCookie } from "cookies-next";

interface TabBarProps {
  currentTabIndex?: number;
  items: {
    label: string;
    value: string;
  }[];
}

export const TabBar = ({ currentTabIndex = 0, items = [] }: TabBarProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(currentTabIndex);

  const handleOnTabChange = (tabIndex: number) => {
    setSelectedTabIndex(tabIndex);
    setCookie("tabIndex", tabIndex.toString(), {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    });
  };

  if (items.length === 0) {
    return null;
  }

  // Mapeo de clases de grid-cols para Tailwind (build time)
  const gridColsClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
  };

  const gridColsClass = gridColsClasses[items.length] || "";

  return (
    <div
      className={`grid w-full ${gridColsClass} space-x-2 rounded-xl bg-gray-200 p-2`}
      style={
        !gridColsClass
          ? { gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }
          : undefined
      }
    >
      {items.map((item, index) => (
        <TabBarItem
          key={item.value}
          index={index}
          onTabChange={handleOnTabChange}
          selected={index === selectedTabIndex}
          {...item}
        />
      ))}
    </div>
  );
};

const TabBarItem = ({
  label,
  selected,
  onTabChange,
  index,
}: {
  label: string;
  value: string;
  selected: boolean;
  index: number;
  onTabChange: (index: number) => void;
}) => {
  return (
    <div>
      <input
        type="radio"
        id={index.toString()}
        checked={selected}
        className="peer hidden"
        onChange={() => {}}
      />
      <label
        onClick={() => onTabChange(index)}
        className="transition-all duration-300 block cursor-pointer select-none rounded-xl p-2 text-black text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
      >
        {label}
      </label>
    </div>
  );
};
