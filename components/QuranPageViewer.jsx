"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  AlertCircle,
  Download,
  Share2,
  Copy,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"

export default function QuranPageViewer({ type, id }) {
  const [data, setData] = useState(null)
  const [pages, setPages] = useState([])
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [zoom, setZoom] = useState(100)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [imageError, setImageError] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [sharing, setSharing] = useState(false)

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000"

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [type, id])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      console.log("Fetching data for:", type, id)
      console.log("API Base URL:", API_BASE_URL)

      let response, pagesResponse
      if (type === "surah") {
        response = await axios.get(`${API_BASE_URL}/api/quran/surah/${id}`)
        pagesResponse = await axios.get(`${API_BASE_URL}/api/quran/surah/${id}/pages`)
      } else if (type === "juz") {
        response = await axios.get(`${API_BASE_URL}/api/quran/juz/${id}`)
        pagesResponse = await axios.get(`${API_BASE_URL}/api/quran/juz/${id}/pages`)
      }

      console.log("Data response:", response.data)
      console.log("Pages response:", pagesResponse.data)

      setData(response.data)
      setPages(pagesResponse.data.pages || [])
    } catch (error) {
      console.error("Error fetching data:", error)
      setError(error.response?.data?.message || error.message || "Failed to load data")
    } finally {
      setLoading(false)
    }
  }

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50))
  const handleResetZoom = () => setZoom(100)

  const goToPreviousPage = () => {
    setCurrentPageIndex((prev) => Math.max(0, prev - 1))
    setImageError(false)
  }

  const goToNextPage = () => {
    setCurrentPageIndex((prev) => Math.min(pages.length - 1, prev + 1))
    setImageError(false)
  }

  const downloadImage = async () => {
    if (!currentPage) return

    try {
      setDownloading(true)
      const imageUrl = `${API_BASE_URL}${currentPage.imageUrl}`

      // Fetch the image
      const response = await fetch(imageUrl)
      const blob = await response.blob()

      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `quran-page-${currentPage.pageNumber}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading image:", error)
      alert("Failed to download image")
    } finally {
      setDownloading(false)
    }
  }

  const shareImage = async () => {
    if (!currentPage) return

    try {
      setSharing(true)
      const imageUrl = `${API_BASE_URL}${currentPage.imageUrl}`
      const shareData = {
        title: `Quran Page ${currentPage.pageNumber}`,
        text: `${type === "surah" ? `Surah ${data.name}` : `Juz ${data.name}`} - Page ${currentPage.pageNumber}`,
        url: window.location.href,
      }

      // Check if Web Share API is supported
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert("Page URL copied to clipboard!")
      }
    } catch (error) {
      console.error("Error sharing:", error)
      // Fallback: Copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("Page URL copied to clipboard!")
      } catch (clipboardError) {
        console.error("Clipboard error:", clipboardError)
        alert("Unable to share or copy URL")
      }
    } finally {
      setSharing(false)
    }
  }

  const copyImageUrl = async () => {
    if (!currentPage) return

    try {
      const imageUrl = `${API_BASE_URL}${currentPage.imageUrl}`
      await navigator.clipboard.writeText(imageUrl)
      alert("Image URL copied to clipboard!")
    } catch (error) {
      console.error("Error copying URL:", error)
      alert("Failed to copy URL")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <div className="space-x-4">
            <button onClick={fetchData} className="px-4 py-2 bg-dark text-white rounded hover:bg-extra-dark">
              Try Again
            </button>
            <Link
              href="/learn-quran"
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 inline-block"
            >
              Back to Learn Quran
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!data || pages.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No data found</p>
          <Link href="/learn-quran" className="text-dark hover:text-extra-dark">
            Back to Learn Quran
          </Link>
        </div>
      </div>
    )
  }

  const currentPage = pages[currentPageIndex]
  const imageUrl = `${API_BASE_URL}${currentPage?.imageUrl}`

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/learn-quran" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to {type === "surah" ? "Surahs" : "Juz"}</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-dark text-white rounded text-xs flex items-center justify-center font-bold">
                {data.surahNumber || data.juzNumber}
              </div>
              <h1 className="text-lg font-semibold text-gray-800">{data.name || data.surahName}</h1>
              <span className="bg-dark/15 text-extra-dark px-2 py-1 rounded text-xs font-medium">
                {type === "surah" ? `Surah ${data.surahNumber}` : `Juz ${data.juzNumber}`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPageIndex === 0}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPageIndex + 1} of {pages.length} (Quran Page {currentPage?.pageNumber})
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPageIndex === pages.length - 1}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{zoom}%</span>
            <button onClick={handleZoomOut} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <ZoomOut className="w-4 h-4" />
            </button>
            <button onClick={handleZoomIn} className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>

            {/* Download Button */}
            <button
              onClick={downloadImage}
              disabled={downloading}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              {downloading ? "Downloading..." : "Download"}
            </button>

            {/* Share Button */}
            <button
              onClick={shareImage}
              disabled={sharing}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded disabled:opacity-50"
            >
              <Share2 className="w-4 h-4" />
              {sharing ? "Sharing..." : "Share"}
            </button>

            {/* Copy URL Button */}
            <button
              onClick={copyImageUrl}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
            >
              <Copy className="w-4 h-4" />
              Copy URL
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div
              className="overflow-auto max-h-[80vh]"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                minHeight: zoom > 100 ? `${(800 * zoom) / 100}px` : "auto",
              }}
            >
              {currentPage && (
                <div
                  className="relative flex-shrink-0"
                  style={{ transform: `scale(${zoom / 100})`, transformOrigin: "center top" }}
                >
                  {imageError ? (
                    <div className="w-[600px] h-[800px] border border-red-300 rounded flex items-center justify-center bg-red-50">
                      <div className="text-center text-red-600">
                        <AlertCircle className="w-12 h-12 mx-auto mb-2" />
                        <p className="mb-2">Failed to load image</p>
                        <p className="text-xs mb-2 break-all">{imageUrl}</p>
                        <button
                          onClick={() => setImageError(false)}
                          className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                        >
                          Retry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={`Page ${currentPage.pageNumber}`}
                      width={600}
                      height={800}
                      className="max-w-full h-auto border border-gray-300 rounded shadow-lg"
                      priority
                      onError={(e) => {
                        console.error("Image failed to load:", imageUrl)
                        setImageError(true)
                      }}
                      onLoad={() => {
                        console.log("Image loaded successfully:", imageUrl)
                      }}
                    />
                  )}
                </div>
              )}
            </div>

            {/* Image Info */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <span>Page {currentPage?.pageNumber} of 604</span>
                  <span>•</span>
                  <span>{type === "surah" ? `Surah ${data.name}` : `Juz ${data.name}`}</span>
                  <span>•</span>
                  <span>Zoom: {zoom}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {type === "surah" ? `${data.verses} verses` : `${pages.length} pages`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pages Navigation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-700">Pages in this {type === "surah" ? "Surah" : "Juz"}</h3>
              <span className="text-xs text-gray-500">
                {currentPageIndex + 1} of {pages.length}
              </span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {pages.map((page, index) => (
                <button
                  key={page.pageNumber}
                  onClick={() => {
                    setCurrentPageIndex(index)
                    setImageError(false)
                  }}
                  className={`flex-shrink-0 px-3 py-2 text-xs rounded border transition-all ${
                    index === currentPageIndex
                      ? "bg-dark text-white border-dark shadow-md"
                      : "bg-white text-gray-600 border-gray-300 hover:border-dark hover:shadow-sm"
                  }`}
                >
                  <div className="font-medium">Page {index + 1}</div>
                  <div className="text-xs opacity-75">Quran Pg {page.pageNumber}</div>
                </button>
              ))}
            </div>
            {/* Progress bar */}
            <div className="mt-3 bg-gray-200 rounded-full h-2">
              <div
                className="bg-dark h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentPageIndex + 1) / pages.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
