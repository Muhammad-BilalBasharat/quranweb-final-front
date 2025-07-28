import Image from "next/image"
import AlQuran from "@/public/alquran.png"

export default function Banner() {
  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-primary to-dark xs:h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] xs:top-6 sm:top-8 md:top-10">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Bismillah at top */}
      <div className="absolute xs:top-4 sm:top-6 md:top-8 lg:top-10 left-1/2 transform -translate-x-1/2 z-20">
        <h2 className="text-white xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-center tracking-wide drop-shadow-lg">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex xs:flex-col sm:flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto xs:px-4 sm:px-6 md:px-8 lg:px-12 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-12 xs:mt-12 sm:mt-16 md:mt-20">
        {/* Image Section */}
        <div className="xs:flex-none sm:flex-none md:flex-1 flex justify-center xs:order-2 sm:order-2 md:order-1">
          <div className="relative xs:w-[45vw] xs:h-[35vh] xs:max-w-[200px] xs:max-h-[200px] sm:w-[40vw] sm:h-[30vh] sm:max-w-[250px] sm:max-h-[250px] md:w-[35vw] md:h-[40vh] md:max-w-[300px] md:max-h-[300px] lg:w-[30vw] lg:h-[45vh] lg:max-w-[350px] lg:max-h-[350px] xl:w-[25vw] xl:h-[50vh] xl:max-w-[400px] xl:max-h-[400px]">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
            <Image
              src={AlQuran || "/placeholder.svg"}
              alt="Al-Quran"
              fill
              className="object-contain drop-shadow-2xl relative z-10"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="xs:flex-1 sm:flex-1 md:flex-1 text-center xs:order-1 sm:order-1 md:order-2 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          {/* Arabic Text */}
          <h1 className="text-white xs:text-xl xs:leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight font-bold drop-shadow-lg xs:px-2 sm:px-4 md:px-0">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </h1>

          {/* English Translation */}
          <div className="xs:space-y-2 sm:space-y-3 md:space-y-4">
            <p className="text-white/90 xs:text-sm xs:leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed font-light drop-shadow-md xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto xs:px-2 sm:px-4 md:px-0">
              "The best of you are those who learn the Quran and teach it."
            </p>
            <p className="text-white/70 xs:text-xs sm:text-sm md:text-base lg:text-lg font-light italic drop-shadow-sm">
              (Bukhari)
            </p>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center xs:mt-4 sm:mt-6 md:mt-8">
            <div className="w-16 h-0.5 bg-white/30 xs:hidden sm:block"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full mx-4 xs:hidden sm:block"></div>
            <div className="w-16 h-0.5 bg-white/30 xs:hidden sm:block"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Floating particles effect */}
      <div className="absolute xs:top-1/4 sm:top-1/3 md:top-1/4 lg:top-1/5 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute xs:top-1/3 sm:top-1/2 md:top-1/3 lg:top-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute xs:bottom-1/4 sm:bottom-1/3 md:bottom-1/4 lg:bottom-1/5 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-2000"></div>
    </div>
  )
}
