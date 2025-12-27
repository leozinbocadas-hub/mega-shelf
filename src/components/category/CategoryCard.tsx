import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Category } from '@/data/mockProducts';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link to={`/categoria/${category.slug}`} className="block">
        <div className="category-card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-accent-foreground mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-accent-foreground/70">
                {category.productCount} produtos
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
