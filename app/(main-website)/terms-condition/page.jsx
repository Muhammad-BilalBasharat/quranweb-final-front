import TermsAndConditions from "@/components/TermsAndConditions";

export function generateMetadata() {
  return {
    title: "Terms & Conditions | Learn Quran Online",
    description: "Read the terms and conditions of Learn Quran Online.",
  };
}

export default function TermsPage() {
  return <TermsAndConditions />;
}
