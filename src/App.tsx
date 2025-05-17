import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Helper component to handle section redirects
const SectionRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    // Wait for the component to mount, then scroll to the section
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [to]);

  return <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Section routes */}
          <Route path="/home" element={<SectionRedirect to="home" />} />
          <Route path="/about" element={<SectionRedirect to="about" />} />
          <Route path="/skills" element={<SectionRedirect to="skills" />} />
          <Route path="/projects" element={<SectionRedirect to="projects" />} />
          <Route path="/experience" element={<SectionRedirect to="experience" />} />
          <Route path="/contact" element={<SectionRedirect to="contact" />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
