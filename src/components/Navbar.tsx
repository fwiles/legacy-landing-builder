
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import BookingFormModal from "./BookingFormModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Plan Options", href: "#plans" },
    { name: "Core Documents", href: "#documents" },
    { name: "State-Specific", href: "#states" },
    { name: "FAQs", href: "#faqs" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="flex items-center">
            <span className="text-navy font-serif font-bold text-xl md:text-2xl">
              Carter Legacy Planning
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm text-slate hover:text-navy font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="ml-4 flex items-center space-x-2">
              <Button asChild size="sm" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                <a href="tel:+19154975755">
                  <Phone className="mr-1 h-4 w-4" /> Call Now
                </a>
              </Button>
              <Button 
                size="sm" 
                className="bg-navy text-white hover:bg-navy/90"
                onClick={() => setIsModalOpen(true)}
              >
                <Calendar className="mr-1 h-4 w-4" /> Book Consult
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-navy p-2"
              aria-label="Open mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-navy font-medium hover:bg-cream"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white w-full">
                  <a href="tel:+19154975755">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                </Button>
                <Button 
                  className="bg-navy text-white hover:bg-navy/90 w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  <Calendar className="mr-2 h-4 w-4" /> Book Free Consult
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <BookingFormModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

export default Navbar;
