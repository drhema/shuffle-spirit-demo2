import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductProps {
  name: string;
  price: string;
  oldPrice?: string;
  img: string;
  rating: number;
  slug: string;
  badge?: string;
  badgeColor?: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, oldPrice, img, rating, slug, badge, badgeColor }) => (
  <div className="flex-shrink-0 w-[46vw] min-w-[170px] sm:w-[200px] md:w-[220px] lg:w-[240px] bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <Link href={`/product/${slug}`} className="block">
      <div className="relative h-40 sm:h-44 md:h-48 rounded-xl bg-neutral-50 flex items-center justify-center mb-3 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover rounded-xl" />
        {badge && (
          <span className={`absolute top-2 left-2 ${badgeColor || 'bg-green-500'} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm`}>{badge}</span>
        )}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-2 right-2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </Link>
    <Link href={`/product/${slug}`} className="block">
      <h4 className="text-sm font-semibold text-neutral-900 leading-tight mb-1.5 line-clamp-2 min-h-[2.5rem] hover:text-green-600 transition-colors">{name}</h4>
    </Link>
    <div className="flex items-center gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400' : 'text-neutral-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-lg font-bold text-green-600">{price} <span className="text-xs font-medium text-neutral-500">KWD</span></span>
      {oldPrice && <span className="text-xs text-neutral-400 line-through">{oldPrice} KWD</span>}
    </div>
    <button className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-full transition-colors">
      Add to Cart
    </button>
  </div>
);

const AutoScrollRow: React.FC<{ title: string; href: string; products: ProductProps[]; duration?: number; direction?: 'left' | 'right' }> = ({
  title,
  href,
  products,
  duration = 30,
  direction = 'left',
}) => {
  const [paused, setPaused] = useState(false);
  const duplicated = [...products, ...products];
  const animateX = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="mb-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-neutral-900 tracking-tight">{title}</h3>
          <Link href={href} className="inline-flex items-center gap-1 px-5 py-2 bg-navy-500 text-white font-semibold text-sm rounded-full hover:bg-navy-600 transition-colors">
            Shop All
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>
      </div>
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: paused ? undefined : animateX }}
          transition={{
            x: {
              duration,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicated.map((p, i) => <ProductCard key={i} {...p} />)}
        </motion.div>
      </div>
    </div>
  );
};

const vitamins: ProductProps[] = [
  { name: 'Centrum Adults Multivitamin', price: '89.00', oldPrice: '110.00', img: 'https://picsum.photos/seed/vit1/300/300', rating: 5, slug: 'centrum-multivitamin-adult-100', badge: '-19%', badgeColor: 'bg-red-500' },
  { name: 'Nature Made Vitamin D3', price: '45.00', img: 'https://picsum.photos/seed/vit2/300/300', rating: 5, slug: 'nature-made-vitamin-d3-5000iu', badge: 'BESTSELLER', badgeColor: 'bg-purple-500' },
  { name: 'NOW Omega-3 Fish Oil', price: '55.00', oldPrice: '72.00', img: 'https://picsum.photos/seed/vit3/300/300', rating: 4, slug: 'now-foods-omega-3-200', badge: '-24%', badgeColor: 'bg-red-500' },
  { name: 'Solgar Vitamin C 1000mg', price: '62.00', img: 'https://picsum.photos/seed/vit4/300/300', rating: 5, slug: 'solgar-vitamin-c-1000mg', badge: 'NEW', badgeColor: 'bg-green-500' },
  { name: 'Garden of Life Probiotics', price: '120.00', oldPrice: '150.00', img: 'https://picsum.photos/seed/vit5/300/300', rating: 4, slug: 'garden-of-life-probiotics-30b', badge: '-20%', badgeColor: 'bg-red-500' },
  { name: "Women's Multi Gummies", price: '75.00', img: 'https://picsum.photos/seed/vit6/300/300', rating: 4, slug: 'centrum-multivitamin-adult-100', badge: 'OFFER', badgeColor: 'bg-sky-500' },
  { name: 'Nordic Naturals Ultimate Omega', price: '95.00', oldPrice: '115.00', img: 'https://picsum.photos/seed/vit7/300/300', rating: 5, slug: 'now-foods-omega-3-200', badge: '-17%', badgeColor: 'bg-red-500' },
];

