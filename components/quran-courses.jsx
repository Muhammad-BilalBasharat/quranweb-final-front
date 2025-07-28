import { BookOpen } from "lucide-react"

export default function QuranCourses() {
  const courses = [
    { id: 1, title: "Noorani Qaida" },
    { id: 2, title: "Quran Reading" },
    { id: 3, title: "Quran Memorization" },
    { id: 4, title: "Quran Tajweed" },
    { id: 5, title: "Islamic Studies" },
    { id: 6, title: "Quran Translation" },
  ]

  return (
    <div className="bg-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-extra-dark mb-6">Our Quran Courses</h2>
          <p className="text-slate-800 text-center">
            SmartQuranLearning has a very comprehensive curriculum that covers all the basic things necessary for
            learning Quran efficiently.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 sm:gap-6 xs:gap-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-extra-dark rounded-lg xs:p-4 sm:p-8 text-center hover:bg-dark transition-colors duration-300 cursor-pointer"
            >
              <div className="mb-4 flex justify-center">
                <BookOpen className="w-12 h-12 text-muted" />
              </div>
              <h3 className="text-white xs:text-base sm:text-xl font-semibold">{course.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
