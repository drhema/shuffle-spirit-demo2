import React from 'react';

const IndexSectionCustomComponents6: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-navy-500">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-heading font-bold tracking-tight mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-neutral-400 mb-6">Get exclusive offers, health tips, and new arrivals straight to your inbox.</p>
          <form action="#">
            <div className="flex flex-wrap -m-2">
              <div className="w-full sm:flex-1 p-2">
                <input
                  className="w-full px-6 py-4 outline-none rounded-full placeholder-neutral-500 font-medium focus:ring-4 focus:ring-green-200 transition duration-200"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full sm:w-auto p-2">
                <button
                  className="flex justify-center items-center text-center w-full h-full px-8 py-4 font-semibold tracking-tight text-lg bg-green-500 hover:bg-green-400 text-white rounded-full focus:ring-4 focus:ring-green-300 transition duration-200"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents6;
