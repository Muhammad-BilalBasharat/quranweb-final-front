"use client"
import React from "react";

const englishJuzData = [
  { number: 1, name: 'Alif Lam Meem', subtitle: 'Juz 1', translation: 'The Opening', range: 'Al-Fatihah 1 - Al-Baqarah 141' },
  { number: 2, name: 'Sayaqool', subtitle: 'Juz 2', translation: 'He Will Say', range: 'Al-Baqarah 142 - 252' },
  // ...add more as needed
];

export default function EnglishJuzList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      {englishJuzData.map((item) => (
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
              {item.translation}
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
  );
}
