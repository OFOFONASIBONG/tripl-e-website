import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index (3).tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Philosophy = lazy(() => import("./pages/Philosophy.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Mandate = lazy(() => import("./pages/Mandate.tsx"));
const Media = lazy(() => import("./pages/Media.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Ecosystem = lazy(() => import("./pages/Ecosystem.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mandate" element={<Mandate />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
