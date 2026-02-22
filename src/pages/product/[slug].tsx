import React, { useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/src/components/shared/Layout';
import Breadcrumb from '@/src/components/shared/Breadcrumb';
import StarRating from '@/src/components/shared/StarRating';
import { allProducts, detailedProduct, sampleReviews } from '@/src/data/products';
import type { Product, Review } from '@/src/types';

interface ProductPageProps {
  product: Product;
  reviews: Review[];
  relatedProducts: Product[];
}

const TABS = ['Description', 'Usage & Dosage', 'Ingredients', 'Warnings'];

const ProductPage: React.FC<ProductPageProps> = ({ product, reviews, relatedProducts }) => {
  const productImages = product.images && product.images.length > 0 ? product.images : [product.img];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const savePercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const starDistribution = [0, 0, 0, 0, 0];
  reviews.forEach((r) => {
    if (r.rating >= 1 && r.rating <= 5) starDistribution[r.rating - 1]++;
  });

  const tabContent = [
    product.description,
    product.usage || 'No usage information available for this product.',
    product.ingredients || 'No ingredient information available for this product.',
    product.warnings || 'No warnings available for this product.',
  ];

  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: product.category, href: `/category/${product.categorySlug}` },
          { label: product.name },
        ]}
      />

      <div className="container px-4 mx-auto py-6 md:py-10">
        {/* === TOP: Image Gallery + Product Info === */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10">
          {/* Image Gallery */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-contain"
              />
            </div>
            <div className="flex gap-3">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white p-1 transition-all ${
                    selectedImage === img ? 'ring-2 ring-green-500 shadow-md' : 'border border-neutral-200'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            {/* Brand */}
            <Link
              href={`/brand/${product.brandSlug}`}
              className="text-sm font-semibold text-green-600 tracking-wider hover:underline"
            >
              {product.brand}
            </Link>

            {/* Name */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-neutral-900 tracking-tight mt-2 mb-3">
              {product.name}
            </h1>

            {/* Rating Row */}
            <div className="flex items-center flex-wrap gap-3 mb-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-neutral-500 font-medium">({product.reviewCount} reviews)</span>
              <span className="text-xs text-neutral-400 font-medium">SKU: {product.sku}</span>
            </div>

            {/* Price Box */}
            <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
              <div className="flex items-center flex-wrap gap-3 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-neutral-900">
                  {product.price.toFixed(2)} <span className="text-base font-medium text-neutral-500">KWD</span>
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-neutral-400 line-through font-medium">
                    {product.oldPrice.toFixed(2)} KWD
                  </span>
                )}
              </div>
              <div className="flex items-center flex-wrap gap-2">
                {product.loyaltyPoints && (
                  <span className="bg-navy-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Earn {product.loyaltyPoints} Loyalty Points
                  </span>
                )}
                {product.oldPrice && savePercent > 0 && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    SAVE {savePercent}%
                  </span>
                )}
              </div>
            </div>

            {/* Quantity + Cart Row */}
            <div className="flex gap-3 mb-6">
              {/* Qty Selector */}
              <div className="flex items-center border border-neutral-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 md:w-12 md:h-12 bg-neutral-50 hover:bg-neutral-100 font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-semibold text-neutral-900 text-lg">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 md:w-12 md:h-12 bg-neutral-50 hover:bg-neutral-100 font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button className="flex-1 py-3 md:py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 shadow-lg shadow-green-200 transition-all">
                Add to Cart
              </button>

              {/* Wishlist */}
              <button className="w-12 h-12 md:w-14 md:h-14 border border-neutral-200 rounded-full bg-white hover:bg-red-50 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-100">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span className="text-xs font-semibold text-neutral-700 text-center">2hr Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-100">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 4a2 2 0 100 4m0-4a2 2 0 110 4m-2 4h4m-2 0v4m-6-4a6 6 0 1112 0H6z" />
                </svg>
                <span className="text-xs font-semibold text-neutral-700 text-center">Temp Controlled</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-100">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs font-semibold text-neutral-700 text-center">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-neutral-100">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-semibold text-neutral-700 text-center">Genuine Brands</span>
              </div>
            </div>

            {/* Call Pharmacist CTA */}
            <div className="flex items-center gap-3 p-4 bg-navy-500 rounded-2xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Call Our Pharmacist</p>
                <p className="text-neutral-400 text-xs">Need advice? Speak to a licensed pharmacist now.</p>
              </div>
            </div>
          </div>
        </div>

        {/* === TABS SECTION === */}
        <div className="mb-10">
          {/* Tab Bar */}
          <div className="flex border-b border-neutral-200 gap-1">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-3 md:py-4 font-semibold text-xs md:text-sm transition-colors rounded-t-xl ${
                  activeTab === i
                    ? 'bg-white text-green-600 border-b-2 border-green-500'
                    : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="bg-white rounded-b-2xl p-6 md:p-8 shadow-sm">
            <div
              className={`text-sm md:text-base leading-relaxed ${
                activeTab === 3 ? 'text-red-600 font-medium' : 'text-neutral-600'
              }`}
            >
              {tabContent[activeTab]}
            </div>
          </div>
        </div>

        {/* === RELATED PRODUCTS === */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-neutral-900 tracking-tight mb-6">
            Related Products
          </h2>
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {relatedProducts.map((rp) => (
              <div
                key={rp.slug}
                className="flex-shrink-0 w-[46vw] min-w-[170px] sm:w-[200px] md:w-[240px] lg:w-[260px] xl:w-[280px] bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square rounded-xl bg-neutral-50 overflow-hidden mb-3">
                  <Link href={`/product/${rp.slug}`}>
                    <img src={rp.img} alt={rp.name} className="w-full h-full object-cover" />
                  </Link>
                </div>
                <Link
                  href={`/brand/${rp.brandSlug}`}
                  className="text-xs font-medium text-green-600 hover:underline"
                >
                  {rp.brand}
                </Link>
                <Link href={`/product/${rp.slug}`}>
                  <h4 className="text-sm font-semibold text-neutral-900 leading-tight mb-2 mt-1 line-clamp-2 min-h-[2.5rem] hover:text-green-600 transition-colors">
                    {rp.name}
                  </h4>
                </Link>
                <div className="flex items-center gap-1.5 mb-2">
                  <StarRating rating={rp.rating} size="sm" />
                  <span className="text-xs text-neutral-400 font-medium">({rp.reviewCount})</span>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-neutral-900">
                    {rp.price.toFixed(2)} <span className="text-xs font-medium text-neutral-500">KWD</span>
                  </span>
                  {rp.oldPrice && (
                    <span className="text-xs text-neutral-400 line-through">
                      {rp.oldPrice.toFixed(2)} KWD
                    </span>
                  )}
                </div>
                <button className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-full transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* === REVIEWS SECTION === */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-neutral-900 tracking-tight mb-6">
            Customer Reviews
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Star Breakdown */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <span className="text-5xl font-bold text-neutral-900">{product.rating}</span>
                  <span className="text-xl font-medium text-neutral-400">/5</span>
                </div>
                <div className="flex justify-center mb-3">
                  <StarRating rating={product.rating} size="lg" />
                </div>
                <p className="text-sm text-neutral-500 font-medium text-center mb-6">
                  Based on {product.reviewCount} reviews
                </p>

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = starDistribution[star - 1];
                    const pct = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-neutral-600 w-3">{star}</span>
                        <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-neutral-400 w-5 text-right">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Review Cards */}
            <div className="lg:w-2/3 space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center flex-wrap gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-semibold text-sm text-neutral-900">{review.author}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    )}
                    <span className="text-xs text-neutral-400 font-medium ml-auto">{review.date}</span>
                  </div>
                  <div className="mb-2">
                    <StarRating rating={review.rating} size="sm" />
                  </div>
                  <p className="font-semibold text-sm text-neutral-900 mb-1">{review.title}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">{review.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = new Set<string>();
  slugs.add(detailedProduct.slug);
  allProducts.forEach((p) => slugs.add(p.slug));

  const paths = Array.from(slugs).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const slug = params?.slug as string;

  let product: Product | undefined;
  if (slug === detailedProduct.slug) {
    product = detailedProduct;
  } else {
    product = allProducts.find((p) => p.slug === slug);
  }

  if (!product) {
    return { notFound: true };
  }

  const otherProducts = allProducts.filter((p) => p.slug !== slug);
  const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
  const relatedProducts = shuffled.slice(0, 6);

  return {
    props: {
      product,
      reviews: sampleReviews,
      relatedProducts,
    },
  };
};

export default ProductPage;
