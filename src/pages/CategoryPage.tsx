import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ChevronRight, SlidersHorizontal, Grid3X3, LayoutGrid } from 'lucide-react';
import { categories, getProductsByCategory, products } from '@/data/mockProducts';
import { motion } from 'framer-motion';

const brands = ['Apple', 'Samsung', 'Nike', 'Sony', 'LG', 'Tok&Stok', 'Farm', 'Samsonite'];

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [gridCols, setGridCols] = useState(4);

  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = slug ? getProductsByCategory(slug) : products;

  const filteredProducts = categoryProducts.filter((product) => {
    const price = product.salePrice || product.price;
    const inPriceRange = price >= priceRange[0] && price <= priceRange[1];
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return inPriceRange && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.salePrice || a.price;
    const priceB = b.salePrice || b.price;
    switch (sortBy) {
      case 'price-asc':
        return priceA - priceB;
      case 'price-desc':
        return priceB - priceA;
      case 'newest':
        return b.isNew ? 1 : -1;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Faixa de Preço</Label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={20000}
          step={100}
          className="mb-4"
        />
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full"
            placeholder="Min"
          />
          <span className="text-muted-foreground">-</span>
          <Input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Brands */}
      <div>
        <Label className="text-base font-semibold mb-4 block">Marca</Label>
        <div className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <label
                htmlFor={brand}
                className="text-sm cursor-pointer hover:text-primary"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setPriceRange([0, 20000]);
          setSelectedBrands([]);
        }}
      >
        Limpar Filtros
      </Button>
    </div>
  );

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
          {category ? (
            <span className="text-foreground">{category.name}</span>
          ) : (
            <span className="text-foreground">Todos os Produtos</span>
          )}
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {category ? category.name : 'Todos os Produtos'}
          </h1>
          <p className="text-muted-foreground">
            {sortedProducts.length} produtos encontrados
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold mb-6">Filtros</h2>
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-6 p-4 rounded-xl bg-secondary/30">
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <Label className="text-sm text-muted-foreground hidden sm:block">
                  Ordenar por:
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevância</SelectItem>
                    <SelectItem value="price-asc">Menor Preço</SelectItem>
                    <SelectItem value="price-desc">Maior Preço</SelectItem>
                    <SelectItem value="newest">Mais Recente</SelectItem>
                    <SelectItem value="rating">Melhor Avaliação</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Grid Toggle */}
              <div className="hidden md:flex items-center gap-1">
                <Button
                  variant={gridCols === 3 ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setGridCols(3)}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={gridCols === 4 ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setGridCols(4)}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setPriceRange([0, 20000]);
                    setSelectedBrands([]);
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`grid gap-4 md:gap-6 ${
                  gridCols === 3
                    ? 'grid-cols-2 md:grid-cols-3'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {sortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
