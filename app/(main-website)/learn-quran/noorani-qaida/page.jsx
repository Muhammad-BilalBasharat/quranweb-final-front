
export function generateMetadata() {
    return {
        title: "Learn Quran | Noorani Qaida | Learn Quran Online",
        description: "Noorani Qaida for learning Quran",
    };
}

import { Suspense } from "react";
import NooraniQaidaClient from "./NooraniQaidaClient";

function LoadingFallback() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-5">
            <div className="w-full max-w-2xl border rounded shadow-lg bg-gray-50 flex flex-col items-center">
                <div className="w-full h-[850px] bg-gray-200 animate-pulse rounded flex items-center justify-center">
                    <span className="text-gray-500">Loading...</span>
                </div>
                <div className="flex items-center justify-center gap-4 my-4">
                    <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                    <span className="text-sm text-gray-400">Loading page...</span>
                    <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <NooraniQaidaClient />
        </Suspense>
    )
}