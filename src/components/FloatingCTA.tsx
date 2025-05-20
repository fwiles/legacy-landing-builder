
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import BookingFormModal from "./BookingFormModal";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 z-40 md:hidden animate-slide-up">
        <div className="container mx-auto flex justify-center gap-3">
          <Button asChild size="sm" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
            <a href="tel:+19154975755" className="flex items-center">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          <Button 
            size="sm" 
            className="bg-navy text-white hover:bg-navy/90 flex-1"
            onClick={() => setIsModalOpen(true)}
          >
            <Calendar className="mr-2 h-4 w-4" /> Book Free Consult
          </Button>
        </div>
      </div>

      <BookingFormModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

export default FloatingCTA;
