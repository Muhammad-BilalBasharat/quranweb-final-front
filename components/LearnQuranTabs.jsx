"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SurahList from "./SurahList";
import JuzList from "./JuzList";
import NooraniQaidaList from "./NooraniQaidaList";
import EnglishJuzList from "./EnglishJuzList";

const TABS = [
  { key: "surah", label: "Surah" },
  { key: "juz", label: "Juz/Para" },
  { key: "qaida", label: "Noorani Qaida" },
  { key: "english-juz", label: "English Translation Juz/Para" },
];

export default function LearnQuranTabs() {
  const [activeTab, setActiveTab] = useState("surah");

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-5">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">Islamic Study Center</h1>
          <p className="text-gray-600">Comprehensive Islamic Learning Platform</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b-2 border-gray-100">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-4 text-lg font-medium transition-all duration-300 border-b-3 ${
                activeTab === tab.key
                  ? "text-gray-900 border-blue-400 bg-blue-50"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "surah" && <SurahList />}
          {activeTab === "juz" && <JuzList />}
          {activeTab === "qaida" && <NooraniQaidaList />}
          {activeTab === "english-juz" && <EnglishJuzList />}
        </div>
      </div>
    </div>
  );
}
