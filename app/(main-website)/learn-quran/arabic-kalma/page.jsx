
export function generateMetadata() {
    return {
        title: "Learn Quran | Arabic Kalmas | QuranWeb",
        description: "Arabic Kalmas for learning Quran",
    };
}

import KalmaClient from "./KalmaClient";

export default function Page() {
    return (
        <KalmaClient></KalmaClient>
    )
}