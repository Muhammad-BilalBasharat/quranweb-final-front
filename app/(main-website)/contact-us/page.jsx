import ContactForm from "@/components/Contact-From";

export function generateMetadata() {
  return {
    title: "Contact Us | Learn Quran Online",
    description: "Get in touch with Learn Quran Online",
  };
}

export default function ContactUs() {
    return (
        <div className="w-5/6 mx-auto my-10">
            <ContactForm/>
        </div>
    );
}