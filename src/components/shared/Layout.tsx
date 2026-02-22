import React from 'react';
import IndexSectionCustomComponents1 from '@/src/components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents10 from '@/src/components/custom-components/IndexSectionCustomComponents10';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <IndexSectionCustomComponents1 />
      <main className="min-h-screen bg-neutral-50">{children}</main>
      <IndexSectionCustomComponents10 />
    </>
  );
};

export default Layout;
