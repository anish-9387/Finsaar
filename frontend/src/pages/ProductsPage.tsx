import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "@/routing/Link";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20 pb-12 md:pt-32 md:pb-20 text-center border-b border-gray-100">
        <h1 className="text-3xl md:text-[44px] font-medium text-[#444] mb-4">Zerodha Products</h1>
        <p className="text-lg md:text-xl text-[#666] mb-8">Sleek, modern, and intuitive trading platforms</p>
        <p className="text-[#444] mb-8">Check out our <a href="#" className="text-[#387ed1] hover:text-black font-medium transition-colors">investment offerings â†’</a></p>
      </div>

      {/* Product: Kite */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/assets/images/kite.png" alt="Kite" className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-medium text-[#444] mb-4">Kite</h1>
          <p className="text-[#666] text-[16px] leading-7 mb-6">
            Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
          </p>
          <div className="flex gap-6 mb-6">
            <Link href="#" className="text-[#387ed1] font-medium hover:text-black">Try demo â†’</Link>
            <Link href="#" className="text-[#387ed1] font-medium hover:text-black">Learn more â†’</Link>
          </div>
          <div className="flex gap-4">
            <img src="/assets/images/googlePlayBadge.svg" alt="Google Play" className="h-10 cursor-pointer" />
            <img src="/assets/images/appstoreBadge.svg" alt="App Store" className="h-10 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Product: Console */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
        <div className="md:order-2">
          <img src="/assets/images/console.png" alt="Console" className="w-full h-auto" />
        </div>
        <div className="md:order-1">
          <h1 className="text-3xl font-medium text-[#444] mb-4">Console</h1>
          <p className="text-[#666] text-[16px] leading-7 mb-6">
            The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
          </p>
          <Link href="#" className="text-[#387ed1] font-medium hover:text-black">Learn more â†’</Link>
        </div>
      </div>

      {/* Product: Coin */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/assets/images/coin.png" alt="Coin" className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-medium text-[#444] mb-4">Coin</h1>
          <p className="text-[#666] text-[16px] leading-7 mb-6">
            Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
          </p>
          <Link href="#" className="text-[#387ed1] font-medium hover:text-black">Coin â†’</Link>
          <div className="flex gap-4 mt-4">
            <img src="/assets/images/googlePlayBadge.svg" alt="Google Play" className="h-10 cursor-pointer" />
            <img src="/assets/images/appstoreBadge.svg" alt="App Store" className="h-10 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Product: Kite Connect */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
        <div className="md:order-2">
          <img src="/assets/images/kiteconnect.png" alt="Kite Connect" className="w-full h-auto" />
        </div>
        <div className="md:order-1">
          <h1 className="text-3xl font-medium text-[#444] mb-4">Kite Connect API</h1>
          <p className="text-[#666] text-[16px] leading-7 mb-6">
            Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
          </p>
          <Link href="#" className="text-[#387ed1] font-medium hover:text-black">Kite Connect â†’</Link>
        </div>
      </div>

      {/* Universe Section */}
      <div className="py-20 text-center">
        <h2 className="text-3xl text-[#444] font-medium mb-6">The Zerodha Universe</h2>
        <p className="text-[#666] mb-12">Extend your trading and investment experience even further with our partner platforms</p>

        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-2">
            <img src="/assets/images/smallcaseLogo.png" className="h-12 w-auto mb-2" alt="smallcase" />
            <span className="text-xs text-gray-500 font-medium">
              Thematic investing platform
              that helps you invest in diversified
              baskets of stocks on ETFs.</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/assets/images/streakLogo.png" className="h-12 w-auto mb-2" alt="Streak" />
            <span className="text-xs text-gray-500 font-medium">
              Systematic trading platform
              that allows you to create and backtest
              strategies without coding.</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/assets/images/sensibullLogo.svg" className="h-12 w-auto mb-2" alt="Sensibull" />
            <span className="text-xs text-gray-500 font-medium">Options trading platform that lets you
              create strategies, analyze positions, and examine
              data points like open interest, FII/DII, and more.
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/assets/images/zerodhaFundhouse.png" className="h-12 w-auto mb-2" alt="Zerodha Fund House" />
            <span className="text-xs text-gray-500 font-medium">Our asset management venture
              that is creating simple and transparent index
              funds to help you save for your goals.</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/assets/images/goldenpiLogo.png" className="h-12 w-auto mb-2" alt="GoldenPi" />
            <span className="text-xs text-gray-500 font-medium">Investment research platform
              that offers detailed insights on stocks,
              sectors, supply chains, and more.</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="/assets/images/dittoLogo.png" className="h-12 w-auto mb-2" alt="Ditto" />
            <span className="text-xs text-gray-500 font-medium">Personalized advice on life
              and health insurance. No spam
              and no mis-selling.
            </span>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-[#387ed1] text-white px-8 py-3 rounded hover:bg-[#2a5b96] transition-colors font-medium">
            Sign up now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}