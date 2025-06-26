
export function generateMetadata() {
    return {
        title: "Learn Quran | Noorani Qaida | QuranWeb",
        description: "Noorani Qaida for learning Quran",
    };
}

import NooraniQaidaClient from "./NooraniQaidaClient";

export default function Page() {
    return (
        <NooraniQaidaClient></NooraniQaidaClient>
    )
}