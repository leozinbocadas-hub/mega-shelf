import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ProductCard } from '@/components/product/ProductCard';
import { CategoryCard } from '@/components/category/CategoryCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ChevronRight, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  categories,
  getFeaturedProducts,
  getOnSaleProducts,
  getNewProducts,
} from '@/data/mockProducts';

const featuredProducts = getFeaturedProducts();
const saleProducts = getOnSaleProducts();
const newProducts = getNewProducts();

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-dark py-12 md:py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(16,90%,55%,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(35,95%,55%,0.2),transparent_50%)]" />
          </div>

          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <Badge variant="hot" className="mb-4 px-4 py-1.5">
                  <Zap className="h-3 w-3 mr-1" />
                  Black Friday Antecipada
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6 leading-tight">
                  Até <span className="text-gradient-primary">60% OFF</span> em
                  milhares de produtos
                </h1>
                <p className="text-lg text-accent-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0">
                  Aproveite as melhores ofertas do ano. Frete grátis em compras acima
                  de R$ 299 + cupons exclusivos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/ofertas">
                    <Button variant="hero" size="xl">
                      Ver Ofertas
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/categorias">
                    <Button variant="outline" size="xl" className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
                      Explorar Categorias
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
                    alt="Shopping"
                    className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
                  />
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-xl"
                  >
                    <p className="text-sm font-medium text-foreground">🔥 Hot Deal</p>
                    <p className="text-2xl font-bold text-primary">-50%</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-xl"
                  >
                    <p className="text-sm font-medium text-foreground">Frete Grátis</p>
                    <p className="text-xs text-muted-foreground">Acima de R$ 299</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Categorias</h2>
                <p className="text-muted-foreground">
                  Navegue por nossas categorias mais populares
                </p>
              </div>
              <Link to="/categorias" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Ver todas
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Mais Vendidos</h2>
                  <p className="text-muted-foreground text-sm">
                    Os produtos favoritos dos nossos clientes
                  </p>
                </div>
              </div>
              <Link to="/mais-vendidos" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Ver todos
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.slice(0, 8).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,white,transparent_50%)]" />
              </div>
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <Badge variant="secondary" className="mb-4">
                    Cupom Exclusivo
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                    Ganhe 10% de desconto
                  </h3>
                  <p className="text-primary-foreground/80">
                    Use o cupom <span className="font-bold">PRIMEIRA10</span> na sua primeira compra
                  </p>
                </div>
                <Link to="/ofertas">
                  <Button variant="secondary" size="lg" className="shrink-0">
                    Aproveitar Agora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* On Sale Products */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sale">
                  <Zap className="h-5 w-5 text-sale-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Ofertas Imperdíveis</h2>
                  <p className="text-muted-foreground text-sm">
                    Produtos com até 60% de desconto
                  </p>
                </div>
              </div>
              <Link to="/ofertas" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Ver todas
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {saleProducts.slice(0, 8).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Novidades</h2>
                <p className="text-muted-foreground">
                  Confira os produtos que acabaram de chegar
                </p>
              </div>
              <Link to="/novidades" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Ver todas
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newProducts.slice(0, 4).map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
