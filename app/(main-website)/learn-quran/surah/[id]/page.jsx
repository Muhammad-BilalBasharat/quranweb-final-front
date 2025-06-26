
export function generateMetadata() {
  return {
    title: "Learn Quran | Surah | QuranWeb",
    description: "Quran By Surah List",
  };
}

import SurahByIdClient from "./SurahByIdClient";

export default function Page({params}) {
  return (
    <SurahByIdClient params={params}></SurahByIdClient>
  )
}