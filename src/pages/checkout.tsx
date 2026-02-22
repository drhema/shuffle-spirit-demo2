import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/src/components/shared/Layout';

const sampleCart = [
  { name: 'CeraVe Moisturizing Cream', qty: 2, price: 79.0, img: 'https://picsum.photos/seed/skin1/100/100', slug: 'cerave-moisturizing-cream-473ml' },
  { name: 'Nature Made Vitamin D3', qty: 1, price: 45.0, img: 'https://picsum.photos/seed/vit2/100/100', slug: 'nature-made-vitamin-d3-5000iu' },
  { name: 'Bioderma Sensibio H2O', qty: 1, price: 95.0, img: 'https://picsum.photos/seed/skin3/100/100', slug: 'bioderma-sensibio-h2o-500ml' },
];

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = sampleCart.reduce((s, item) => s + item.price * item.qty, 0);
  const shipping = subtotal > 50 ? 0 : 3.5;
  const total = subtotal + shipping;

  return (
    <Layout>
      <Head>
        <title>Checkout — Spirit Healthcare</title>
      </Head>

      <div className="bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6" /></svg>
            <span className="text-neutral-900 font-medium">Checkout</span>
          </nav>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-0 mb-10">
            {['Shipping', 'Payment', 'Review'].map((label, i) => (
              <div key={label} className="flex items-center">
                <button
                  onClick={() => setStep(i + 1)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${step === i + 1 ? 'bg-green-600 text-white' : step > i + 1 ? 'bg-green-100 text-green-700' : 'bg-neutral-200 text-neutral-500'}`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === i + 1 ? 'bg-white text-green-600' : step > i + 1 ? 'bg-green-600 text-white' : 'bg-neutral-300 text-neutral-600'}`}>
                    {step > i + 1 ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    ) : i + 1}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
                {i < 2 && <div className={`w-8 md:w-16 h-0.5 mx-1 ${step > i + 1 ? 'bg-green-400' : 'bg-neutral-200'}`} />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column — Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Shipping Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">First Name</label>
                      <input type="text" placeholder="Ahmad" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Last Name</label>
                      <input type="text" placeholder="Al-Sabah" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                      <input type="email" placeholder="ahmad@example.com" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                      <div className="flex gap-2">
                        <span className="flex items-center px-4 py-3 bg-neutral-100 border border-neutral-200 rounded-xl text-sm text-neutral-600 font-medium">+965</span>
                        <input type="tel" placeholder="9876 5432" className="flex-1 px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Delivery Address</label>
                      <input type="text" placeholder="Block 5, Street 10, House 24" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Area</label>
                      <select className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white">
                        <option>Select Area</option>
                        <option>Salmiya</option>
                        <option>Hawalli</option>
                        <option>Kuwait City</option>
                        <option>Farwaniya</option>
                        <option>Jahra</option>
                        <option>Ahmadi</option>
                        <option>Mangaf</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Governorate</label>
                      <select className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white">
                        <option>Select Governorate</option>
                        <option>Capital</option>
                        <option>Hawalli</option>
                        <option>Farwaniya</option>
                        <option>Mubarak Al-Kabeer</option>
                        <option>Ahmadi</option>
                        <option>Jahra</option>
                      </select>
                    </div>
                  </div>

                  {/* Delivery Options */}
                  <h3 className="text-base font-bold text-neutral-900 mt-8 mb-4">Delivery Option</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-start gap-3 p-4 border-2 border-green-500 bg-green-50 rounded-xl cursor-pointer">
                      <input type="radio" name="delivery" defaultChecked className="mt-1 accent-green-600" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">Standard Delivery</p>
                        <p className="text-xs text-neutral-500">2-3 business days</p>
                        <p className="text-sm font-bold text-green-600 mt-1">FREE over 50 KWD</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-4 border-2 border-neutral-200 rounded-xl cursor-pointer hover:border-neutral-300 transition">
                      <input type="radio" name="delivery" className="mt-1 accent-green-600" />
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">Express Delivery</p>
                        <p className="text-xs text-neutral-500">Same day (order before 2PM)</p>
                        <p className="text-sm font-bold text-neutral-900 mt-1">5.000 KWD</p>
                      </div>
                    </label>
                  </div>

                  <button onClick={() => setStep(2)} className="w-full mt-6 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors">
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Payment Method</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[
                      { id: 'card', label: 'Credit Card', icon: 'VISA' },
                      { id: 'knet', label: 'KNET', icon: 'KNET' },
                      { id: 'apple', label: 'Apple Pay', icon: 'Apple' },
                      { id: 'cod', label: 'Cash on Delivery', icon: 'COD' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setPaymentMethod(m.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${paymentMethod === m.id ? 'border-green-500 bg-green-50' : 'border-neutral-200 hover:border-neutral-300'}`}
                      >
                        <span className="block text-lg font-bold text-neutral-900">{m.icon}</span>
                        <span className="text-xs text-neutral-500 mt-1">{m.label}</span>
                      </button>
                    ))}
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Card Number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Expiry Date</label>
                          <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1.5">CVV</label>
                          <input type="text" placeholder="123" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Name on Card</label>
                        <input type="text" placeholder="AHMAD AL-SABAH" className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'knet' && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-blue-600">K</span>
                      </div>
                      <p className="text-neutral-600 text-sm">You will be redirected to KNET payment gateway</p>
                    </div>
                  )}

                  {paymentMethod === 'apple' && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                      </div>
                      <p className="text-neutral-600 text-sm">You will be prompted to confirm with Apple Pay</p>
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      </div>
                      <p className="text-neutral-600 text-sm">Pay with cash when your order is delivered</p>
                      <p className="text-neutral-400 text-xs mt-1">Additional 1.000 KWD COD fee applies</p>
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(1)} className="flex-1 py-3.5 border border-neutral-200 text-neutral-700 font-semibold rounded-full hover:bg-neutral-50 transition-colors">
                      Back
                    </button>
                    <button onClick={() => setStep(3)} className="flex-1 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors">
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Order Review</h2>

                  {/* Shipping Summary */}
                  <div className="flex items-start justify-between p-4 bg-neutral-50 rounded-xl mb-4">
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Shipping to</p>
                      <p className="text-sm text-neutral-600 mt-1">Ahmad Al-Sabah</p>
                      <p className="text-sm text-neutral-500">Block 5, Street 10, House 24, Salmiya</p>
                      <p className="text-sm text-neutral-500">+965 9876 5432</p>
                    </div>
                    <button onClick={() => setStep(1)} className="text-green-600 text-sm font-semibold hover:underline">Edit</button>
                  </div>

                  {/* Payment Summary */}
                  <div className="flex items-start justify-between p-4 bg-neutral-50 rounded-xl mb-6">
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Payment</p>
                      <p className="text-sm text-neutral-600 mt-1">
                        {paymentMethod === 'card' && 'Credit Card ending in ****3456'}
                        {paymentMethod === 'knet' && 'KNET Payment'}
                        {paymentMethod === 'apple' && 'Apple Pay'}
                        {paymentMethod === 'cod' && 'Cash on Delivery'}
                      </p>
                    </div>
                    <button onClick={() => setStep(2)} className="text-green-600 text-sm font-semibold hover:underline">Edit</button>
                  </div>

                  {/* Items */}
                  <h3 className="text-base font-bold text-neutral-900 mb-4">Items ({sampleCart.length})</h3>
                  <div className="space-y-4 mb-6">
                    {sampleCart.map((item) => (
                      <div key={item.slug} className="flex items-center gap-4 p-3 rounded-xl border border-neutral-100">
                        <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <Link href={`/product/${item.slug}`} className="text-sm font-semibold text-neutral-900 hover:text-green-600 transition-colors line-clamp-1">{item.name}</Link>
                          <p className="text-xs text-neutral-500 mt-0.5">Qty: {item.qty}</p>
                        </div>
                        <p className="text-sm font-bold text-neutral-900 whitespace-nowrap">{(item.price * item.qty).toFixed(3)} KWD</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setStep(2)} className="flex-1 py-3.5 border border-neutral-200 text-neutral-700 font-semibold rounded-full hover:bg-neutral-50 transition-colors">
                      Back
                    </button>
                    <button className="flex-1 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors">
                      Place Order — {total.toFixed(3)} KWD
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column — Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-neutral-900 mb-5">Order Summary</h3>
                <div className="space-y-3 mb-5">
                  {sampleCart.map((item) => (
                    <div key={item.slug} className="flex items-center gap-3">
                      <div className="relative">
                        <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-navy-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{item.qty}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-900 font-medium line-clamp-1">{item.name}</p>
                      </div>
                      <p className="text-sm font-semibold text-neutral-900 whitespace-nowrap">{(item.price * item.qty).toFixed(3)}</p>
                    </div>
                  ))}
                </div>

                {/* Coupon */}
                <div className="flex gap-2 mb-5">
                  <input type="text" placeholder="Coupon code" className="flex-1 px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" />
                  <button className="px-5 py-2.5 bg-navy-500 text-white text-sm font-semibold rounded-xl hover:bg-navy-600 transition-colors">Apply</button>
                </div>

                <div className="border-t border-neutral-100 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Subtotal</span>
                    <span className="font-medium text-neutral-900">{subtotal.toFixed(3)} KWD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Shipping</span>
                    <span className={`font-medium ${shipping === 0 ? 'text-green-600' : 'text-neutral-900'}`}>{shipping === 0 ? 'FREE' : `${shipping.toFixed(3)} KWD`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Discount</span>
                    <span className="font-medium text-neutral-900">0.000 KWD</span>
                  </div>
                </div>

                <div className="border-t border-neutral-100 mt-4 pt-4">
                  <div className="flex justify-between">
                    <span className="text-base font-bold text-neutral-900">Total</span>
                    <span className="text-xl font-bold text-green-600">{total.toFixed(3)} KWD</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-2 mt-5">
                  <div className="flex items-center gap-2 p-2.5 bg-neutral-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <span className="text-[11px] font-medium text-neutral-600">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-neutral-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    <span className="text-[11px] font-medium text-neutral-600">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-neutral-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    <span className="text-[11px] font-medium text-neutral-600">Easy Returns</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-neutral-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-[11px] font-medium text-neutral-600">100% Genuine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
