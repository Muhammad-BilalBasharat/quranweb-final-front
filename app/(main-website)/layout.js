import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/news-ticker";

export default function MainWebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-18">
        {children}
        <Footer />
      </div>
    </>
  );
}