const skincare: ProductProps[] = [
  { name: 'CeraVe Moisturizing Cream', price: '79.00', oldPrice: '99.00', img: 'https://picsum.photos/seed/skin1/300/300', rating: 5, slug: 'cerave-moisturizing-cream-473ml', badge: '-20%', badgeColor: 'bg-red-500' },
  { name: 'La Roche-Posay Effaclar', price: '115.00', img: 'https://picsum.photos/seed/skin2/300/300', rating: 4, slug: 'la-roche-posay-effaclar-duo-40ml', badge: 'BESTSELLER', badgeColor: 'bg-purple-500' },
  { name: 'Bioderma Sensibio H2O', price: '95.00', oldPrice: '120.00', img: 'https://picsum.photos/seed/skin3/300/300', rating: 5, slug: 'bioderma-sensibio-h2o-500ml', badge: '-21%', badgeColor: 'bg-red-500' },
  { name: 'Eucerin Sun Fluid SPF50+', price: '82.00', img: 'https://picsum.photos/seed/skin4/300/300', rating: 4, slug: 'eucerin-sun-fluid-spf50-50ml', badge: 'NEW', badgeColor: 'bg-green-500' },
  { name: 'The Ordinary Niacinamide', price: '42.00', img: 'https://picsum.photos/seed/skin5/300/300', rating: 5, slug: 'the-ordinary-niacinamide-30ml', badge: 'OFFER', badgeColor: 'bg-sky-500' },
  { name: 'Vichy Mineral 89 Serum', price: '135.00', oldPrice: '165.00', img: 'https://picsum.photos/seed/skin6/300/300', rating: 4, slug: 'vichy-mineral-89-50ml', badge: '-18%', badgeColor: 'bg-red-500' },
  { name: 'Neutrogena Hydro Boost', price: '68.00', img: 'https://picsum.photos/seed/skin7/300/300', rating: 4, slug: 'neutrogena-hydro-boost-gel-50ml', badge: 'NEW', badgeColor: 'bg-green-500' },
];

const trendingDeals: ProductProps[] = [
  { name: 'Vaseline Rosy Lips Therapy', price: '15.50', oldPrice: '19.00', img: 'https://picsum.photos/seed/lip1/300/300', rating: 5, slug: 'otrivin-nasal-spray-adult-15ml', badge: '-18%', badgeColor: 'bg-red-500' },
  { name: 'Labello Cherry Shine', price: '12.00', img: 'https://picsum.photos/seed/lip2/300/300', rating: 4, slug: 'otrivin-nasal-spray-adult-15ml', badge: 'NEW', badgeColor: 'bg-green-500' },
  { name: 'Dettol Hand Wash Original', price: '8.50', img: 'https://picsum.photos/seed/hw1/300/300', rating: 4, slug: 'dettol-antiseptic-liquid-500ml', badge: 'OFFER', badgeColor: 'bg-sky-500' },
  { name: 'Lux Soft Touch Hand Wash', price: '7.00', oldPrice: '9.50', img: 'https://picsum.photos/seed/hw2/300/300', rating: 4, slug: 'dettol-antiseptic-liquid-500ml', badge: '-26%', badgeColor: 'bg-red-500' },
  { name: 'Nivea Lip Care Moisture', price: '14.00', oldPrice: '18.00', img: 'https://picsum.photos/seed/lip3/300/300', rating: 4, slug: 'otrivin-nasal-spray-adult-15ml', badge: '-22%', badgeColor: 'bg-red-500' },
  { name: 'Palmolive Naturals Milk', price: '9.00', oldPrice: '12.00', img: 'https://picsum.photos/seed/hw4/300/300', rating: 5, slug: 'dettol-antiseptic-liquid-500ml', badge: '-25%', badgeColor: 'bg-red-500' },
  { name: 'Dove Beauty Cream Bar', price: '5.50', img: 'https://picsum.photos/seed/dove1/300/300', rating: 5, slug: 'dettol-antiseptic-liquid-500ml', badge: 'BESTSELLER', badgeColor: 'bg-purple-500' },
];

const IndexSectionCustomComponents8: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Full-width Promo Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-10 shadow-sm">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400" alt="Product Promo" className="w-full h-44 md:h-56 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent flex items-center">
            <div className="p-6 md:p-10 max-w-lg">
              <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-1">Featured Product</p>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-neutral-900 mb-2">Digestive Health</h3>
              <p className="text-neutral-600 text-sm mb-4">Supports the balance of beneficial bacteria in the digestive system.</p>
              <Link href="/category/vitamins-supplements" className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white font-semibold text-sm rounded-full hover:bg-green-700 transition-colors">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AutoScrollRow title="Trending Deals" href="/category/personal-care" products={trendingDeals} duration={28} direction="left" />
      <AutoScrollRow title="Vitamins & Supplements" href="/category/vitamins-supplements" products={vitamins} duration={32} direction="right" />
      <AutoScrollRow title="Skincare Essentials" href="/category/skincare" products={skincare} duration={30} direction="left" />
    </section>
  );
};

export default IndexSectionCustomComponents8;
