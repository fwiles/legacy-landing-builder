
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { lazy, Suspense } from "react";
import PhoneLink from "./PhoneLink";

// Lazy load the modal component as it's not needed immediately
const BookingFormModal = lazy(() => import("./BookingFormModal"));

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoaded, setIsModalLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // Use Intersection Observer instead of scroll event for better performance
  useEffect(() => {
    if (!sentinel.current) return;
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel is not intersecting (500px from top), show the CTA
        setIsVisible(!entry.isIntersecting);
      },
      { rootMargin: "-500px 0px 0px 0px" }
    );
    
    observerRef.current.observe(sentinel.current);
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Preload the modal component when user has scrolled
  useEffect(() => {
    if (isVisible && !isModalLoaded) {
      // Use requestIdleCallback or setTimeout to defer non-critical work
      const timer = setTimeout(() => {
        setIsModalLoaded(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, isModalLoaded]);

  // Memoize the click handler to prevent unnecessary re-renders
  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
    setIsModalLoaded(true);
  }, []);

  return (
    <>
      {/* Invisible sentinel element to track scroll position */}
      <div ref={sentinel} className="absolute top-0 h-1 w-full pointer-events-none" aria-hidden="true" />
      
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 z-40 md:hidden animate-slide-up">
          <div className="container mx-auto flex justify-center gap-3">
            <PhoneLink 
              size="sm"
              variant="outline" 
              className="border-navy text-navy hover:bg-navy hover:text-white"
              asButton={true}
            >
              <Phone className="h-4 w-4" />
            </PhoneLink>
            <Button 
              size="sm" 
              className="bg-navy text-white hover:bg-navy/90 flex-1"
              onClick={handleModalOpen}
            >
              <Calendar className="mr-2 h-4 w-4" /> Book Free Consult
            </Button>
          </div>
        </div>
      )}

      {/* Only load the modal component when needed */}
      {(isModalOpen || isModalLoaded) && (
        <Suspense fallback={null}>
          <BookingFormModal 
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
          />
        </Suspense>
      )}
    </>
  );
};

export default FloatingCTA;
