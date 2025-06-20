import { AspectRatio } from "@/components/ui/aspect-ratio"
export default function MakkahLivePage() {
    return (
        <div className="w-5/6 mx-auto my-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-primary my-5">Makkah Live</h1>
                <p>You can watch Makkah live 24/7.</p>
            </div>
            <AspectRatio ratio={16 / 9}>
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/2Gub8-cSH9c?autoplay=1" title="🔴Live Makkah Today | Makkah Live TV" frameBorder="1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </AspectRatio>
        </div>
    )
}