"use client"

import { useState, useEffect } from "react"
import SurahList, { SurahListSkeleton } from "./SurahList"
import JuzList, { JuzListSkeleton } from "./JuzList"
import NamazBook from "./NamazBook"
import ArabicKalma from "./ArabicKalma"
import NooraniQaida from "./NooraniQaida"

const TABS = [
  { key: "surah", label: "Surah" },
  { key: "juz", label: "Juz/Para" },
  { key: "qaida", label: "Noorani Qaida" },
  { key: "namaz", label: "Namaz" },
  { key: "kalma", label: "Islamic Kalmas" },
]

export default function LearnQuranTabs() {
  const [activeTab, setActiveTab] = useState("surah")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timeout)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-5">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-extra-dark mb-5">Learn Quran</h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-5 border-b-2 border-gray-100">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 xs:text-sm md:text-base font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.key
                  ? "border-dark bg-dark/15 text-extra-dark"
                  : "text-gray-500 border-transparent hover:text-extra-dark hover:bg-dark/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "surah" && (loading ? <SurahListSkeleton /> : <SurahList />)}
          {activeTab === "juz" && (loading ? <JuzListSkeleton /> : <JuzList />)}
          {activeTab === "qaida" && <NooraniQaida />}
          {activeTab === "namaz" && <NamazBook />}
          {activeTab === "kalma" && <ArabicKalma />}
        </div>
      </div>
    </div>
  )
}
