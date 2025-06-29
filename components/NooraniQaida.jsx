import Image from "next/image";
import Link from "next/link";

const images = Array.from({ length: 25 }, (_, i) => `/arabic-noorani-qaida/${i + 1}.jpg`);

export default function NooraniQaida() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Thumbnails Grid */}
            <div className="grid xs:grid-cols-3 md:grid-cols-5 gap-5 mb-10">
                {images.map((src, idx) => (
                    <Link
                        key={src}
                        href={`/learn-quran/noorani-qaida?img=${idx + 1}`}
                        className="block border rounded-sm hover:border-dark transition"
                    >
                        <Image
                            src={src}
                            alt={`Noorani Qaida Page ${idx + 1}`}
                            width={120}
                            height={170}
                            className="object-cover w-full h-auto rounded"
                        />
                        <div className="text-center text-xs mt-1 text-gray-500">Page {idx + 1}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}