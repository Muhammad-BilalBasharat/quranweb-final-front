"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import surahData from "@/data/surah";
import Link from "next/link";

export default function SurahList() {
  const [sortBy, setSortBy] = useState("ascending");

  const getSortedData = () => {
    let data = [...surahData];
    if (sortBy === "ascending") {
      data.sort((a, b) => a.surahNumber - b.surahNumber);
    } else if (sortBy === "descending") {
      data.sort((a, b) => b.surahNumber - a.surahNumber);
    }
    return data;
  };

  return (
    <>
      {/* Sort Section */}
      <div className="flex justify-end items-center mb-6">
        <span className="text-gray-500 text-xs font-medium mr-3">SORT BY:</span>
        <div className="relative text-xs">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-white border border-gray-500 rounded px-4 py-1 pr-8 font-medium cursor-pointer hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark"
          >
            <option value="ascending">ASCENDING</option>
            <option value="descending">DESCENDING</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {getSortedData().map((item) => (
          <Link href={`/learn-quran/surah/${item.surahNumber}`} key={item.surahNumber} className="no-underline">
          <div key={item.surahNumber} className="border border-gray-200 rounded p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-extra-dark cursor-pointer group">
            <div className="flex items-center mb-3">
              <div className="relative w-8 h-8 rotate-45 bg-dark text-white rounded flex items-center justify-center font-bold mr-4 group-hover:bg-extra-dark transition-colors duration-300">
                <div className="absolute -rotate-45">
                    {item.surahNumber}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.surahName}</h3>
                <div className="text-gray-500 text-xs">{item.surahNameTranslation}</div>
              </div>
              <div className="text-gray-500 font-medium">
                {item.surahNameArabic}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">
                {item.totalAyah} Ayahs
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}
