import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "Product Information",
        answer: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability."
    },
    {
        question: "Technical Specifications",
        answer: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    },
    {
        question: "Support and Services",
        answer: "We offer comprehensive support services to ensure your smooth experience with our flagship product. Contact our support team for assistance and guidance.",
    }
]

export function FaqAccordion() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="faq-1"
        >
            {
                faqData.map((faq,i) => (
                    <AccordionItem value={`faq-${i}`}>
                        <AccordionTrigger>Product Information</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge technology with sleek
                                design. Built with premium materials, it offers unparalleled
                                performance and reliability.
                            </p>
                            <p>
                                Key features include advanced processing capabilities, and an
                                intuitive user interface designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
