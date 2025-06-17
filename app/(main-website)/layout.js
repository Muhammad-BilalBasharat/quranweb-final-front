import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainWebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
