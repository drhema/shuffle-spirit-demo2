import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const heroSlides = [
  {
    title: 'Your Health, Our Priority',
    subtitle: 'Shop premium healthcare products, vitamins, and wellness essentials. Free delivery on orders above 15 KWD.',
    cta: 'Shop Now',
    ctaHref: '/category/vitamins-supplements',
    img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800',
    gradient: 'from-emerald-50 via-teal-50 to-white',
    accent: 'green',
  },
  {
    title: 'Summer Skincare Sale',
    subtitle: 'Up to 40% off top dermatologist-recommended brands. Protect and nourish your skin this season.',
    cta: 'Shop Skincare',
    ctaHref: '/category/skincare',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800',
    gradient: 'from-blue-50 via-sky-50 to-white',
    accent: 'blue',
  },
  {
    title: 'Baby Care Essentials',
    subtitle: 'Gentle, trusted products for your little ones. Everything from diapers to baby skincare.',
    cta: 'Shop Baby Care',
    ctaHref: '/category/baby-care',
    img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800',
    gradient: 'from-pink-50 via-rose-50 to-white',
    accent: 'pink',
  },
];

const accentMap: Record<string, { bg: string; hover: string; ring: string; text: string; badge: string }> = {
  green: { bg: 'bg-green-600', hover: 'hover:bg-green-700', ring: 'focus:ring-green-200', text: 'text-green-600', badge: 'bg-green-100' },
  blue: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', ring: 'focus:ring-blue-200', text: 'text-blue-600', badge: 'bg-blue-100' },
  pink: { bg: 'bg-pink-600', hover: 'hover:bg-pink-700', ring: 'focus:ring-pink-200', text: 'text-pink-600', badge: 'bg-pink-100' },
};

const IndexSectionCustomComponents2: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((p) => (p + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => goTo((current + 1) % heroSlides.length);

  const slide = heroSlides[current];
  const colors = accentMap[slide.accent];

  return (
    <section className={`py-8 md:py-16 bg-gradient-to-br ${slide.gradient} transition-colors duration-700`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-wrap items-center -mx-4 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight mb-6">
              {slide.title.split(' ').slice(0, -2).join(' ')}{' '}
              <span className={colors.text}>{slide.title.split(' ').slice(-2).join(' ')}</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-lg">{slide.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={slide.ctaHref}
                className={`inline-flex justify-center items-center text-center h-14 px-8 font-semibold tracking-tight text-lg text-white ${colors.bg} ${colors.hover} rounded-full focus:ring-4 ${colors.ring} transition duration-200`}
              >
                {slide.cta}
              </Link>
              <Link
                href="/brands"
                className="inline-flex justify-center items-center text-center h-14 px-8 font-semibold tracking-tight text-lg text-neutral-900 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full transition duration-200"
              >
                View Brands
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative">
              <img
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl"
                src={slide.img}
                alt={slide.title}
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${colors.badge} rounded-full flex items-center justify-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={colors.text}>
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">100% Authentic</p>
                    <p className="text-sm text-neutral-500">Genuine Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition duration-200 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? `w-8 ${colors.bg}` : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition duration-200 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents2;
