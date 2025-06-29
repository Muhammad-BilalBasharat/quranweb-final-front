"use client"

import { useState, useEffect } from "react"
import { ChevronDown, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import axios from "axios"

export function SurahListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="border border-gray-200 rounded p-2.5">
          <div className="flex items-center mb-3">
            <Skeleton className="w-8 h-8 mr-4 rounded" />
            <div className="flex-1">
              <Skeleton className="h-5 w-2/3 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="w-10 h-6" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-1/3 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function SurahList() {
  const [sortBy, setSortBy] = useState("ascending")
  const [surahs, setSurahs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000"

  useEffect(() => {
    fetchSurahs()
  }, [])

  const fetchSurahs = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log("Fetching surahs from:", `${API_BASE_URL}/api/quran/surahs`)

      const response = await axios.get(`${API_BASE_URL}/api/quran/surahs`)
      console.log("Surahs response:", response.data)

      if (response.data && response.data.surahs) {
        setSurahs(response.data.surahs)
      } else {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Error fetching surahs:", error)
      setError(error.response?.data?.message || error.message || "Failed to load surahs")
    } finally {
      setLoading(false)
    }
  }

  const getSortedData = () => {
    const data = [...surahs]
    if (sortBy === "ascending") {
      data.sort((a, b) => a.surahNumber - b.surahNumber)
    } else if (sortBy === "descending") {
      data.sort((a, b) => b.surahNumber - a.surahNumber)
    }
    return data
  }

  if (loading) return <SurahListSkeleton />

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Surahs</h3>
        <p className="text-gray-600 mb-4 text-center max-w-md">{error}</p>
        <button
          onClick={fetchSurahs}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (surahs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-gray-600">No surahs found</p>
      </div>
    )
  }

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
            <div className="border border-gray-200 rounded p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 cursor-pointer group">
              <div className="flex items-center mb-3">
                <div className="relative w-8 h-8 rotate-45 bg-green-500 text-white rounded flex items-center justify-center font-bold mr-4 group-hover:bg-green-600 transition-colors duration-300">
                  <div className="absolute -rotate-45">{item.surahNumber}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <div className="text-gray-500 text-xs">{item.verses} verses</div>
                </div>
                <div className="text-gray-500 font-medium text-right">{item.arabicName}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">{item.verses} Ayahs</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
