import React from 'react';
import Link from 'next/link';
import StarRating from './StarRating';

interface ProductCardProps {
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  price: number;
  oldPrice?: number;
  img: string;
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  name,
  brand,
  brandSlug,
  price,
  oldPrice,
  img,
  rating,
  reviewCount,
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square rounded-xl bg-neutral-50 overflow-hidden mb-3">
        <Link href={`/product/${slug}`}>
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        </Link>
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-neutral-300 hover:text-red-500 hover:bg-red-50 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Brand */}
      <Link
        href={`/brand/${brandSlug}`}
        className="text-xs font-medium text-green-600 hover:underline"
      >
        {brand}
      </Link>

      {/* Product Name */}
      <Link href={`/product/${slug}`}>
        <h4 className="text-sm font-semibold text-neutral-900 leading-tight mb-2 mt-1 line-clamp-2 min-h-[2.5rem] hover:text-green-600 transition-colors">
          {name}
        </h4>
      </Link>

      {/* Rating */}
      <div className="flex items-center gap-1.5 mb-2">
        <StarRating rating={rating} size="sm" />
        <span className="text-xs text-neutral-400 font-medium">({reviewCount})</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-lg font-bold text-neutral-900">
          {price.toFixed(2)} <span className="text-xs font-medium text-neutral-500">KWD</span>
        </span>
        {oldPrice && (
          <span className="text-xs text-neutral-400 line-through">
            {oldPrice.toFixed(2)} KWD
          </span>
        )}
      </div>

      {/* Add to Cart */}
      <button className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-full transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
