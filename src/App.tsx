
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhoneNumberProvider } from "@/contexts/PhoneNumberContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

// Non-critical UI components loaded lazily
const Toaster = lazy(() => import("@/components/ui/toaster").then(module => ({ default: module.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(module => ({ default: module.Toaster })));

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Optimized query client with better caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Loading fallback
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen bg-cream">
    <div className="space-y-4 w-full max-w-md px-4">
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-96 w-full rounded-lg" />
      <Skeleton className="h-20 w-full rounded-lg" />
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PhoneNumberProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<PageLoading />}>
                <Index />
              </Suspense>
            } />
            <Route path="/thank-you" element={
              <Suspense fallback={<PageLoading />}>
                <ThankYou />
              </Suspense>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <Suspense fallback={<PageLoading />}>
                <NotFound />
              </Suspense>
            } />
          </Routes>
        </BrowserRouter>
        
        {/* Toast notifications loaded last as they're not critical */}
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
        <Suspense fallback={null}>
          <Sonner />
        </Suspense>
      </PhoneNumberProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
