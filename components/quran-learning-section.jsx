import Image from "next/image"
import Link from "next/link"

export default function QuranLearningSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-extra-dark mb-8">
            Learn Quran Online in Interactive Way.
          </h1>
          <div className="w-24 h-1 bg-slate-700 mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Read Quran Online */}
          <div className="text-center">
            {/* Book Icon */}
            <Image
              src="/Read-Quran-Online-with-Translation.png"
              alt="Read Quran Online"
              className="w-64 h-64 mx-auto mb-8 object-contain"
              width={128}
              height={128}
            />

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Read Quran Online with Translation
            </h2>

            <p className="text-slate-700 leading-relaxed mb-8 max-w-md mx-auto">
              As being a muslim we all need to read quran everyday, but there are
              times when you want to read quran but don't have the holy quran near
              you. Don't worry eQuranAcadey providers you with high resolution
              Quran images of the Holy Quran with sharp details and color for an
              immersive quran reading experience.
            </p>

            <Link
              href={"#"}
              size="lg"
              className="bg-extra-dark text-white px-8 py-3 text-lg rounded-lg"
            >
              Read Quran Online
            </Link>
          </div>

          {/* Right Section - Video Lessons */}
          <div className="text-center">
            {/* Video Icon */}
            <Image
              src="/Quran-Video-Lesson-Online.png"
              alt="Quran Video Lessons"
              className="w-64 h-64 mx-auto mb-8 object-contain"
              width={128}
              height={128}
            />
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Easy Quran Video Lessons for Beginners
            </h2>

            <p className="text-slate-700 leading-relaxed mb-8 max-w-md mx-auto">
              To learn any language you need to learn its Alphabets and Words
              Pronunciation, So Learn to Read Quran with Pronunciation with
              Detailed Video Lessons By Qualified Quran Teachers to Learn Quran
              with Tajweed and Proper Pronunciation. Easy Quran Lessons that are
              made keeping in mind the needs of kids and beginners.
            </p>

            <Link
              href={"#"}
              size="lg"
              className="bg-extra-dark text-white px-8 py-3 text-lg rounded-lg"
            >
              Quran Video Lessons
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
