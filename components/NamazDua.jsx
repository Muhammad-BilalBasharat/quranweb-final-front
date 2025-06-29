"use client"
import { Clock } from "lucide-react"
import Link from "next/link"

const namazDuaData = [
  {
    id: 1,
    title: "Fajr Prayer",
    arabicTitle: "صلاة الفجر",
    description: "Dawn prayer - 2 Rakats",
    category: "Namaz",
    time: "Before sunrise",
  },
  {
    id: 2,
    title: "Dhuhr Prayer",
    arabicTitle: "صلاة الظهر",
    description: "Noon prayer - 4 Rakats",
    category: "Namaz",
    time: "Midday",
  },
  {
    id: 3,
    title: "Asr Prayer",
    arabicTitle: "صلاة العصر",
    description: "Afternoon prayer - 4 Rakats",
    category: "Namaz",
    time: "Late afternoon",
  },
  {
    id: 4,
    title: "Maghrib Prayer",
    arabicTitle: "صلاة المغرب",
    description: "Sunset prayer - 3 Rakats",
    category: "Namaz",
    time: "After sunset",
  },
  {
    id: 5,
    title: "Isha Prayer",
    arabicTitle: "صلاة العشاء",
    description: "Night prayer - 4 Rakats",
    category: "Namaz",
    time: "Night",
  },
  {
    id: 6,
    title: "Morning Duas",
    arabicTitle: "أدعية الصباح",
    description: "Essential morning supplications",
    category: "Dua",
    time: "Morning",
  },
  {
    id: 7,
    title: "Evening Duas",
    arabicTitle: "أدعية المساء",
    description: "Essential evening supplications",
    category: "Dua",
    time: "Evening",
  },
  {
    id: 8,
    title: "Before Sleep Duas",
    arabicTitle: "أدعية النوم",
    description: "Supplications before sleeping",
    category: "Dua",
    time: "Before sleep",
  },
]

export default function NamazDua() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {namazDuaData.map((item) => (
        <Link href={`/learn-quran/namaz-dua/${item.id}`} key={item.id} className="no-underline">
          <div className="border border-gray-200 rounded p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-extra-dark cursor-pointer group">
            <div className="flex items-center mb-3">
              <div className="relative w-8 h-8 rotate-45 bg-dark text-white rounded flex items-center justify-center font-bold mr-4 group-hover:bg-extra-dark transition-colors duration-300">
                <div className="absolute -rotate-45">{item.category === "Namaz" ? "🕌" : "🤲"}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="text-gray-500 text-xs">{item.description}</div>
              </div>
              <div className="text-gray-500 font-medium text-sm">{item.arabicTitle}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs">{item.category}</div>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Clock className="w-3 h-3" />
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
