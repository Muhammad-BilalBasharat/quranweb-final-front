"use client"
import { useRef, useEffect } from "react"
import { Megaphone } from "lucide-react"

export default function NewsTicker() {
  const newsText =
    "Don't miss out on this incredible opportunity! Join thousands of satisfied customers who have already transformed their lives. Limited time offer - Act now before it's too late!"

  const tickerRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (tickerRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      if (tickerRef.current.offsetWidth < containerWidth) {
        tickerRef.current.style.minWidth = containerWidth + "px"
      }
    }
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
      <div className="flex items-center h-16">
        {/* News Label Section */}
        <div className="flex items-center gap-2 bg-blue-700 px-6 h-full flex-shrink-0">
          <Megaphone className="w-5 h-5 text-white" />
          <span className="text-white font-bold text-lg tracking-wide">NEWS</span>
        </div>

        {/* Scrolling Text Container */}
        <div
          className="flex-1 overflow-hidden bg-white h-16 relative"
          ref={containerRef}
          style={{ minWidth: 0 }}
        >
          <div className="scrolling-text" ref={tickerRef}>
            <span>
              {newsText} • {newsText} • {newsText} • {newsText} •
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          will-change: transform;
          animation: scroll-left 30s linear infinite;
          height: 100%;
        }

        .scrolling-text span {
          font-size: 1.125rem;
          font-weight: 500;
          color: #1e293b;
          padding: 0 2rem;
          line-height: 4rem;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}



