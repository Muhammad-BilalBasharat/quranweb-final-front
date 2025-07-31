import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/floatingWhatsapp";
import GoToTopButton from "@/components/goToTop";

export default function MainWebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-15">
        {children}
        <WhatsAppButton />
        <GoToTopButton />
        <Footer />
      </div>
    </>
  );
}
