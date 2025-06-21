import BannerImage from "@/public/banner.png"
import Image from "next/image"

export default function Banner(){
    return(
        <div className="relative w-full h-screen overflow-hidden">
            <Image 
            src={BannerImage}
            alt="Banner"
            fill
            className="object-fit object-top"
            />
        </div>
    )
}