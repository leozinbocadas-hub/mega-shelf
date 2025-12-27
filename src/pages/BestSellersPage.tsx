import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ProductCard } from '@/components/product/ProductCard';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/mockProducts';
import { Badge } from '@/components/ui/badge';

export default function BestSellersPage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-dark py-12 md:py-16">
          <div className="container text-center">
            <Badge className="mb-4 bg-warning/20 text-warning border-warning/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Top Vendas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
              Mais Vendidos
            </h1>
            <p className="text-lg text-accent-foreground/70 max-w-2xl mx-auto">
              Os produtos favoritos dos nossos clientes. Qualidade e satisfação garantida.
            </p>
          </div>
        </section>

        <div className="container py-6 md:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Mais Vendidos</span>
          </nav>

          {/* Products */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {featuredProducts.length} produtos mais vendidos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
