import React, { useEffect } from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';
import IndexSectionCustomComponents3 from '../components/custom-components/IndexSectionCustomComponents3';
import IndexSectionCustomComponents4 from '../components/custom-components/IndexSectionCustomComponents4';
import IndexSectionCustomComponents5 from '../components/custom-components/IndexSectionCustomComponents5';

import IndexSectionCustomComponents7 from '../components/custom-components/IndexSectionCustomComponents7';
import IndexSectionCustomComponents8 from '../components/custom-components/IndexSectionCustomComponents8';
import IndexSectionCustomComponents9 from '../components/custom-components/IndexSectionCustomComponents9';
import IndexSectionCustomComponents10 from '../components/custom-components/IndexSectionCustomComponents10';

const Index: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'js/global-18201.js';
    script1.async = true;
    document.head.appendChild(script1);
  }, []);

  return (
    <>
      <Head>
        <title>Spirit Healthcare — Your Health, Our Priority</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/shuffle-for-bootstrap.png" />
      </Head>
      {/* Header */}
      <IndexSectionCustomComponents1 />
      {/* Hero Carousel */}
      <IndexSectionCustomComponents2 />
      {/* Shop by Category */}
      <IndexSectionCustomComponents3 />
      {/* Featured Products */}
      <IndexSectionCustomComponents4 />
      {/* Promo Banners */}
      <IndexSectionCustomComponents7 />
      {/* Trusted Brands */}
      <IndexSectionCustomComponents5 />
      {/* Trending Deals + Product Carousels */}
      <IndexSectionCustomComponents8 />
      {/* Category Navigation Grid */}
      <IndexSectionCustomComponents9 />
      {/* Footer */}
      <IndexSectionCustomComponents10 />
    </>
  );
};

export default Index;
