
import React, { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlanOptionsSection from "@/components/PlanOptionsSection";
import CoreDocumentsSection from "@/components/CoreDocumentsSection";
import StateSpecificSection from "@/components/StateSpecificSection";
import FAQsSection from "@/components/FAQsSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy loaded components
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const BookingSection = lazy(() => import("@/components/BookingSection"));

// Loading fallback component
const SectionSkeleton = () => (
  <div className="py-16 md:py-24 bg-cream">
    <div className="container mx-auto">
      <Skeleton className="h-12 w-2/3 mx-auto mb-8" />
      <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
      </div>
    </div>
  </div>
);

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
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BookingSection />
      </Suspense>
      <Footer />
      <FloatingCTA />
    </main>
  );
};

export default Index;
