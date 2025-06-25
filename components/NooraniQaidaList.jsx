"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const qaidaData = [
  { number: 1, name: 'Arabic Alphabet', subtitle: 'Basic Letters', arabic: 'أ ب ت ث', info: '28 Letters' },
  { number: 2, name: 'Letter Forms', subtitle: 'Beginning, Middle, End', arabic: 'ـبـ بـ ب', info: 'Letter Connections' },
  { number: 3, name: 'Short Vowels', subtitle: 'Fatha, Kasra, Damma', arabic: 'بَ بِ بُ', info: '3 Vowel Marks' },
  { number: 4, name: 'Long Vowels', subtitle: 'Alif, Waw, Ya', arabic: 'بَا بُو بِي', info: 'Extended Sounds' },
  { number: 5, name: 'Sukoon & Tanween', subtitle: 'Silent Letters & Nunation', arabic: 'بْ بً بٍ بٌ', info: 'Special Marks' },
  { number: 6, name: 'Madd Rules', subtitle: 'Elongation Rules', arabic: 'مَآ مُوٓ مِيٓ', info: 'Stretching Sounds' },
  { number: 7, name: 'Waqf Rules', subtitle: 'Stopping Rules', arabic: 'قف صلي لا', info: 'Pause Marks' },
  { number: 8, name: 'Qalqalah', subtitle: 'Echoing Letters', arabic: 'ق ط ب ج د', info: 'Bouncing Sounds' },
  { number: 9, name: 'Noon Sakinah', subtitle: 'Rules of Noon', arabic: 'نْ مْ', info: 'Noon & Meem Rules' },
  { number: 10, name: 'Lam Rules', subtitle: 'Sun & Moon Letters', arabic: 'اللَّه الرَّحْمَن', info: 'Article Rules' },
  { number: 11, name: 'Ra Rules', subtitle: 'Thick & Thin Ra', arabic: 'رَ رِ', info: 'Ra Pronunciation' },
  { number: 12, name: 'Practice Reading', subtitle: 'Complete Verses', arabic: 'قُلْ هُوَ اللَّهُ أَحَد', info: 'Applied Learning' }
];

export default function NooraniQaidaList() {
  const [sortBy, setSortBy] = useState("lesson-order");

  // No sorting logic for now, but you can add if needed

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
            <option value="lesson-order">LESSON ORDER</option>
            <option value="difficulty">DIFFICULTY</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {qaidaData.map((item) => (
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
                {item.info}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
