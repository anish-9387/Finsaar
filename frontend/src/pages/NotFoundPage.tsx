import React from 'react';
import Link from '@/routing/Link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl text-[#444] font-medium mb-4">404</h1>
        <h2 className="text-xl text-[#666] font-medium mb-6">Couldn't find that page</h2>
        <p className="text-[#666] mb-8">
          We couldn't find the page you were looking for. <br />
          Visit <Link href="/" className="text-[#387ed1] hover:text-black transition-colors">Zerodhaâ€™s home page</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}