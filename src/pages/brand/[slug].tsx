import React, { useState, useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/src/components/shared/Layout';
import Breadcrumb from '@/src/components/shared/Breadcrumb';
import ProductCard from '@/src/components/shared/ProductCard';
import FilterSidebar from '@/src/components/shared/FilterSidebar';
import SortDropdown from '@/src/components/shared/SortDropdown';
import { allBrands } from '@/src/data/brands';
import { allProducts } from '@/src/data/products';
import type { Brand, Product, FilterState, SortOption } from '@/src/types';

interface BrandPageProps {
  brand: Brand;
  products: Product[];
}

const BrandPage: React.FC<BrandPageProps> = ({ brand, products }) => {
  const [filters, setFilters] = useState<FilterState>({
    priceMin: '',
    priceMax: '',
    brands: [],
    ratings: [],
    productTypes: [],
  });
  const [sort, setSort] = useState<SortOption>('best-seller');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const availableTypes = useMemo(() => {
    const types = Array.from(new Set(products.map((p) => p.productType).filter(Boolean))) as string[];
    return types.sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.priceMin) {
      const min = parseFloat(filters.priceMin);
      result = result.filter((p) => p.price >= min);
    }
    if (filters.priceMax) {
      const max = parseFloat(filters.priceMax);
      result = result.filter((p) => p.price <= max);
    }
    if (filters.ratings.length > 0) {
      const minRating = Math.min(...filters.ratings);
      result = result.filter((p) => p.rating >= minRating);
    }
    if (filters.productTypes.length > 0) {
      result = result.filter((p) => p.productType && filters.productTypes.includes(p.productType));
    }

    switch (sort) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.sku.localeCompare(a.sku));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'best-seller':
      default:
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [products, filters, sort]);

  const displayProducts = filteredProducts;
  const bannerImage = brand.bannerImg || `https://picsum.photos/seed/${brand.slug}-banner/1200/400`;

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <Head>
        <title>{brand.name} | Spirit Healthcare</title>
        <meta name="description" content={brand.description} />
      </Head>

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Brands', href: '/brands' },
          { label: brand.name },
        ]}
      />

      {/* Brand Banner */}
      <section className="relative overflow-hidden">
        <img
          src={bannerImage}
          alt={`${brand.name} banner`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/90 to-neutral-900/50" />

        <div className="relative container px-4 mx-auto py-10 md:py-14 flex items-center gap-8">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-4 shadow-lg flex-shrink-0 flex items-center justify-center">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight">
              {brand.name}
            </h1>
            <p className="text-neutral-300 font-medium mt-2 max-w-xl text-sm md:text-base">
              {brand.description}
            </p>
            <span className="inline-block mt-3 px-4 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full">
              {filteredProducts.length} Products
            </span>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <div className="container px-4 mx-auto py-4 flex items-center justify-between">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-navy-500 text-white rounded-full font-medium text-sm hover:bg-navy-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Filters
        </button>
        <span className="text-sm font-medium text-neutral-500 hidden lg:block">
          Showing {filteredProducts.length} results
        </span>
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      {/* Content area */}
      <div className="container px-4 mx-auto pb-12 flex gap-6">
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          availableBrands={[]}
          availableTypes={availableTypes}
          isMobileOpen={mobileFilterOpen}
          onMobileClose={() => setMobileFilterOpen(false)}
        />

        <div className="flex-1">
          {displayProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {displayProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  slug={product.slug}
                  name={product.name}
                  brand={product.brand}
                  brandSlug={product.brandSlug}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  img={product.img}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
              <p className="text-lg font-bold text-neutral-900">No products found</p>
              <p className="text-sm font-medium text-neutral-500 mt-2">
                Try adjusting your filters to find what you are looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allBrands.map((brand) => ({
    params: { slug: brand.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BrandPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const brand = allBrands.find((b) => b.slug === slug);

  if (!brand) {
    return { notFound: true };
  }

  const products = allProducts.filter((p) => p.brandSlug === slug);

  return {
    props: {
      brand,
      products,
    },
  };
};

export default BrandPage;
