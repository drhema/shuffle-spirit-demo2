import React, { useState } from 'react';
import { FilterState } from '@/src/types';
import StarRating from './StarRating';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableBrands: string[];
  availableTypes: string[];
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  availableBrands,
  availableTypes,
  isMobileOpen,
  onMobileClose,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: true,
    brands: true,
    rating: true,
    type: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePriceChange = (field: 'priceMin' | 'priceMax', value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  const handleBrandToggle = (brand: string) => {
    const updated = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: updated });
  };

  const handleRatingToggle = (rating: number) => {
    const updated = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];
    onFilterChange({ ...filters, ratings: updated });
  };

  const handleTypeToggle = (type: string) => {
    const updated = filters.productTypes.includes(type)
      ? filters.productTypes.filter((t) => t !== type)
      : [...filters.productTypes, type];
    onFilterChange({ ...filters, productTypes: updated });
  };

  const clearAll = () => {
    onFilterChange({
      priceMin: '',
      priceMax: '',
      brands: [],
      ratings: [],
      productTypes: [],
    });
  };

  const SectionHeader: React.FC<{ title: string; sectionKey: string }> = ({
    title,
    sectionKey,
  }) => (
    <button
      onClick={() => toggleSection(sectionKey)}
      className="flex items-center justify-between w-full mb-3"
    >
      <span className="font-semibold text-neutral-900 text-sm">
        {title}
      </span>
      <svg
        className={`w-4 h-4 text-neutral-400 transition-transform ${
          openSections[sectionKey] ? 'rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  const filterContent = (
    <div className="space-y-6">
      {/* Header with Clear All */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-neutral-900 text-base">Filters</h3>
        <button onClick={clearAll} className="text-green-600 font-medium text-xs hover:underline">
          Clear All
        </button>
      </div>

      {/* Price Range */}
      <div>
        <SectionHeader title="Price Range" sectionKey="price" />
        {openSections.price && (
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceMin}
              onChange={(e) => handlePriceChange('priceMin', e.target.value)}
              className="w-full py-2 px-3 border border-neutral-200 rounded-lg text-sm font-medium focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-colors bg-white"
            />
            <span className="text-neutral-400 text-sm">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.priceMax}
              onChange={(e) => handlePriceChange('priceMax', e.target.value)}
              className="w-full py-2 px-3 border border-neutral-200 rounded-lg text-sm font-medium focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-colors bg-white"
            />
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <SectionHeader title="Brands" sectionKey="brands" />
        {openSections.brands && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableBrands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                    filters.brands.includes(brand) ? 'bg-green-500 border-green-500' : 'border-neutral-300 bg-white'
                  }`}
                  onClick={() => handleBrandToggle(brand)}
                >
                  {filters.brands.includes(brand) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium text-neutral-700 group-hover:text-green-600 transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div>
        <SectionHeader title="Rating" sectionKey="rating" />
        {openSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map((ratingValue) => (
              <button
                key={ratingValue}
                onClick={() => handleRatingToggle(ratingValue)}
                className={`flex items-center gap-2 w-full py-1.5 px-2 rounded-lg transition-colors ${
                  filters.ratings.includes(ratingValue)
                    ? 'bg-green-50 ring-1 ring-green-200'
                    : 'hover:bg-neutral-50'
                }`}
              >
                <StarRating rating={ratingValue} size="sm" />
                <span className="text-xs font-medium text-neutral-600">&amp; Up</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Type */}
      <div>
        <SectionHeader title="Product Type" sectionKey="type" />
        {openSections.type && (
          <div className="space-y-2">
            {availableTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 border rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                    filters.productTypes.includes(type) ? 'bg-green-500 border-green-500' : 'border-neutral-300 bg-white'
                  }`}
                  onClick={() => handleTypeToggle(type)}
                >
                  {filters.productTypes.includes(type) && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium text-neutral-700 group-hover:text-green-600 transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-32">
          {filterContent}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={onMobileClose}
          />
          <nav className="relative w-full max-w-sm h-full bg-white overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
              <span className="font-bold text-neutral-900 text-lg">Filters</span>
              <button
                onClick={onMobileClose}
                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <svg className="w-4 h-4 text-neutral-600" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Filter Content */}
            <div className="p-4 pb-24">{filterContent}</div>

            {/* Apply Button */}
            <div className="fixed bottom-0 left-0 w-full max-w-sm p-4 bg-white border-t border-neutral-100">
              <button
                onClick={onMobileClose}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-full transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
