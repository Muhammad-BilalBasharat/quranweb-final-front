import PrivacyPolicy from "@/components/PrivacyPolicy";

export function generateMetadata() {
  return {
    title: "Privacy Policy | QuranWeb",
    description: "Read the privacy policy of QuranWeb.",
  };
}

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
