import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCartStore } from '@/stores/cartStore';
import { Trash2, Minus, Plus, ChevronRight, ShoppingBag, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const [coupon, setCoupon] = useState('');
  const navigate = useNavigate();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <CartDrawer />

        <main className="container py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8">
              Adicione produtos ao seu carrinho e volte aqui para finalizar sua compra.
            </p>
            <Link to="/">
              <Button variant="hero" size="lg">
                Explorar Produtos
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

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
          <span className="text-foreground">Carrinho</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  {/* Image */}
                  <Link to={`/produto/${item.productId}`} className="shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/produto/${item.productId}`}>
                      <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    {item.variant && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.variant.name}: {item.variant.value}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        {item.salePrice ? (
                          <>
                            <p className="font-semibold">
                              R$ {(item.salePrice * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                            <p className="text-sm text-muted-foreground line-through">
                              R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </p>
                          </>
                        ) : (
                          <p className="font-semibold">
                            R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Clear Cart */}
            <div className="flex justify-end">
              <Button variant="ghost" onClick={clearCart} className="text-muted-foreground">
                Limpar Carrinho
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-xl bg-card border border-border space-y-6">
              <h2 className="text-lg font-semibold">Resumo do Pedido</h2>

              {/* Coupon */}
              <div>
                <Label className="text-sm">Cupom de Desconto</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    placeholder="Digite o cupom"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <Button variant="outline">Aplicar</Button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Frete</span>
                  <span className="text-success font-medium">
                    {totalPrice >= 299 ? 'Grátis' : 'Calcular no checkout'}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-3 border-t border-border">
                  <span>Total</span>
                  <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {totalPrice < 299 && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-info/10 text-info text-sm">
                  <Truck className="h-4 w-4 shrink-0" />
                  <span>
                    Faltam <strong>R$ {(299 - totalPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong> para frete grátis!
                  </span>
                </div>
              )}

              {/* Checkout Button */}
              <Button variant="hero" size="lg" className="w-full" onClick={() => navigate('/checkout')}>
                Finalizar Compra
              </Button>

              {/* Continue Shopping */}
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
