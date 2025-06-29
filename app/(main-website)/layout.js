import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainWebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-17 xs:mt-15">
        {children}
        <Footer />
      </div>
    </>
  );
}
