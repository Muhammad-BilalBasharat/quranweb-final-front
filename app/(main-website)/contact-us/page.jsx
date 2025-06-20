import ContactForm from "@/components/Contact-From";

export function generateMetadata() {
  return {
    title: "Contact Us | QuranWeb",
    description: "Get in touch with QuranWeb",
  };
}

export default function ContactUs() {
    return (
        <div className="w-5/6 mx-auto my-10">
            <h2 className="my-10 text-3xl font-semibold text-extra-dark text-center">Contact Us</h2>
            <ContactForm/>
        </div>
    );
}