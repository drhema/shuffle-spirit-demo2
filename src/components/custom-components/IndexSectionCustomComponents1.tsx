import React, { useState } from 'react';
import Link from 'next/link';

const countries = [
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
];

const categories = [
  { name: 'Vitamins & Supplements', href: '/category/vitamins-supplements' },
  { name: 'Skincare', href: '/category/skincare' },
  { name: 'Baby Care', href: '/category/baby-care' },
  { name: 'Fragrances', href: '/category/fragrances' },
  { name: 'Personal Care', href: '/category/personal-care' },
  { name: 'Cold & Flu', href: '/category/cold-flu' },
  { name: 'Hair Care', href: '/category/hair-care' },
  { name: 'Sport Nutrition', href: '/category/sport-nutrition' },
];

const cartItems = [
  { name: 'CeraVe Moisturizing Cream', qty: 2, price: 79.0, img: 'https://picsum.photos/seed/skin1/100/100', slug: 'cerave-moisturizing-cream-473ml' },
  { name: 'Nature Made Vitamin D3', qty: 1, price: 45.0, img: 'https://picsum.photos/seed/vit2/100/100', slug: 'nature-made-vitamin-d3-5000iu' },
  { name: 'Bioderma Sensibio H2O', qty: 1, price: 95.0, img: 'https://picsum.photos/seed/skin3/100/100', slug: 'bioderma-sensibio-h2o-500ml' },
];

const cartTotal = cartItems.reduce((s, item) => s + item.price * item.qty, 0);

