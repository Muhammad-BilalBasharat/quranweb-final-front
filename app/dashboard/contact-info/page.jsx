import ContactInfo from "@/components/contact-info";

export function generateMetadata() {
  return {
    title: "Contact Info | QuranWeb",
    description: "Contact information for QuranWeb.",
  };
}

export default function ContactInfoPage() {
    return (
        <ContactInfo />
    )
}