import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
  return (
    <>
      <Navbar />

      {/* Support Hero */}
      <div className="bg-[#387ed1] py-16 text-white text-center md:text-left">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium mb-8">Support Portal</h2>
            <h3 className="text-2xl md:text-3xl font-light mb-4 text-white">Search for an answer or browse help topics to create a ticket</h3>

            <div className="relative mt-8">
              <input
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order rejected..."
                className="w-full py-4 px-4 pr-12 rounded bg-white text-gray-800 focus:outline-none"
              />
              <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex gap-6 mt-6 text-sm underline flex-wrap justify-center md:justify-start">
              <a href="#" className="hover:no-underline">Track account opening</a>
              <a href="#" className="hover:no-underline">Track segment activation</a>
              <a href="#" className="hover:no-underline">Intraday margins</a>
              <a href="#" className="hover:no-underline">Kite user manual</a>
            </div>
          </div>

          {/* Featured */}
          <div className="md:pl-16">
            <h3 className="text-xl font-medium mb-6">Featured</h3>
            <ol className="list-decimal list-inside space-y-4 text-left">
              <li><a href="#" className="underline hover:no-underline">Suspension of trading - IDFC Limited</a></li>
              <li><a href="#" className="underline hover:no-underline">Rights Entitlements listing in October 2024</a></li>
            </ol>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-xl text-[#666] font-normal mb-10">To create a ticket, select a relevant topic</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
          {/* Account Opening */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              <span className="text-2xl"><i className="fa-regular fa-user"></i></span> Account Opening
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="#" className="hover:text-black">Getting started</a>
              <a href="#" className="hover:text-black">Online</a>
              <a href="#" className="hover:text-black">Offline</a>
              <a href="#" className="hover:text-black">Charges</a>
              <a href="#" className="hover:text-black">Company, Partnership and HUF</a>
              <a href="#" className="hover:text-black">Non Resident Indian (NRI)</a>
            </div>
          </div>

          {/* Your Zerodha Account */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Your Zerodha Account
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="#" className="hover:text-black">Login credentials</a>
              <a href="#" className="hover:text-black">Your Profile</a>
              <a href="#" className="hover:text-black">Account modification and segmentation</a>
              <a href="#" className="hover:text-black">CMR & DP ID</a>
              <a href="#" className="hover:text-black">Nomination</a>
              <a href="#" className="hover:text-black">Transfer and conversion of shares</a>
            </div>
          </div>

          {/* Trading and Markets */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Trading and Markets
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="#" className="hover:text-black">Trading FAQs</a>
              <a href="#" className="hover:text-black">Kite</a>
              <a href="#" className="hover:text-black">Margins</a>
              <a href="#" className="hover:text-black">Product and order types</a>
              <a href="#" className="hover:text-black">Corporate actions</a>
              <a href="#" className="hover:text-black">Kite features</a>
            </div>
          </div>

          {/* Funds */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Funds
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="#" className="hover:text-black">Fund withdrawal</a>
              <a href="#" className="hover:text-black">Adding funds</a>
              <a href="#" className="hover:text-black">Adding bank accounts</a>
              <a href="#" className="hover:text-black">eMandates</a>
            </div>
          </div>

          {/* Console */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Console
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="#" className="hover:text-black">IPO</a>
              <a href="#" className="hover:text-black">Portfolio</a>
              <a href="#" className="hover:text-black">Funds statement</a>
              <a href="#" className="hover:text-black">Profile</a>
              <a href="#" className="hover:text-black">Reports</a>
              <a href="#" className="hover:text-black">Referral program</a>
            </div>
          </div>

          {/* Coin */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Coin
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="#" className="hover:text-black">Understanding mutual funds and Coin</a>
              <a href="#" className="hover:text-black">Coin app</a>
              <a href="#" className="hover:text-black">Coin web</a>
              <a href="#" className="hover:text-black">Transactions and reports</a>
              <a href="#" className="hover:text-black">National Pension Scheme (NPS)</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}