import { FaqAccordion } from "@/components/faq-accordion";

export default function FAQ() {
    return (
        <div className="w-3/4 mx-auto my-10">
            <h2 className="my-10 text-3xl font-semibold text-extra-dark">Frequently Asked Questions</h2>
            <FaqAccordion />
        </div>
    );
}