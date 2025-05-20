
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlanOptionsSection from "@/components/PlanOptionsSection";
import CoreDocumentsSection from "@/components/CoreDocumentsSection";
import StateSpecificSection from "@/components/StateSpecificSection";
import FAQsSection from "@/components/FAQsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <PlanOptionsSection />
      <CoreDocumentsSection />
      <StateSpecificSection />
      <FAQsSection />
      <ProcessSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
