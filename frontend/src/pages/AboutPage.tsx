import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutTeam from "@/components/AboutTeam";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-10 md:pt-32 md:pb-20 text-center border-b border-gray-100">
        <h1 className="text-3xl md:text-3xl font-medium text-[#444] mb-8 md:mb-16 leading-snug">
          We pioneered the discount broking model in India.<br className="hidden md:block" />
          Now, we are breaking ground with our technology.
        </h1>

        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left text-[#444] leading-7 md:leading-8 text-sm md:text-[17px]">
          <div>
            <p className="mb-4">
              We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p className="mb-4">
              Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div>
            <p className="mb-4">
              In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
            </p>
            <p className="mb-4">
              <a href="https://rainmatter.com/" className="text-[#387ed1] hover:text-black transition-colors font-medium">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="https://zerodha.com/z-connect" className="text-[#387ed1] hover:text-black transition-colors font-medium">blog</a> or see what the media is <a href="https://zerodha.com/media" className="text-[#387ed1] hover:text-black transition-colors font-medium">saying about us</a> or learn more about our business and product <a href="https://zerodha.com/about/philosophy/" className="text-[#387ed1] hover:text-black transition-colors font-medium">philosophies</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 text-center">
        <h2 className="text-3xl md:text-[32px] text-[#444] font-medium mb-12">People</h2>
        <AboutTeam />
      </div>

      <Footer />
    </>
  );
}