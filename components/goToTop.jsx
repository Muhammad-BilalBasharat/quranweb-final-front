"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoToTopButton ({ showAfter = 300 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={scrollToTop}
        className={`
          flex items-center justify-center
          w-12 h-12 
          bg-primary hover:bg-dark 
          text-white 
          rounded-full 
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-in-out
          transform hover:scale-110
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
        `}
        aria-label="Go to top"
      >
        <ChevronUp size={25}/>
      </button>
    </div>
  );
};
