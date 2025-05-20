
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import BookingFormModal from "./BookingFormModal";

const BookingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="book" className="section-anchor py-16 md:py-24 bg-navy text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
          Ready to Protect Your Legacy?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200">
          Take the first step toward peace of mind with a free, no-obligation consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button asChild size="lg" variant="outline" className="border-white bg-white text-navy hover:bg-navy hover:text-gold">
            <a href="tel:+19154975755">
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </a>
          </Button>
          <Button 
            size="lg" 
            className="bg-gold text-navy hover:bg-gold/90"
            onClick={() => setIsModalOpen(true)}
          >
            <Calendar className="mr-2 h-5 w-5" /> Book a Free Consult
          </Button>
        </div>
      </div>

      <BookingFormModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default BookingSection;
