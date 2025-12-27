export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  categorySlug: string;
  brand: string;
  rating: number;
  reviews: number;
  stock: number;
  isFeatured: boolean;
  isOnSale: boolean;
  isNew: boolean;
  colors?: string[];
  sizes?: string[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Eletrônicos',
    slug: 'eletronicos',
    description: 'Smartphones, tablets, notebooks e mais',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
    productCount: 245,
  },
  {
    id: '2',
    name: 'Moda',
    slug: 'moda',
    description: 'Roupas, calçados e acessórios',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80',
    productCount: 532,
  },
  {
    id: '3',
    name: 'Casa & Decoração',
    slug: 'casa-decoracao',
    description: 'Móveis, decoração e organização',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
    productCount: 189,
  },
  {
    id: '4',
    name: 'Esportes',
    slug: 'esportes',
    description: 'Equipamentos e roupas esportivas',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
    productCount: 156,
  },
  {
    id: '5',
    name: 'Beleza',
    slug: 'beleza',
    description: 'Maquiagem, skincare e perfumes',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
    productCount: 312,
  },
  {
    id: '6',
    name: 'Games',
    slug: 'games',
    description: 'Consoles, jogos e acessórios',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
    productCount: 98,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB',
    slug: 'iphone-15-pro-max-256gb',
    description: 'O iPhone mais poderoso de todos os tempos. Com chip A17 Pro, câmera de 48MP e tela Super Retina XDR.',
    price: 9499.00,
    salePrice: 8299.00,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80',
    ],
    category: 'Eletrônicos',
    categorySlug: 'eletronicos',
    brand: 'Apple',
    rating: 4.9,
    reviews: 2847,
    stock: 15,
    isFeatured: true,
    isOnSale: true,
    isNew: true,
    colors: ['Titânio Natural', 'Titânio Azul', 'Titânio Branco', 'Titânio Preto'],
    tags: ['smartphone', 'apple', 'iphone', 'premium'],
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    description: 'Potência Galaxy AI. Câmera de 200MP. S Pen inclusa. Bateria para o dia todo.',
    price: 8999.00,
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80',
    ],
    category: 'Eletrônicos',
    categorySlug: 'eletronicos',
    brand: 'Samsung',
    rating: 4.8,
    reviews: 1923,
    stock: 23,
    isFeatured: true,
    isOnSale: false,
    isNew: true,
    colors: ['Preto', 'Violeta', 'Cinza', 'Amarelo'],
    tags: ['smartphone', 'samsung', 'galaxy', 'premium'],
  },
  {
    id: '3',
    name: 'MacBook Pro 14" M3 Pro',
    slug: 'macbook-pro-14-m3-pro',
    description: 'Poder profissional. Chip M3 Pro com CPU de 11 núcleos e GPU de 14 núcleos.',
    price: 18999.00,
    salePrice: 16999.00,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    ],
    category: 'Eletrônicos',
    categorySlug: 'eletronicos',
    brand: 'Apple',
    rating: 4.9,
    reviews: 856,
    stock: 8,
    isFeatured: true,
    isOnSale: true,
    isNew: false,
    colors: ['Cinza Espacial', 'Prateado'],
    tags: ['notebook', 'apple', 'macbook', 'profissional'],
  },
  {
    id: '4',
    name: 'Tênis Nike Air Max 270',
    slug: 'tenis-nike-air-max-270',
    description: 'Conforto máximo com a maior unidade Air Max até hoje. Design inspirado em modelos clássicos.',
    price: 899.99,
    salePrice: 649.99,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    ],
    category: 'Moda',
    categorySlug: 'moda',
    brand: 'Nike',
    rating: 4.7,
    reviews: 3421,
    stock: 45,
    isFeatured: true,
    isOnSale: true,
    isNew: false,
    colors: ['Preto/Branco', 'Branco/Vermelho', 'Azul/Laranja'],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    tags: ['tênis', 'nike', 'airmax', 'esportivo'],
  },
  {
    id: '5',
    name: 'Poltrona Decorativa Veludo',
    slug: 'poltrona-decorativa-veludo',
    description: 'Poltrona elegante em veludo com estrutura de madeira. Perfeita para sala de estar.',
    price: 1899.00,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    ],
    category: 'Casa & Decoração',
    categorySlug: 'casa-decoracao',
    brand: 'Tok&Stok',
    rating: 4.6,
    reviews: 234,
    stock: 12,
    isFeatured: false,
    isOnSale: false,
    isNew: true,
    colors: ['Verde Musgo', 'Rosa Blush', 'Azul Marinho', 'Cinza'],
    tags: ['poltrona', 'decoração', 'sala', 'veludo'],
  },
  {
    id: '6',
    name: 'PlayStation 5 Slim',
    slug: 'playstation-5-slim',
    description: 'Console PS5 Slim com SSD de 1TB. Experimente jogos incríveis em 4K.',
    price: 4499.00,
    salePrice: 3999.00,
    images: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80',
    ],
    category: 'Games',
    categorySlug: 'games',
    brand: 'Sony',
    rating: 4.9,
    reviews: 4521,
    stock: 5,
    isFeatured: true,
    isOnSale: true,
    isNew: false,
    tags: ['console', 'playstation', 'ps5', 'gaming'],
  },
  {
    id: '7',
    name: 'Kit Skincare Completo',
    slug: 'kit-skincare-completo',
    description: 'Kit com limpador facial, tônico, sérum e hidratante. Para todos os tipos de pele.',
    price: 399.00,
    salePrice: 299.00,
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
    ],
    category: 'Beleza',
    categorySlug: 'beleza',
    brand: 'The Ordinary',
    rating: 4.8,
    reviews: 1876,
    stock: 67,
    isFeatured: true,
    isOnSale: true,
    isNew: false,
    tags: ['skincare', 'beleza', 'cuidados', 'kit'],
  },
  {
    id: '8',
    name: 'Bicicleta Speed Road Pro',
    slug: 'bicicleta-speed-road-pro',
    description: 'Bicicleta speed profissional com quadro de carbono e 22 marchas.',
    price: 12999.00,
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80',
    ],
    category: 'Esportes',
    categorySlug: 'esportes',
    brand: 'Specialized',
    rating: 4.7,
    reviews: 89,
    stock: 3,
    isFeatured: false,
    isOnSale: false,
    isNew: true,
    colors: ['Preto Fosco', 'Vermelho Racing'],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['bicicleta', 'speed', 'ciclismo', 'profissional'],
  },
  {
    id: '9',
    name: 'Fone Bluetooth Sony WH-1000XM5',
    slug: 'fone-bluetooth-sony-wh-1000xm5',
    description: 'Cancelamento de ruído líder do setor. 30 horas de bateria. Conforto premium.',
    price: 2499.00,
    salePrice: 1999.00,
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80',
    ],
    category: 'Eletrônicos',
    categorySlug: 'eletronicos',
    brand: 'Sony',
    rating: 4.9,
    reviews: 2156,
    stock: 34,
    isFeatured: true,
    isOnSale: true,
    isNew: false,
    colors: ['Preto', 'Prata', 'Azul Midnight'],
    tags: ['fone', 'bluetooth', 'sony', 'premium'],
  },
  {
    id: '10',
    name: 'Vestido Midi Floral',
    slug: 'vestido-midi-floral',
    description: 'Vestido midi com estampa floral exclusiva. Tecido leve e fluido.',
    price: 349.00,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    ],
    category: 'Moda',
    categorySlug: 'moda',
    brand: 'Farm',
    rating: 4.5,
    reviews: 456,
    stock: 28,
    isFeatured: false,
    isOnSale: false,
    isNew: true,
    sizes: ['P', 'M', 'G', 'GG'],
    tags: ['vestido', 'floral', 'midi', 'feminino'],
  },
  {
    id: '11',
    name: 'Smart TV LG OLED 55"',
    slug: 'smart-tv-lg-oled-55',
    description: 'TV OLED 4K com tecnologia de pixels autoiluminados. Preto perfeito e cores vibrantes.',
    price: 6999.00,
    salePrice: 5499.00,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80',
    ],
    category: 'Eletrônicos',
    categorySlug: 'eletronicos',
    brand: 'LG',
    rating: 4.8,
    reviews: 743,
    stock: 11,
    isFeatured: true,
    isOnSale: true,
    isNew: false,
    tags: ['tv', 'oled', 'lg', '4k'],
  },
  {
    id: '12',
    name: 'Mochila Executiva Premium',
    slug: 'mochila-executiva-premium',
    description: 'Mochila para notebook até 17". Compartimentos organizadores e design elegante.',
    price: 599.00,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    ],
    category: 'Moda',
    categorySlug: 'moda',
    brand: 'Samsonite',
    rating: 4.6,
    reviews: 892,
    stock: 42,
    isFeatured: false,
    isOnSale: false,
    isNew: false,
    colors: ['Preto', 'Cinza', 'Azul Marinho'],
    tags: ['mochila', 'executiva', 'notebook', 'premium'],
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getOnSaleProducts = () => products.filter((p) => p.isOnSale);
export const getNewProducts = () => products.filter((p) => p.isNew);
export const getProductsByCategory = (categorySlug: string) =>
  products.filter((p) => p.categorySlug === categorySlug);
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
