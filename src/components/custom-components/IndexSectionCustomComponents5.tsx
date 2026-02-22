import React from 'react';
import Link from 'next/link';

const brands = [
  { name: 'Nivea', slug: 'nivea' },
  { name: 'Centrum', slug: 'centrum' },
  { name: "Johnson's", slug: 'johnson-johnson' },
  { name: 'Bioderma', slug: 'bioderma' },
  { name: 'La Roche', slug: 'la-roche-posay' },
  { name: 'Eucerin', slug: 'eucerin' },
  { name: 'Solgar', slug: 'solgar' },
  { name: 'Mustela', slug: 'mustela' },
];

const IndexSectionCustomComponents5: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight text-center mb-2">Trusted Brands</h2>
        <p className="text-neutral-600 text-center">We partner with the world&apos;s leading healthcare brands</p>
      </div>
      <div className="brands-marquee-wrapper relative">
        <div className="brands-marquee flex items-center gap-16">
          <div className="flex items-center gap-16 brands-slide">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brand/${brand.slug}`}
                className="flex-shrink-0 w-32 h-16 bg-neutral-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 hover:shadow-md"
              >
                <span className="font-heading font-bold text-xl text-neutral-400">{brand.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-16 brands-slide">
            {brands.map((brand) => (
              <Link
                key={`dup-${brand.slug}`}
                href={`/brand/${brand.slug}`}
                className="flex-shrink-0 w-32 h-16 bg-neutral-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 hover:shadow-md"
              >
                <span className="font-heading font-bold text-xl text-neutral-400">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <Link
          href="/brands"
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-500 text-white font-semibold text-sm rounded-full hover:bg-navy-600 transition-colors"
        >
          View All Brands
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents5;
