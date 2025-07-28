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

      let response, pagesResponse

      if (type === "surah") {
        response = await axios.get(`${API_BASE_URL}/api/quran/surah/${id}`)
        pagesResponse = await axios.get(`${API_BASE_URL}/api/quran/surah/${id}/pages`)
      } else if (type === "juz") {
        response = await axios.get(`${API_BASE_URL}/api/quran/juz/${id}`)
        pagesResponse = await axios.get(`${API_BASE_URL}/api/quran/juz/${id}/pages`)
      }

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
          <div className="animate-spin rounded-full xs:h-8 xs:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border-b-2 border-dark mx-auto mb-4"></div>
          <p className="text-gray-600 xs:text-sm sm:text-base">Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center xs:p-4 sm:p-6">
        <div className="text-center">
          <AlertCircle className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500 mb-4 mx-auto" />
          <h3 className="xs:text-base sm:text-lg font-semibold text-gray-900 mb-2">Failed to Load</h3>
          <p className="text-red-600 mb-4 xs:text-sm sm:text-base xs:px-2">{error}</p>
          <div className="xs:space-y-2 sm:space-y-0 sm:space-x-4 xs:flex xs:flex-col sm:flex sm:flex-row xs:items-center">
            <button
              onClick={fetchData}
              className="xs:w-full sm:w-auto px-4 py-2 bg-dark text-white rounded hover:bg-extra-dark xs:text-sm sm:text-base"
            >
              Try Again
            </button>
            <Link
              href="/learn-quran"
              className="xs:w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 inline-block xs:text-sm sm:text-base text-center"
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
          <p className="text-gray-600 mb-4 xs:text-sm sm:text-base">No data found</p>
          <Link href="/learn-quran" className="text-dark hover:text-extra-dark xs:text-sm sm:text-base">
            Back to Learn Quran
          </Link>
        </div>
      </div>
    )
  }

  const currentPage = pages[currentPageIndex]
  const imageUrl = `${API_BASE_URL}${currentPage?.imageUrl}`

  return (
    <div className="min-h-screen bg-gray-50 xs:mt-2 sm:mt-3 md:mt-10">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 xs:px-2 sm:px-4 xs:py-2 sm:py-3">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Header Layout */}
          <div className="xs:block md:hidden">
            <div className="flex items-center justify-between mb-2">
              <Link href="/learn-quran" className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                <ArrowLeft className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                <span className="xs:text-xs sm:text-sm">Back</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-dark text-white rounded xs:text-xs sm:text-xs flex items-center justify-center font-bold">
                {data.surahNumber || data.juzNumber}
              </div>
              <h1 className="xs:text-sm sm:text-base font-semibold text-gray-800 truncate flex-1">
                {data.name || data.surahName}
              </h1>
              <span className="bg-dark/15 text-extra-dark xs:px-1 xs:py-0.5 sm:px-2 sm:py-1 rounded xs:text-xs sm:text-xs font-medium whitespace-nowrap">
                {type === "surah" ? `Surah ${data.surahNumber}` : `Juz ${data.juzNumber}`}
              </span>
            </div>
          </div>

          {/* Desktop Header Layout */}
          <div className="xs:hidden md:flex items-center justify-between">
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
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-200 xs:px-2 sm:px-4 xs:py-1 sm:py-2">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Controls Layout */}
          <div className="xs:block lg:hidden">
            {/* Navigation Row */}
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={goToPreviousPage}
                disabled={currentPageIndex === 0}
                className="flex items-center gap-1 xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:text-xs sm:text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                <span className="xs:hidden sm:inline">Previous</span>
              </button>

              <span className="xs:text-xs sm:text-sm text-gray-600 text-center flex-1 mx-2">
                <div>
                  Page {currentPageIndex + 1} of {pages.length}
                </div>
                <div className="xs:text-xs text-gray-500">Quran Page {currentPage?.pageNumber}</div>
              </span>

              <button
                onClick={goToNextPage}
                disabled={currentPageIndex === pages.length - 1}
                className="flex items-center gap-1 xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:text-xs sm:text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="xs:hidden sm:inline">Next</span>
                <ChevronRight className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between">
              {/* Zoom Controls */}
              <div className="flex items-center gap-1">
                <span className="xs:text-xs sm:text-sm text-gray-600">{zoom}%</span>
                <button
                  onClick={handleZoomOut}
                  className="xs:p-1 sm:p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
                >
                  <ZoomOut className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="xs:p-1 sm:p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
                >
                  <ZoomIn className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="xs:p-1 sm:p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
                >
                  <RotateCcw className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={downloadImage}
                  disabled={downloading}
                  className="flex items-center gap-1 xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:text-xs sm:text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded disabled:opacity-50"
                >
                  <Download className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                  <span className="xs:hidden sm:inline">{downloading ? "..." : "Download"}</span>
                </button>
                <button
                  onClick={shareImage}
                  disabled={sharing}
                  className="flex items-center gap-1 xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:text-xs sm:text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded disabled:opacity-50"
                >
                  <Share2 className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                  <span className="xs:hidden sm:inline">{sharing ? "..." : "Share"}</span>
                </button>
                <button
                  onClick={copyImageUrl}
                  className="flex items-center gap-1 xs:px-2 xs:py-1 sm:px-3 sm:py-1 xs:text-xs sm:text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
                >
                  <Copy className="xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                  <span className="xs:hidden sm:inline">Copy</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Controls Layout */}
          <div className="xs:hidden lg:flex items-center justify-between">
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
              <button
                onClick={handleZoomOut}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded"
              >
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
      </div>

      {/* Main Content */}
      <div className="flex-1 xs:p-1 sm:p-2 md:p-4">
        <div className="xs:max-w-full sm:max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 xs:p-3 sm:p-4 md:p-6 xs:mb-4 sm:mb-5 md:mb-6">
            <div
              className="overflow-auto xs:max-h-[85vh] sm:max-h-[80vh] md:max-h-[80vh]"
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
                    <div className="xs:w-[320px] xs:h-[427px] sm:w-[450px] sm:h-[600px] md:w-[600px] md:h-[800px] border border-red-300 rounded flex items-center justify-center bg-red-50">
                      <div className="text-center text-red-600 xs:p-2 sm:p-4">
                        <AlertCircle className="xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mx-auto mb-2" />
                        <p className="xs:text-xs sm:text-sm mb-2">Failed to load image</p>
                        <p className="xs:text-xs text-xs mb-2 break-all px-2">{imageUrl}</p>
                        <button
                          onClick={() => setImageError(false)}
                          className="xs:px-2 xs:py-1 sm:px-3 sm:py-1 bg-red-500 text-white rounded xs:text-xs sm:text-xs hover:bg-red-600"
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
                      className="xs:w-[320px] xs:h-auto sm:w-[450px] sm:h-auto md:w-[600px] md:h-auto border border-gray-300 rounded shadow-lg"
                      priority
                      onError={(e) => {
                        console.error("Image failed to load:", imageUrl)
                        setImageError(true)
                      }}
                      onLoad={() => {
                        // console.log("Image loaded successfully:", imageUrl)
                      }}
                    />
                  )}
                </div>
              )}
            </div>
            {/* Image Info */}
            <div className="xs:mt-3 sm:mt-4 xs:pt-3 sm:pt-4 border-t border-gray-200">
              <div className="xs:block sm:flex items-center justify-between xs:text-xs sm:text-sm text-gray-600 xs:space-y-2 sm:space-y-0">
                <div className="flex items-center xs:gap-2 sm:gap-4 xs:flex-wrap sm:flex-nowrap">
                  <span>Page {currentPage?.pageNumber} of 604</span>
                  <span className="xs:hidden sm:inline">•</span>
                  <span className="xs:block sm:inline">
                    {type === "surah" ? `Surah ${data.name}` : `Juz ${data.name}`}
                  </span>
                  <span className="xs:hidden sm:inline">•</span>
                  <span className="xs:block sm:inline">Zoom: {zoom}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="xs:text-xs text-xs bg-gray-100 xs:px-1 xs:py-0.5 sm:px-2 sm:py-1 rounded">
                    {type === "surah" ? `${data.verses} verses` : `${pages.length} pages`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Pages Navigation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 xs:p-3 sm:p-4">
            <div className="flex items-center justify-between xs:mb-2 sm:mb-3">
              <h3 className="xs:text-xs sm:text-sm font-medium text-gray-700">
                Pages in this {type === "surah" ? "Surah" : "Juz"}
              </h3>
              <span className="xs:text-xs text-xs text-gray-500">
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
                  className={`flex-shrink-0 xs:px-2 xs:py-1.5 sm:px-3 sm:py-2 xs:text-xs sm:text-xs rounded border transition-all xs:min-w-[60px] sm:min-w-[80px] ${
                    index === currentPageIndex
                      ? "bg-dark text-white border-dark shadow-md"
                      : "bg-white text-gray-600 border-gray-300 hover:border-dark hover:shadow-sm"
                  }`}
                >
                  <div className="font-medium">Page {index + 1}</div>
                  <div className="xs:text-xs text-xs opacity-75">Quran Pg {page.pageNumber}</div>
                </button>
              ))}
            </div>
            {/* Progress bar */}
            <div className="xs:mt-2 sm:mt-3 bg-gray-200 rounded-full xs:h-1.5 sm:h-2">
              <div
                className="bg-dark xs:h-1.5 sm:h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentPageIndex + 1) / pages.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
