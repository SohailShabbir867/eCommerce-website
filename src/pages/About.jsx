import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] py-12 px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-extrabold text-[#0B1D51] text-center">About Us</h1>

        {/* Website Info */}
        <section className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#0B1D51]">Who We Are</h2>
          <p className="text-gray-700 text-lg">
            Welcome to <span className="font-semibold text-[#0B1D51]">AppleHub</span> – your trusted destination for the latest and greatest in Apple technology.
            We are passionate about bringing you the newest devices like iPhones, MacBooks, iPads, and more at the best possible prices.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#0B1D51]">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To make premium Apple products accessible and affordable, with a focus on top-notch customer service and a seamless shopping experience.
          </p>
        </section>

        {/* Website Rules & Policies */}
        <section className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#0B1D51]">Policies & Guidelines</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
            <li><span className="font-semibold">Return Policy:</span> Products can be returned within 14 days if unused and in original packaging.</li>
            <li><span className="font-semibold">Warranty:</span> All products come with a 1-year manufacturer warranty.</li>
            <li><span className="font-semibold">Shipping:</span> We offer fast and reliable delivery across the country. Free shipping on orders above $500.</li>
            <li><span className="font-semibold">Secure Payments:</span> Your payment information is encrypted and 100% secure.</li>
            <li><span className="font-semibold">Customer Support:</span> Reach us via email or chat for any order-related queries or product information.</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#0B1D51]">Contact Us</h2>
          <p className="text-gray-700 text-lg">Have questions? We're here to help:</p>
          <ul className="text-gray-700 text-lg space-y-1">
            <li>Email: support@applehub.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Live Chat: Available 9AM – 6PM (Mon–Fri)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
