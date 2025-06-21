import Banner from "@/components/Banner";
import TrailCard from "@/components/trail-card";

export function generateMetadata() {
  return {
    title: "Home | QuranWeb",
    description: "Welcome to QuranWeb - your online Quran learning platform.",
  };
}

export default function Home() {
  return (
    <>
    <Banner/>
      <TrailCard/>
    </>
  );
}

