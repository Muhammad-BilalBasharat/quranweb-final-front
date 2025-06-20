export function generateMetadata() {
  return {
    title: "Frequently Asked Questions | QuranWeb",
    description: "Find answers to common questions about QuranWeb.",
  };
}

import { FaqAccordion } from "@/components/faq-accordion";

export default function FAQ() {
    return (
        <div className="w-3/4 mx-auto my-10">
            <h2 className="my-10 text-3xl font-semibold text-extra-dark text-center">Frequently Asked Questions</h2>
            <FaqAccordion />
        </div>
    );
}