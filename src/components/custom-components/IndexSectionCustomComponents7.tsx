import React from 'react';
import Link from 'next/link';

const IndexSectionCustomComponents7: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-2">Special Offers</h2>
          <p className="text-neutral-600">Don&apos;t miss out on these amazing deals</p>
        </div>

        {/* Two Side-by-Side Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <Link href="/category/baby-care" className="relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
            <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=700" alt="Baby Essentials" className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-500/80 to-transparent flex flex-col justify-center p-6 md:p-8">
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">Up to 35% Off</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Baby Essentials</h3>
              <p className="text-neutral-300 text-sm mb-4 max-w-xs">Gentle care for your little ones</p>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </div>
          </Link>

          <Link href="/category/skincare" className="relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300">
            <img src="https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=700" alt="Skincare Sale" className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-l from-navy-500/80 to-transparent flex flex-col justify-center items-end p-6 md:p-8 text-right">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Limited Time</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Skincare Sale</h3>
              <p className="text-neutral-300 text-sm mb-4 max-w-xs">Up to 70% off premium skincare</p>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Three Mini Promo Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600', label: 'Starting from', value: '6 KWD', category: 'Vitamins', href: '/category/vitamins-supplements', color: 'from-green-900/70' },
            { img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600', label: 'New Arrivals', value: '', category: 'Fragrances', href: '/category/fragrances', color: 'from-purple-900/70' },
            { img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600', label: 'Starting from', value: '3 KWD', category: 'Personal Care', href: '/category/personal-care', color: 'from-blue-900/70' },
          ].map((b, i) => (
            <Link key={i} href={b.href} className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300">
              <img src={b.img} alt={b.category} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-t ${b.color} to-transparent flex flex-col justify-end p-5`}>
                <p className="text-neutral-300 text-xs font-semibold uppercase tracking-wider">{b.label}</p>
                {b.value ? (
                  <p className="text-3xl font-bold text-white">{b.value}</p>
                ) : (
                  <p className="text-lg font-bold text-white">{b.category}</p>
                )}
                <span className="inline-flex items-center gap-1 text-white text-sm font-medium mt-2 group-hover:gap-2 transition-all">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents7;
