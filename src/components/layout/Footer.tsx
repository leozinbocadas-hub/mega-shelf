import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, CreditCard, Truck, Shield, Headphones } from 'lucide-react';

const footerLinks = {
  institucional: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Trabalhe Conosco', href: '/carreiras' },
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
  ],
  ajuda: [
    { name: 'Central de Ajuda', href: '/ajuda' },
    { name: 'Como Comprar', href: '/como-comprar' },
    { name: 'Trocas e Devoluções', href: '/trocas' },
    { name: 'Rastrear Pedido', href: '/rastrear' },
  ],
  categorias: [
    { name: 'Eletrônicos', href: '/categoria/eletronicos' },
    { name: 'Moda', href: '/categoria/moda' },
    { name: 'Casa & Decoração', href: '/categoria/casa-decoracao' },
    { name: 'Esportes', href: '/categoria/esportes' },
  ],
};

const benefits = [
  { icon: Truck, title: 'Frete Grátis', description: 'Acima de R$ 299' },
  { icon: Shield, title: 'Compra Segura', description: 'Dados protegidos' },
  { icon: CreditCard, title: 'Parcelamento', description: 'Em até 12x' },
  { icon: Headphones, title: 'Suporte 24h', description: 'Estamos aqui' },
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Benefits Bar */}
      <div className="border-b border-accent-foreground/10">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-foreground/10">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{benefit.title}</p>
                  <p className="text-xs text-accent-foreground/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold">MegaShop</span>
            </Link>
            <p className="text-sm text-accent-foreground/70 mb-4">
              Sua loja online favorita. Produtos de qualidade com os melhores preços.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ajuda</h3>
            <ul className="space-y-2">
              {footerLinks.ajuda.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-accent-foreground/10">
        <div className="container py-4">
          <p className="text-center text-xs text-accent-foreground/50">
            © 2024 MegaShop Online. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
