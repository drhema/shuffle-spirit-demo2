import React from 'react';
import Link from 'next/link';

const IndexSectionCustomComponents3: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-heading text-neutral-900 tracking-tight mb-5 md:mb-7 text-center">Shop by Category</h2>
        <div className="flex items-center justify-start md:justify-center gap-5 md:gap-6 lg:gap-10 overflow-x-auto py-2 pb-4 scrollbar-hide px-1">
          {[
            { name: 'NEW', img: 'https://picsum.photos/seed/new1/120/120', accent: true, href: '#' },
            { name: 'Fragrances', img: 'https://picsum.photos/seed/frag1/120/120', href: '/category/fragrances' },
            { name: 'Makeup', img: 'https://picsum.photos/seed/makeup1/120/120', href: '#' },
            { name: 'Care', img: 'https://picsum.photos/seed/care1/120/120', href: '/category/personal-care' },
            { name: 'Supplements', img: 'https://picsum.photos/seed/suppl1/120/120', href: '/category/vitamins-supplements' },
            { name: 'Devices', img: 'https://picsum.photos/seed/device1/120/120', href: '#' },
            { name: 'Bundles', img: 'https://picsum.photos/seed/bundle1/120/120', href: '#' },
            { name: 'Nutrition', img: 'https://picsum.photos/seed/nutri1/120/120', href: '/category/sport-nutrition' },
            { name: 'Offers', img: 'https://picsum.photos/seed/offers1/120/120', href: '#' },
          ].map((cat) => (
            <Link key={cat.name} href={cat.href} className="flex flex-col items-center flex-shrink-0 group">
              <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-3 ${cat.accent ? 'border-red-500' : 'border-neutral-200'} group-hover:border-green-500 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover block" />
              </div>
              <span className={`mt-2 text-xs lg:text-sm font-semibold ${cat.accent ? 'text-red-500' : 'text-neutral-700'} group-hover:text-green-600 whitespace-nowrap transition-colors duration-200`}>{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents3;
