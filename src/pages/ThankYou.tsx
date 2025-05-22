
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PhoneLink from "@/components/PhoneLink";

const ThankYou = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="container max-w-3xl bg-white rounded-lg shadow-lg p-8 mx-4">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <h1 className="text-3xl font-serif font-bold text-navy mb-4">
              Thank You for Booking Your Consultation!
            </h1>
            <p className="text-lg text-slate mb-6">
              We've received your booking request and will be in touch shortly to confirm your consultation time.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-xl text-navy mb-4">Next Steps</h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate">
              <li>Our team will review your request and reach out within 1 business day.</li>
              <li>You'll receive a confirmation email with your consultation details.</li>
              <li>We'll schedule a time that works best for your 20-minute consultation.</li>
            </ol>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium text-navy mb-6">
              Need to speak with someone right away?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <PhoneLink 
                showIcon 
                size="lg"
                variant="outline"
                className="border-navy bg-white text-navy hover:bg-navy hover:text-gold"
              >
                Call Now
              </PhoneLink>
              <Button asChild size="lg" className="bg-navy text-white hover:bg-navy/90">
                <a onClick={() => navigate("/")}>
                  <Calendar className="mr-2 h-5 w-5" /> Return to Homepage
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Carter Legacy Planning. All rights reserved.</p>
          <p className="mt-1">Licensed in Texas, New Mexico, and Arizona</p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
