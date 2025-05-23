
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import BookingFormModal from "./BookingFormModal";
import PhoneLink from "./PhoneLink";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="hero" className="section-anchor pt-24 pb-16 md:pt-32 md:pb-24 bg-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white px-4 py-2 rounded-full inline-flex items-center shadow-sm">
              <span className="text-gold text-lg font-bold">⭐️⭐️⭐️⭐️⭐️</span>
              <span className="ml-2 text-slate font-medium text-sm">84 Five-Star Reviews on Google</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy leading-tight">Flat-fee estate plans for those who want peace of mind, privacy, and protection</h1>
            
            <p className="text-xl md:text-2xl text-slate font-medium">
              Protect Your Family. Preserve Your Legacy.
            </p>
            
            <div className="space-y-3">
              <p className="bullet-check">
                Flat fees — no hourly billing, ever
              </p>
              <p className="bullet-check">
                Virtual consultations via Zoom or phone
              </p>
              <p className="bullet-check">
                Service across TX, AZ, and NM
              </p>
              <p className="bullet-check">
                Fast turnaround — plans ready in 7–10 business days
              </p>
              <p className="bullet-check">
                Trusted legal experience from a multi-state licensed attorney
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <PhoneLink 
                showIcon 
                size="lg"
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                Call Now
              </PhoneLink>
              <Button 
                size="lg" 
                className="bg-navy text-white hover:bg-navy/90"
                onClick={() => setIsModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" /> Book a Free Consult
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white p-2">
            <img alt="Attorney at Carter Legacy Planning" className="w-full h-auto rounded object-cover" src="/lovable-uploads/1bdcae98-6389-4c2e-b4bd-869453bfd29f.png" />
          </div>
        </div>
      </div>

      <BookingFormModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default HeroSection;
