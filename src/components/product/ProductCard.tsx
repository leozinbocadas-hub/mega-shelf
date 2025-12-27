import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import type { Product } from '@/data/mockProducts';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images[0],
      quantity: 1,
    });
    toast.success('Produto adicionado ao carrinho!', {
      description: product.name,
    });
  };

  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/produto/${product.slug}`} className="group block">
        <div className="product-card">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-secondary/30">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              {product.isOnSale && discount > 0 && (
                <Badge variant="sale">-{discount}%</Badge>
              )}
              {product.isNew && <Badge variant="new">Novo</Badge>}
              {product.isFeatured && !product.isNew && (
                <Badge variant="hot">🔥 Hot</Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card hover:text-primary">
              <Heart className="h-4 w-4" />
            </button>

            {/* Quick Add Button */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              <Button
                variant="cart"
                size="sm"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                Adicionar
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Brand */}
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              {product.brand}
            </p>

            {/* Name */}
            <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
              <span className="text-xs font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviews.toLocaleString()})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              {product.salePrice ? (
                <>
                  <span className="text-lg font-bold text-foreground">
                    R$ {product.salePrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-sm line-through text-muted-foreground">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-foreground">
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              )}
            </div>

            {/* Installments */}
            <p className="text-xs text-muted-foreground mt-1">
              em até <span className="font-medium text-foreground">12x</span> de{' '}
              <span className="font-medium text-foreground">
                R$ {((product.salePrice || product.price) / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
