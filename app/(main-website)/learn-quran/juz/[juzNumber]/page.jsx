
export function generateMetadata() {
    return {
        title: "Learn Quran | Juz/Para | QuranWeb",
        description: "Juz / Para List of the Quran",
    };
}

import JuzNumberClient from "./JuzNumberClient";

export default function Page() {
    return (
        <JuzNumberClient></JuzNumberClient>
    )
}