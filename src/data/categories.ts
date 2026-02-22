import type { Category } from '../types';

export const allCategories: Category[] = [
  {
    slug: 'vitamins-supplements',
    name: 'Vitamins & Supplements',
    description:
      'Browse a wide range of vitamins, minerals, and dietary supplements from trusted brands to support your daily health and wellness goals.',
    bannerImg: 'https://picsum.photos/seed/catvitamins/1200/400',
    productCount: 156,
    subcategories: [
      'Multivitamins',
      'Vitamin C',
      'Vitamin D',
      'Omega-3 & Fish Oil',
      'Probiotics',
      'Minerals',
      'Herbal Supplements',
      'Protein & Amino Acids',
    ],
  },
  {
    slug: 'skincare',
    name: 'Skincare',
    description:
      'Discover dermatologist-recommended cleansers, moisturizers, serums, and treatments for every skin type and concern.',
    bannerImg: 'https://picsum.photos/seed/catskincare/1200/400',
    productCount: 210,
    subcategories: [
      'Moisturizers',
      'Cleansers',
      'Serums & Treatments',
      'Sunscreen',
      'Eye Care',
      'Lip Care',
      'Masks & Exfoliators',
    ],
  },
  {
    slug: 'cold-flu',
    name: 'Cold & Flu',
    description:
      'Find effective relief from cold and flu symptoms including nasal congestion, sore throat, cough, and fever.',
    bannerImg: 'https://picsum.photos/seed/catcoldflu/1200/400',
    productCount: 78,
    subcategories: [
      'Nasal Decongestants',
      'Cough Syrups',
      'Throat Lozenges',
      'Pain & Fever Relief',
      'Flu Combination Packs',
      'Vapour Rubs',
    ],
  },
  {
    slug: 'personal-care',
    name: 'Personal Care',
    description:
      'Shop everyday essentials including oral care, body wash, deodorants, and hygiene products for the whole family.',
    bannerImg: 'https://picsum.photos/seed/catpersonal/1200/400',
    productCount: 185,
    subcategories: [
      'Oral Care',
      'Body Wash & Soap',
      'Deodorants',
      'Hand Wash & Sanitizers',
      'Shaving & Grooming',
      'Feminine Care',
    ],
  },
  {
    slug: 'baby-care',
    name: 'Baby Care',
    description:
      'Everything your little one needs from diapers and wipes to infant formula, feeding accessories, and gentle skincare.',
    bannerImg: 'https://picsum.photos/seed/catbaby/1200/400',
    productCount: 130,
    subcategories: [
      'Diapers & Wipes',
      'Infant Formula',
      'Baby Skincare',
      'Feeding & Nursing',
      'Baby Health',
      'Bath & Grooming',
    ],
  },
  {
    slug: 'hair-care',
    name: 'Hair Care',
    description:
      'Explore shampoos, conditioners, treatments, and styling products to keep your hair healthy, strong, and beautiful.',
    bannerImg: 'https://picsum.photos/seed/cathaircare/1200/400',
    productCount: 98,
    subcategories: [
      'Shampoo',
      'Conditioner',
      'Hair Treatments & Oils',
      'Styling Products',
      'Hair Colour',
      'Anti-Dandruff',
    ],
  },
  {
    slug: 'fragrances',
    name: 'Fragrances',
    description:
      'Discover a curated collection of perfumes, body mists, and oud-based fragrances for men and women.',
    bannerImg: 'https://picsum.photos/seed/catfragrance/1200/400',
    productCount: 65,
    subcategories: [
      'Women\'s Perfume',
      'Men\'s Perfume',
      'Body Mists',
      'Oud & Oriental',
      'Gift Sets',
      'Travel Size',
    ],
  },
  {
    slug: 'sport-nutrition',
    name: 'Sport Nutrition',
    description:
      'Fuel your fitness with protein powders, energy bars, pre-workouts, and recovery supplements from leading sports nutrition brands.',
    bannerImg: 'https://picsum.photos/seed/catsport/1200/400',
    productCount: 72,
    subcategories: [
      'Protein Powders',
      'Pre-Workout',
      'BCAAs & Amino Acids',
      'Energy Bars & Snacks',
      'Creatine',
      'Recovery & Electrolytes',
    ],
  },
];
