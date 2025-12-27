import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ProductCard } from '@/components/product/ProductCard';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getNewProducts } from '@/data/mockProducts';
import { Badge } from '@/components/ui/badge';

export default function NewArrivalsPage() {
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-primary py-12 md:py-16">
          <div className="container text-center">
            <Badge variant="secondary" className="mb-4">
              <Star className="h-3 w-3 mr-1" />
              Recém Chegados
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Novidades
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Confira os produtos que acabaram de chegar. Seja o primeiro a comprar!
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
            <span className="text-foreground">Novidades</span>
          </nav>

          {/* Products */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {newProducts.length} novos produtos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
