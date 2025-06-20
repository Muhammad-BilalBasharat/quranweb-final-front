import TermsAndConditions from "@/components/TermsAndConditions";

export function generateMetadata() {
  return {
    title: "Terms & Conditions | QuranWeb",
    description: "Read the terms and conditions of QuranWeb.",
  };
}

export default function TermsPage() {
  return <TermsAndConditions />;
}
