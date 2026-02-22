import React, { useState, useMemo } from 'react';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/src/components/shared/Layout';
import Breadcrumb from '@/src/components/shared/Breadcrumb';
import { allBrands } from '@/src/data/brands';
import type { Brand } from '@/src/types';

interface BrandsPageProps {
  brands: Brand[];
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const BrandsPage: React.FC<BrandsPageProps> = ({ brands }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredBrands = useMemo(() => {
    if (!searchQuery.trim()) return brands;
    const q = searchQuery.toLowerCase();
    return brands.filter((b) => b.name.toLowerCase().includes(q));
  }, [brands, searchQuery]);

  const groupedBrands = useMemo(() => {
    const groups: Record<string, Brand[]> = {};
    filteredBrands.forEach((brand) => {
      const firstChar = brand.name.charAt(0).toUpperCase();
      const letter = /[A-Z]/.test(firstChar) ? firstChar : '#';
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(brand);
    });
    Object.keys(groups).forEach((key) => {
      groups[key].sort((a, b) => a.name.localeCompare(b.name));
    });
    return groups;
  }, [filteredBrands]);

  const sortedLetters = useMemo(() => {
    const letters = Object.keys(groupedBrands);
    return letters.sort((a, b) => {
      if (a === '#') return -1;
      if (b === '#') return 1;
      return a.localeCompare(b);
    });
  }, [groupedBrands]);

  const scrollToLetter = (letter: string) => {
    setActiveLetter(letter);
    document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'All Brands' }]} />

      {/* Hero */}
      <section className="py-10 md:py-14" style={{background: 'linear-gradient(135deg, #1B2B5B 0%, #374270 100%)'}}>
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-3">
            Shop by Brand
          </h1>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
            Browse our complete directory of trusted pharmacy and healthcare brands.
            Find your favourite brand and explore their full product range.
          </p>
        </div>
      </section>

      {/* Sticky Search + Alphabet Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-neutral-100 shadow-sm">
        <div className="container px-4 mx-auto py-3 space-y-3">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 border border-neutral-200 rounded-full font-medium text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-colors"
            />
          </div>

          {/* Alphabet Bar */}
          <div className="flex justify-center gap-1 flex-wrap">
            <button
              onClick={() => scrollToLetter('#')}
              className={`w-7 h-7 rounded-full font-semibold text-xs transition-colors ${
                activeLetter === '#'
                  ? 'bg-green-500 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              #
            </button>
            {ALPHABET.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className={`w-7 h-7 rounded-full font-semibold text-xs transition-colors ${
                  activeLetter === letter
                    ? 'bg-green-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Grid grouped by letter */}
      <div className="container px-4 mx-auto py-8">
        {sortedLetters.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-bold text-neutral-400">
              No brands found matching &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}

        {sortedLetters.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-40">
            <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-4">
              <span className="inline-block pb-1 border-b-2 border-green-500">{letter}</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {groupedBrands[letter].map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brand/${brand.slug}`}
                  className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 object-contain mb-3"
                  />
                  <span className="text-sm font-semibold text-neutral-900 text-center">
                    {brand.name}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium mt-1">
                    {brand.productCount} products
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BrandsPageProps> = async () => {
  return {
    props: {
      brands: allBrands,
    },
  };
};

export default BrandsPage;
