import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";
import OffersPage from "./pages/OffersPage";
import BestSellersPage from "./pages/BestSellersPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produto/:slug" element={<ProductDetail />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/ofertas" element={<OffersPage />} />
          <Route path="/mais-vendidos" element={<BestSellersPage />} />
          <Route path="/novidades" element={<NewArrivalsPage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
