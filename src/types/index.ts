export interface Product {
  slug: string;
  name: string;
  brand: string;
  brandSlug: string;
  category: string;
  categorySlug: string;
  price: number;
  oldPrice?: number;
  img: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  sku: string;
  loyaltyPoints?: number;
  description: string;
  usage?: string;
  ingredients?: string;
  warnings?: string;
  inStock: boolean;
  productType?: string;
  tags?: string[];
}

export interface Brand {
  slug: string;
  name: string;
  logo: string;
  description: string;
  productCount: number;
  bannerImg?: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  bannerImg: string;
  productCount: number;
  subcategories?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface FilterState {
  priceMin: string;
  priceMax: string;
  brands: string[];
  ratings: number[];
  productTypes: string[];
}

export type SortOption = 'best-seller' | 'price-low-high' | 'price-high-low' | 'newest' | 'rating';
