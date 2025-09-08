import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/site/Layout";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = "T342guy — Portfolio & Contact";
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const rootEl = document.getElementById("root")!;
// Avoid calling createRoot multiple times across hot reloads or duplicate script loads
if ((window as any).__REACT_ROOT) {
  (window as any).__REACT_ROOT.render(<App />);
} else {
  const _root = createRoot(rootEl);
  _root.render(<App />);
  (window as any).__REACT_ROOT = _root;
}
