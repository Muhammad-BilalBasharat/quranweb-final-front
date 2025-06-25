"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import juzData from "@/data/juz.json";


export default function JuzList() {
  const [sortBy, setSortBy] = useState("ascending");

  const getSortedData = () => {
    let data = [...juzData];
    if (sortBy === "ascending") {
      data.sort((a, b) => a.number - b.number);
    } else if (sortBy === "descending") {
      data.sort((a, b) => b.number - a.number);
    }
    return data;
  };

  return (
    <>
      {/* Sort Section */}
      <div className="flex items-center justify-end mb-6">
        <span className="mr-3 text-xs font-medium text-gray-500">SORT BY:</span>
        <div className="relative text-xs">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-1 pr-8 font-medium bg-white border border-gray-500 rounded appearance-none cursor-pointer hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark"
          >
            <option value="ascending">ASCENDING</option>
            <option value="descending">DESCENDING</option>
          </select>
          <ChevronDown className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 pointer-events-none right-2 top-1/2" />
        </div>
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        {getSortedData().map((item) => (
          <Link
            key={item.number}
            href={`/learn-quran/juz/${item.number}`}
            className="block p-3 transition-all duration-300 border border-gray-200 rounded-sm cursor-pointer hover:-translate-y-1 hover:border-extra-dark group"
          >
            <div className="flex items-center">
              <div className="relative flex items-center justify-center w-8 h-8 mr-4 font-bold text-white transition-colors duration-300 rotate-45 rounded bg-dark group-hover:bg-extra-dark">
                <div className="absolute -rotate-45">
                    {item.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <div className="text-xs text-gray-600">{item.range}</div>
              </div>
              <div className="text-xl font-medium text-gray-700">
                {item.arabic}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}