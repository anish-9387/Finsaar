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
              <a href="https://zrd.sh/signup" className="hover:no-underline">Track account opening</a>
              <a href="https://zrd.sh/segment-activation" className="hover:no-underline">Track segment activation</a>
              <a href="https://zrd.sh/latest-leverage" className="hover:no-underline">Intraday margins</a>
              <a href="https://zrd.sh/kite-manual" className="hover:no-underline">Kite user manual</a>
              <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha" className="hover:no-underline">Learn how to create a ticket</a>
            </div>
          </div>

          {/* Featured */}
          <div className="md:pl-16">
            <h3 className="text-xl font-medium mb-6">Featured</h3>
            <ol className="list-decimal list-inside space-y-4 text-left">
              <li><a href="https://zerodha.com/marketintel/bulletin/447412/surveillance-measure-on-scrips-may-2026" className="underline hover:no-underline">Surveillance measure on scrips - May 2026</a></li>
              <li><a href="https://zerodha.com/marketintel/bulletin/448664/offer-for-sale-ofs-may-2026" className="underline hover:no-underline">Offer for sale (OFS) - May 2026</a></li>
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
              <a href="https://support.zerodha.com/category/account-opening/resident-individual" className="hover:text-black">Resident individual</a>
              <a href="https://support.zerodha.com/category/account-opening/minor" className="hover:text-black">Minor</a>
              <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" className="hover:text-black">Non Resident Indian (NRI)</a>
              <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" className="hover:text-black">Company, Partnership, HUF and LLP</a>
              <a href="https://support.zerodha.com/category/account-opening/glossary" className="hover:text-black">Glossary</a>
            </div>
          </div>

          {/* Your Zerodha Account */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Your Zerodha Account
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile" className="hover:text-black">Your Profile</a>
              <a href="https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition" className="hover:text-black">Account modification</a>
              <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details" className="hover:text-black">Client Master Report (CMR) and Depository Participant (DP)</a>
              <a href="https://support.zerodha.com/category/your-zerodha-account/nomination-process" className="hover:text-black">Nomination</a>
              <a href="https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares" className="hover:text-black">Transfer and conversion of securities</a>
            </div>
          </div>

          {/* Trading and Markets */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Kite
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="https://support.zerodha.com/category/trading-and-markets/ipo" className="hover:text-black">IPO</a>
              <a href="https://support.zerodha.com/category/trading-and-markets/trading-faqs" className="hover:text-black">Trading FAQs</a>
              <a href="https://support.zerodha.com/category/trading-and-markets/margins" className="hover:text-black">Margin Trading Facility (MTF) and Margins</a>
              <a href="https://support.zerodha.com/category/trading-and-markets/charts-and-orders" className="hover:text-black">Charts and orders</a>
              <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges" className="hover:text-black">Alerts and Nudges</a>
              <a href="https://support.zerodha.com/category/trading-and-markets/general-kite" className="hover:text-black">General</a>
            </div>
          </div>

          {/* Funds */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Funds
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="https://support.zerodha.com/category/funds/adding-funds" className="hover:text-black">Add money</a>
              <a href="https://support.zerodha.com/category/funds/fund-withdrawal" className="hover:text-black">Withdraw money</a>
              <a href="https://support.zerodha.com/category/funds/adding-bank-accounts" className="hover:text-black">Add bank accounts</a>
              <a href="https://support.zerodha.com/category/funds/mandate" className="hover:text-black">eMandates</a>
            </div>
          </div>

          {/* Console */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Console
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="https://support.zerodha.com/category/console/portfolio" className="hover:text-black">Portfolio</a>
              <a href="https://support.zerodha.com/category/console/corporate-actions" className="hover:text-black">Corporate actions</a>
              <a href="https://support.zerodha.com/category/console/ledger" className="hover:text-black">Funds statement</a>
              <a href="https://support.zerodha.com/category/console/reports" className="hover:text-black">Reports</a>
              <a href="https://support.zerodha.com/category/console/profile" className="hover:text-black">Profile</a>
              <a href="https://support.zerodha.com/category/console/segments" className="hover:text-black">Segments</a>
            </div>
          </div>

          {/* Coin */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-medium text-[#444] mb-4">
              Coin
            </h4>
            <div className="text-[#387ed1] flex flex-col gap-2 text-sm leading-7">
              <a href="https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds" className="hover:text-black">Mutual funds</a>
              <a href="https://support.zerodha.com/category/mutual-funds/nps" className="hover:text-black">National Pension Scheme (NPS)</a>
              <a href="https://support.zerodha.com/category/mutual-funds/fixed-deposits" className="hover:text-black">Fixed Deposit (FD)</a>
              <a href="https://support.zerodha.com/category/mutual-funds/features-on-coin" className="hover:text-black">Features on Coin</a>
              <a href="https://support.zerodha.com/category/mutual-funds/payments-and-orders" className="hover:text-black">Payments and orders</a>
              <a href="https://support.zerodha.com/category/mutual-funds/coin-general" className="hover:text-black">General</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}