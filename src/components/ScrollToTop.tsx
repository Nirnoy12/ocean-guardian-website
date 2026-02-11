import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #donate-content), scroll to that specific section
    if (hash) {
      // Small timeout ensures the DOM is fully rendered before we try to find the element
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Calculate offset to account for the fixed navbar (approx 80-100px)
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } 
    // Otherwise, just scroll to the very top of the page (standard behavior)
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}