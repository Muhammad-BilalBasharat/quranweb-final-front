import Image from "next/image"
import AlQuran from "@/public/alquran.png"

export default function Banner() {
    return (
        <div className="relative w-full h-[60vh] bg-gradient-to-r from-secondary via-primary mt-18 to-dark flex items-center justify-center overflow-hidden">
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10">
                <h2 className="text-white text-2xl font-light text-center tracking-wide">
                    بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                </h2>
            </div>

            <div className="flex items-center justify-center w-full mx-auto px-5">
                <div className="flex-1 flex justify-center lg:justify-start">
                    <div className="relative w-[40vw] h-[40vh]">
                        <Image
                            src={AlQuran}
                            alt="Al-Quran"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="flex-1 text-center space-y-5">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                    </h1>

                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl mx-auto">
                        "The best of you are those who learn the Quran and teach it."(Bukhari)
                    </p>
                </div>
            </div>
        </div>
    )
}
