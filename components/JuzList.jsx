"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const juzData = [
  { number: 1, name: 'Alif Lam Meem', subtitle: 'Para 1', arabic: 'الم', range: 'Al-Fatihah 1 - Al-Baqarah 141' },
  { number: 2, name: 'Sayaqool', subtitle: 'Para 2', arabic: 'سَيَقُولُ', range: 'Al-Baqarah 142 - 252' },
  { number: 3, name: 'Tilka Ar-Rusul', subtitle: 'Para 3', arabic: 'تِلْكَ الرُّسُل', range: "Al-Baqarah 253 - Ali 'Imran 92" },
  { number: 4, name: 'Lan Tana Lu', subtitle: 'Para 4', arabic: 'لَن تَنَالُوا', range: "Ali 'Imran 93 - An-Nisa 23" },
  { number: 5, name: 'Wal Muhsanat', subtitle: 'Para 5', arabic: 'وَالْمُحْصَنَات', range: 'An-Nisa 24 - 147' },
  { number: 6, name: 'La Yuhibbullah', subtitle: 'Para 6', arabic: 'لَا يُحِبُّ اللَّهُ', range: "An-Nisa 148 - Al-Ma'idah 81" },
  { number: 7, name: 'Wa Iza Samiu', subtitle: 'Para 7', arabic: 'وَإِذَا سَمِعُوا', range: "Al-Ma'idah 82 - Al-An'am 110" },
  { number: 8, name: 'Wa Lau Annana', subtitle: 'Para 8', arabic: 'وَلَوْ أَنَّنَا', range: "Al-An'am 111 - Al-A'raf 87" },
  { number: 9, name: 'Qal Al-Malaa', subtitle: 'Para 9', arabic: 'قَالَ الْمَلَأُ', range: "Al-A'raf 88 - Al-Anfal 40" },
  { number: 10, name: 'Wa Alamu', subtitle: 'Para 10', arabic: 'وَاعْلَمُوا', range: 'Al-Anfal 41 - At-Tawbah 92' },
  { number: 11, name: 'Yatazer', subtitle: 'Para 11', arabic: 'يَعْتَذِرُونَ', range: 'At-Tawbah 93 - Hud 5' },
  { number: 12, name: 'Wa Mamin Daabba', subtitle: 'Para 12', arabic: 'وَمَا مِن دَابَّة', range: 'Hud 6 - Yusuf 52' }
];

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
      <div className="flex justify-end items-center mb-6">
        <span className="text-gray-600 font-medium mr-3">SORT BY:</span>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 font-medium cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="ascending">ASCENDING</option>
            <option value="descending">DESCENDING</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {getSortedData().map((item) => (
          <div key={item.number} className="border border-gray-200 rounded-md p-2 transition-all duration-300 hover:-translate-y-1 hover:border-extra-dark cursor-pointer group">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rotate-45 bg-dark text-white rounded-sm flex items-center justify-center font-bold mr-4 group-hover:bg-extra-dark transition-colors duration-300">
                {item.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                <div className="text-gray-600 text-sm">{item.subtitle}</div>
              </div>
              <div className="text-2xl text-gray-700 font-medium" style={{ fontFamily: 'serif' }}>
                {item.arabic}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                {item.range}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
