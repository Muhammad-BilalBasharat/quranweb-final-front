"use client"
import Image from "next/image";
import Link from "next/link";

const images = Array.from({ length: 6 }, (_, i) => `/arabic-kalma/kalma${i + 1}.jpg`);

export default function ArabicKalma() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Thumbnails Grid */}
            <div className="grid xs:grid-cols-3 md:grid-cols-5 gap-5 mb-10">
                {images.map((src, idx) => (
                    <Link
                        key={src}
                        href={`/learn-quran/arabic-kalma?img=kalma${idx + 1}`}
                        className="block border rounded-sm hover:border-dark transition"
                    >
                        <Image
                            src={src}
                            alt={`Kalma No. ${idx + 1}`}
                            width={120}
                            height={170}
                            className="object-cover w-full h-auto rounded"
                        />
                        <div className="text-center text-xs text-gray-500 mt-auto">Page {idx + 1}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}