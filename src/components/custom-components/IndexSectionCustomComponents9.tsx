import React from 'react';
import Link from 'next/link';

const categorySlugMap: Record<string, string> = {
  'Fragrances': '/category/fragrances',
  'Baby Care & Diapers': '/category/baby-care',
  'Vitamins': '/category/vitamins-supplements',
  'Skin Care': '/category/skincare',
  'Baby Accessories': '/category/baby-care',
  'Personal Care': '/category/personal-care',
  'Hair Care': '/category/hair-care',
  'Baby Milk & Food': '/category/baby-care',
  'Sport Nutrition': '/category/sport-nutrition',
};

const categories = [
  { title: 'Fragrances', items: ['For Her', 'For Him', 'Unisex', 'Orientals', 'Kids Fragrances', 'Gift Set', 'Niche Fragrances', 'Hair Mist'] },
  { title: 'Makeup', items: ['Lipstick', 'Eye Makeup', 'Face Makeup', 'Nail Colors', 'Eye Lashes', 'Contact Lenses', 'Makeup Tools', 'Beauty Accessories'] },
  { title: 'Baby Care & Diapers', items: ['Regular Diapers', 'Pants Diapers', 'Premium Diapers', 'Baby Shampoo', 'Baby Skin Care', 'Kids Care (+3 years)', 'Baby Wipes', 'Baby Grooming'] },
  { title: 'Vitamins', items: ['Hair Vitamins', 'Skin Radiance', 'Multivitamins', 'Weight Control', 'Pregnancy Care', "Kids' Health", 'Sleep Aids', 'Heart Health'] },
  { title: 'Skin Care', items: ['Moisturizers', 'Cleansers', 'Sun Care', 'Brightening', 'Serum', 'Korean Beauty', 'Masks', 'Natural Beauty'] },
  { title: 'Baby Accessories', items: ['Strollers', 'Baby Safety', 'Toys', 'Baby Carrier', 'Car Seat', 'Baby Walker', 'Bouncers & Swingers', 'Baby Beds'] },
  { title: 'Personal Care', items: ['Deodorants', 'Hair Removal', 'Oral Care', 'Lady Care', 'Bath & Body', 'Hygienic Care', 'Blades & Razors'] },
  { title: 'Hair Care', items: ['Shampoo', 'Conditioner', 'Salon Treatment', 'Natural Products', 'Hair Color', 'Hair Treatments', 'Hair Styling', 'Oils & Serums'] },
  { title: 'Baby Milk & Food', items: ['Baby Milk', 'Baby Food', 'Bottles', 'Milk Preparation', 'Pacifiers', 'Meal Accessories', 'Burping Bibs', 'High Chair'] },
  { title: 'Sport Nutrition', items: ['Whey Protein', 'Mass Gainer', 'Creatine', 'BCAA', 'Glutamine', 'Protein Bars', 'Fat Burner', 'Shakers'] },
  { title: 'Healthy Devices', items: ['Diabetic Care', 'Heart Monitors', 'Thermometer', 'Massagers', 'Weighing Scales', 'Health Trackers', 'Home Tests'] },
  { title: 'Home Health Care', items: ['Body Support', 'Cushions & Pillows', 'Face Masks', 'Wound Care', 'Adult Sanitary Care', 'Bathroom Safety'] },
  { title: 'Healthy Nutrition', items: ['Honey', 'Protein Bar', 'Diet Chocolate', 'Hydration Drinks', 'Sweeteners', 'Meal Replacement', 'Herbal Tea'] },
  { title: 'Lady Care', items: ['Sanitary Napkins', 'Blades & Razors', 'Wax & Halawa', 'Electrical Removals', 'Pantyliners', 'Intimate Wash', 'Tampons'] },
  { title: 'Bath & Body', items: ['Salt Bath', 'Body Lotion', 'Body Mist', 'Body Scrub', 'Hand Wash', 'Shower Gel', 'Bar Soap'] },
];

const IndexSectionCustomComponents9: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-2">All Categories</h2>
          <p className="text-neutral-600">Browse our complete product directory</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-x-6 gap-y-8">
          {categories.map((cat) => {
            const catHref = categorySlugMap[cat.title];
            return (
              <div key={cat.title}>
                {catHref ? (
                  <Link href={catHref} className="font-bold text-neutral-900 text-sm mb-3 border-b-2 border-green-500 pb-1 inline-block hover:text-green-600 transition-colors">
                    {cat.title}
                  </Link>
                ) : (
                  <h4 className="font-bold text-neutral-900 text-sm mb-3 border-b-2 border-green-500 pb-1 inline-block">
                    {cat.title}
                  </h4>
                )}
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-neutral-500 text-xs font-medium hover:text-green-600 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents9;
