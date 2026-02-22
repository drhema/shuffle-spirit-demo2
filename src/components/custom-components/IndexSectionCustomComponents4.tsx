import React, { useRef } from 'react';
import Link from 'next/link';

interface ProductCardProps {
  slug: string;
  name: string;
  desc: string;
  price: string;
  oldPrice?: string | null;
  badge?: string | null;
  badgeColor?: string | null;
  img: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ slug, name, desc, price, oldPrice, badge, badgeColor, img, rating }) => (
  <div className="flex-shrink-0 w-[46vw] min-w-[170px] sm:w-[210px] md:w-[240px] lg:w-[260px] bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
      <h4 className="text-sm font-semibold text-neutral-900 leading-tight mb-1 line-clamp-2 min-h-[2.5rem] hover:text-green-600 transition-colors">{name}</h4>
    </Link>
    <p className="text-neutral-500 text-xs mb-1.5">{desc}</p>
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

const products: ProductCardProps[] = [
  {
    slug: 'nature-made-vitamin-d3-5000iu',
    name: 'Vitamin D3 1000 IU',
    desc: '120 Softgels',
    price: '4.500',
    oldPrice: '6.000',
    badge: '-25%',
    badgeColor: 'bg-red-500',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
    rating: 5,
  },
  {
    slug: 'cerave-moisturizing-cream-473ml',
    name: 'Hydrating Moisturizer',
    desc: '50ml',
    price: '12.750',
    oldPrice: null,
    badge: 'NEW',
    badgeColor: 'bg-green-500',
    img: 'https://images.unsplash.com/photo-1677167643883-b4c703a5da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMHdlbGxuZXNzJTIwcHJvZHVjdHN8ZW58MHwyfHx8MTc3MTc0NzcxN3ww&ixlib=rb-4.1.0&q=80&w=1080&w=450',
    rating: 4,
  },
  {
    slug: 'johnsons-baby-lotion-500ml',
    name: 'Gentle Baby Lotion',
    desc: '200ml',
    price: '3.950',
    oldPrice: null,
    badge: 'BESTSELLER',
    badgeColor: 'bg-purple-500',
    img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400',
    rating: 5,
  },
  {
    slug: 'versace-eros-edt-100ml',
    name: 'Luxury Eau de Parfum',
    desc: '100ml',
    price: '28.000',
    oldPrice: '35.000',
    badge: '-20%',
    badgeColor: 'bg-red-500',
    img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400',
    rating: 4,
  },
  {
    slug: 'now-foods-omega-3-200',
    name: 'Omega-3 Fish Oil',
    desc: '90 Capsules',
    price: '7.700',
    oldPrice: '11.000',
    badge: '-30%',
    badgeColor: 'bg-red-500',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    rating: 4,
  },
  {
    slug: 'solgar-vitamin-c-1000mg',
    name: 'Vitamin C 1000mg Capsules',
    desc: '100 Tablets',
    price: '6.200',
    oldPrice: null,
    badge: 'OFFER',
    badgeColor: 'bg-sky-500',
    img: 'https://picsum.photos/seed/vitc1/300/300',
    rating: 5,
  },
  {
    slug: 'la-roche-posay-effaclar-duo-40ml',
    name: 'Effaclar Duo+',
    desc: '40ml',
    price: '11.500',
    oldPrice: '14.000',
    badge: '-18%',
    badgeColor: 'bg-red-500',
    img: 'https://picsum.photos/seed/effac1/300/300',
    rating: 4,
  },
];

const IndexSectionCustomComponents4: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-1">Featured Products</h2>
            <p className="text-neutral-600">Handpicked bestsellers for you</p>
          </div>
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <Link href="/category/vitamins-supplements" className="hidden sm:inline-flex items-center gap-1 px-5 py-2.5 bg-navy-500 text-white font-semibold text-sm rounded-full hover:bg-navy-600 transition-colors">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide px-4">
        {products.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents4;