const IndexSectionCustomComponents1: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 py-2 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            {/* Country Selector */}
            <div className="relative">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
              >
                <span className="text-base">{selectedCountry.flag}</span>
                <span className="text-neutral-700 font-medium">{selectedCountry.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`transition-transform ${countryOpen ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {countryOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-neutral-200 rounded-xl shadow-lg z-50 min-w-[180px] overflow-hidden">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setCountryOpen(false);
                      }}
                      className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm hover:bg-green-50 transition-colors ${
                        selectedCountry.code === country.code ? 'bg-green-50 text-green-600 font-semibold' : 'text-neutral-700'
                      }`}
                    >
                      <span className="text-base">{country.flag}</span>
                      <span>{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Delivery info */}
            <div className="hidden sm:flex items-center gap-2 text-neutral-600 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span>Deliver to {selectedCountry.flag} {selectedCountry.name}</span>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang('AR')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition duration-200 ${
                  lang === 'AR' ? 'bg-navy-500 text-white' : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition duration-200 ${
                  lang === 'EN' ? 'bg-navy-500 text-white' : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img className="h-10" src="https://static.shuffle.dev/uploads/files/8b/8bab17007f51a73dedc88566c0cc32e3dcc9e84a/logos/logo-b8bc9ed9d7c0f4ec969f05dca71b87e9.png" alt="Spirit Healthcare" />
            </Link>

            {/* Desktop Search */}
            <div className="hidden lg:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <input type="text" placeholder="Search for medicines, vitamins, skincare..." className="w-full py-3 px-5 pr-12 rounded-full border border-neutral-200 focus:border-green-300 focus:ring-4 focus:ring-green-50 outline-none transition duration-200 text-neutral-600" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx={11} cy={11} r={8} />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <a href="#" className="hidden md:flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
                <span className="text-sm font-medium">Account</span>
              </a>
              <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <circle cx={9} cy={21} r={1} />
                  <circle cx={20} cy={21} r={1} />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">{cartItems.length}</span>
                <span className="hidden md:inline text-sm font-medium">Cart</span>
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1={3} y1={12} x2={21} y2={12} />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <line x1={3} y1={18} x2={21} y2={18} />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 pb-4">
          <div className="relative w-full">
            <input type="text" placeholder="Search products..." className="w-full py-3 px-5 pr-12 rounded-full border border-neutral-200 focus:border-green-300 focus:ring-4 focus:ring-green-50 outline-none transition duration-200 text-neutral-600" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx={11} cy={11} r={8} />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img className="h-8" src="https://static.shuffle.dev/uploads/files/8b/8bab17007f51a73dedc88566c0cc32e3dcc9e84a/logos/logo-b8bc9ed9d7c0f4ec969f05dca71b87e9.png" alt="Spirit Healthcare" />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-neutral-600" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Country Selector */}
            <div className="p-4 border-b border-neutral-100">
              <label className="text-xs font-semibold text-neutral-500 mb-2 block">Deliver to</label>
              <select
                value={selectedCountry.code}
                onChange={(e) => {
                  const c = countries.find((x) => x.code === e.target.value);
                  if (c) setSelectedCountry(c);
                }}
                className="w-full py-2.5 px-3 border border-neutral-200 rounded-xl text-sm font-medium bg-white focus:outline-none focus:border-green-400"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
                ))}
              </select>
            </div>

            {/* Mobile Language Toggle */}
            <div className="p-4 border-b border-neutral-100">
              <label className="text-xs font-semibold text-neutral-500 mb-2 block">Language</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setLang('EN')}
                  className={`flex-1 py-2 rounded-xl text-sm font-semibold transition ${lang === 'EN' ? 'bg-green-600 text-white' : 'bg-neutral-100 text-neutral-700'}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('AR')}
                  className={`flex-1 py-2 rounded-xl text-sm font-semibold transition ${lang === 'AR' ? 'bg-green-600 text-white' : 'bg-neutral-100 text-neutral-700'}`}
                >
                  العربية
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="p-4">
              <p className="text-xs font-semibold text-neutral-500 mb-3">Categories</p>
              <nav className="space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                  >
                    {cat.name}
                    <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </nav>

              <div className="border-t border-neutral-100 mt-4 pt-4">
                <Link
                  href="/brands"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  All Brands
                  <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Login Button */}
              <div className="mt-6">
                <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-full transition-colors">
                  Login / Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="fixed inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl flex flex-col">
            {/* Cart Header */}
            <div className="flex items-center justify-between p-5 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-neutral-900">
                  <circle cx={9} cy={21} r={1} />
                  <circle cx={20} cy={21} r={1} />
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
                <h2 className="text-lg font-bold text-neutral-900">Your Cart</h2>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{cartItems.length} items</span>
              </div>
              <button onClick={() => setCartOpen(false)} className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-neutral-600" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Free shipping bar */}
            <div className="px-5 py-3 bg-green-50 border-b border-green-100">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                {cartTotal >= 50 ? (
                  <span className="text-green-700 font-medium">You qualify for <strong>FREE delivery!</strong></span>
                ) : (
                  <span className="text-green-700 font-medium">Add <strong>{(50 - cartTotal).toFixed(3)} KWD</strong> more for free delivery</span>
                )}
              </div>
              <div className="mt-2 h-1.5 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${Math.min(100, (cartTotal / 50) * 100)}%` }} />
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.map((item) => (
                <div key={item.slug} className="flex gap-4 p-3 bg-neutral-50 rounded-xl">
                  <Link href={`/product/${item.slug}`} onClick={() => setCartOpen(false)}>
                    <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.slug}`} onClick={() => setCartOpen(false)} className="text-sm font-semibold text-neutral-900 hover:text-green-600 transition-colors line-clamp-2">{item.name}</Link>
                    <p className="text-sm font-bold text-green-600 mt-1">{item.price.toFixed(3)} KWD</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                        <button className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:bg-neutral-100 transition-colors text-lg">-</button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold text-neutral-900 border-x border-neutral-200">{item.qty}</span>
                        <button className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:bg-neutral-100 transition-colors text-lg">+</button>
                      </div>
                      <button className="ml-auto text-neutral-400 hover:text-red-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t border-neutral-100 p-5 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Subtotal</span>
                  <span className="font-semibold text-neutral-900">{cartTotal.toFixed(3)} KWD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
                <span className="text-base font-bold text-neutral-900">Total</span>
                <span className="text-xl font-bold text-green-600">{cartTotal.toFixed(3)} KWD</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="block w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-center rounded-full transition-colors"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => setCartOpen(false)}
                className="block w-full py-3 border border-neutral-200 text-neutral-700 font-semibold text-center rounded-full hover:bg-neutral-50 transition-colors text-sm"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-neutral-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center gap-0.5 px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-green-600">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-[10px] font-semibold text-green-600">Home</span>
          </Link>
          <Link href="/brands" className="flex flex-col items-center gap-0.5 px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-neutral-400">
              <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
              <line x1={8} y1={21} x2={16} y2={21} />
              <line x1={12} y1={17} x2={12} y2={21} />
            </svg>
            <span className="text-[10px] font-medium text-neutral-500">Brands</span>
          </Link>
          <button onClick={() => setCartOpen(true)} className="flex flex-col items-center gap-0.5 px-3 py-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-neutral-400">
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span className="absolute -top-0.5 right-1 bg-green-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartItems.length}</span>
            <span className="text-[10px] font-medium text-neutral-500">Cart</span>
          </button>
          <a href="#" className="flex flex-col items-center gap-0.5 px-3 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-neutral-400">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            <span className="text-[10px] font-medium text-neutral-500">Account</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default IndexSectionCustomComponents1;
