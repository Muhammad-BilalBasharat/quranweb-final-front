"use client"

import { useParams } from "next/navigation"
import QuranPageViewer from "@/components/QuranPageViewer"

export default function JuzPage() {
  const params = useParams()
  const id = params?.id

  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return <QuranPageViewer type="juz" id={id} />
}
