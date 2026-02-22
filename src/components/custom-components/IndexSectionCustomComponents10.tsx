import React from 'react';
import Link from 'next/link';

const IndexSectionCustomComponents10: React.FC = () => {
  return (
    <footer className="bg-navy-500">
      {/* Top bar */}
      <div className="border-b border-navy-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <a className="text-neutral-300 font-medium text-sm hover:text-white transition duration-200" href="#">Help Center</a>
              <a className="text-neutral-300 font-medium text-sm hover:text-white transition duration-200" href="#">Store Locator</a>
              <a className="text-neutral-300 font-medium text-sm hover:text-white transition duration-200" href="#">Contact</a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-neutral-300 font-medium text-sm hover:text-white transition duration-200"
            >
              Back to top
              <span className="w-8 h-8 rounded-full border border-neutral-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Shop */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/category/vitamins-supplements" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Vitamins &amp; Supplements</Link></li>
              <li><Link href="/category/skincare" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Skincare</Link></li>
              <li><Link href="/category/baby-care" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Baby Care</Link></li>
              <li><Link href="/category/fragrances" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Fragrances</Link></li>
              <li><Link href="/category/personal-care" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Personal Care</Link></li>
              <li><Link href="/brands" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">All Brands</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Contact Us</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">FAQs</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Returns &amp; Refunds</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Track Order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">About Us</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Careers</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Blog</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Press</a></li>
              <li><a href="#" className="text-neutral-400 text-sm font-medium hover:text-white transition duration-200">Store Locations</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Connect</h3>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center hover:bg-navy-700 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center hover:bg-navy-700 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-navy-600 rounded-full flex items-center justify-center hover:bg-navy-700 transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
            <h4 className="text-white text-sm font-medium mb-3">Download App</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 px-4 py-2.5 rounded-xl transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-white text-sm font-medium">App Store</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 bg-navy-600 hover:bg-navy-700 px-4 py-2.5 rounded-xl transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="white">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <span className="text-white text-sm font-medium">Google Play</span>
              </a>
            </div>
          </div>

          {/* Secure Payments */}
          <div>
            <h3 className="text-white text-base font-bold mb-5">Secure Payments</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-navy-600 px-3 py-1.5 rounded-lg text-white text-xs font-bold">VISA</span>
              <span className="bg-navy-600 px-3 py-1.5 rounded-lg text-white text-xs font-bold">Mastercard</span>
              <span className="bg-navy-600 px-3 py-1.5 rounded-lg text-white text-xs font-bold">Apple Pay</span>
              <span className="bg-navy-600 px-3 py-1.5 rounded-lg text-white text-xs font-bold">KNET</span>
              <span className="bg-navy-600 px-3 py-1.5 rounded-lg text-white text-xs font-bold">Mada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-600">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm font-medium">&copy; Spirit Healthcare 2026. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-neutral-500 text-xs font-medium hover:text-white transition duration-200">Privacy Policy</a>
              <a href="#" className="text-neutral-500 text-xs font-medium hover:text-white transition duration-200">Terms of Service</a>
              <a href="#" className="text-neutral-500 text-xs font-medium hover:text-white transition duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IndexSectionCustomComponents10;
