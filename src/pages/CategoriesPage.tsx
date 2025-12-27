import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CategoryCard } from '@/components/category/CategoryCard';
import { ChevronRight } from 'lucide-react';
import { categories } from '@/data/mockProducts';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CartDrawer />

      <main className="container py-6 md:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Categorias</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Categorias</h1>
          <p className="text-muted-foreground">
            Explore todas as nossas categorias de produtos
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
