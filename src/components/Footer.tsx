import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif font-bold mb-4">Carter Legacy Planning</h3>
            <p className="text-gray-300 mb-3">
              Flat-fee estate planning services across Texas, New Mexico, and Arizona.
            </p>
            <p className="text-gray-300">
              Virtual consultations available. In-person meetings by appointment in El Paso.
            </p>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm" className="border-white bg-white text-navy hover:bg-navy hover:text-gold">
                <a href="tel:+19154975755">
                  <Phone className="mr-2 h-4 w-4" /> (915) 497-5755
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">Plan Options</a>
              </li>
              <li>
                <a href="#documents" className="hover:text-white transition-colors">Core Documents</a>
              </li>
              <li>
                <a href="#states" className="hover:text-white transition-colors">State-Specific Info</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#book" className="hover:text-white transition-colors">Book a Consult</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Carter Legacy Planning. All rights reserved.</p>
          <p className="mt-1">Licensed in Texas, New Mexico, and Arizona</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
