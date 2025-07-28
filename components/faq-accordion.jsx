import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "What is online Quran teaching?",
        answer: "The web based meeting and audio video software enables students to interact with real life teachers from any computer with internet access. By providing a human touch to computer education, we guide students personally in order to learn The Holy Quran effectively whilst providing an online learning experience through online interactive technology."
    },
    {
        question: "How to start the program?",
        answer: "To start the program, simply visit our website and fill the form for a free trial class. Our team will guide you through the process and help you get started with your Quran learning journey.",
    },
    {
        question: "How Will The Teaching Take Place?",
        answer: "The teaching will take place through online classes using video conferencing tools. You will have a dedicated teacher who will guide you through the lessons, ensuring you understand the Quranic teachings and Tajweed rules.",
    }, {
        question: "Who are the teachers?",
        answer: "Our teachers are highly qualified and experienced in Quranic studies. They are proficient in Tajweed and have a deep understanding of the Quran, ensuring that you receive the best possible education.",
    },
    {
        question: "What is the duration of each class?",
        answer: "Each class typically lasts for 30  minutes, depending on the level of the student and the specific course being taught.",
    },
    {
        question: "What are the fees for the program?",
        answer: "The fees vary based on the course and duration. Please contact us for detailed information about our pricing plans.",
    },
    {
        question: "Is there a free trial class available?",
        answer: "Yes, we offer three day free trial class for new students to experience our teaching methods and understand how we can help you learn the Quran effectively.",
    },
    {
        question: "How can i join classes/lectures?",
        answer: "You can join classes by Microsoft Team Software and Android App from 'https://www.microsoft.com/en-us/microsoft-teams/download-app'. After registration, we will send you the invitation link for classes on your email than you can join your classes.",
    },
]

export function FaqAccordion() {
    return (
        <>
            <h2 className="mb-10 mt-12 xs:text-2xl sm:text-3xl font-semibold text-extra-dark text-center">Frequently Asked Questions</h2>

            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="faq-1"
            >
                {
                    faqData.map((faq, i) => (
                        <AccordionItem value={`faq-${i + 1}`} key={i}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    {faq.answer}
                                </p>

                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    )
}
