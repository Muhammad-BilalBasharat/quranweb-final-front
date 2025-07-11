
export function generateMetadata() {
    return {
        title: "Learn Quran | Namaz Book | QuranWeb",
        description: "Namaz Book for learning Quran",
    };
}

import NamazClient from "./NamazClient";

export default function Page() {
    return (
        <NamazClient></NamazClient>
    )
}