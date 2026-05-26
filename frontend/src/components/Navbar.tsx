import React, { useState } from "react";
import Link from "@/routing/Link";
import { usePathname } from "@/routing/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white border-b border-gray-200 font-sans sticky top-0 z-50">
      {/*  Main Navbar Header */}
      <nav className="max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between bg-white relative z-50">

        {/* Left: Logo */}
        <div className="shrink-0 cursor-pointer">
          <Link href="/">
            <img
              src="/assets/images/logo.svg"
              alt="Zerodha logo"
              className="w-32 md:w-36 h-auto"
            />
          </Link>
        </div>

        {/* Right: Links & Hamburger */}
        <div className="flex items-center gap-8 text-[#444] text-sm font-medium">
          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/open-account" className="hover:text-[#387ed1] transition-colors">Signup</Link>
            <Link href="/about" className={`hover:text-[#387ed1] transition-colors ${pathname === '/about' ? 'text-[#387ed1]' : ''}`}>About</Link>
            <Link href="/products" className={`hover:text-[#387ed1] transition-colors ${pathname === '/products' ? 'text-[#387ed1]' : ''}`}>Products</Link>
            <Link href="/pricing" className={`hover:text-[#387ed1] transition-colors ${pathname === '/pricing' ? 'text-[#387ed1]' : ''}`}>Pricing</Link>
            <Link href="/support" className={`hover:text-[#387ed1] transition-colors ${pathname === '/support' ? 'text-[#387ed1]' : ''}`}>Support</Link>
          </div>

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Expanded Menu Container */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full max-h-[90vh] overflow-y-auto bg-white shadow-lg border-t border-gray-100 py-4 fade-in-animation flex flex-col">
          <div className="max-w-5xl mx-auto px-4 w-full h-full flex flex-col justify-between">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Mobile Nav Links */}
              <div className="grid grid-cols-2 gap-y-2 md:hidden text-[#444] font-medium text-sm">
                <Link href="/open-account" className="hover:text-[#387ed1]">Signup</Link>
                <Link href="/about" className={`hover:text-[#387ed1] ${pathname === '/about' ? 'text-[#387ed1]' : ''}`}>About</Link>
                <Link href="/products" className={`hover:text-[#387ed1] ${pathname === '/products' ? 'text-[#387ed1]' : ''}`}>Products</Link>
                <Link href="/pricing" className={`hover:text-[#387ed1] ${pathname === '/pricing' ? 'text-[#387ed1]' : ''}`}>Pricing</Link>
                <Link href="/support" className={`hover:text-[#387ed1] ${pathname === '/support' ? 'text-[#387ed1]' : ''}`}>Support</Link>
              </div>
              {/* Separator for mobile */}
              <div className="border-t border-gray-100 md:hidden"></div>
              {/* Product Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4 md:gap-8 text-center md:mb-6">
                <MenuItem
                  imagePath="/assets/images/kite-logo.svg"
                  title="Kite"
                  desc="Trading platform"
                />
                <MenuItem
                  imagePath="/assets/images/console.svg"
                  title="Console"
                  desc="Backoffice"
                />
                <MenuItem
                  imagePath="/assets/images/kite-connect.svg"
                  title="Kite Connect"
                  desc="Trading APIs"
                />
                <MenuItem
                  imagePath="/assets/images/coin.svg"
                  title="Coin"
                  desc="Mutual funds"
                />
                <div className="md:hidden contents">
                  <MenuItem
                    imagePath="/assets/images/varsity-logo.png"
                    title="Varsity"
                    desc="Education"
                  />
                  <MenuItem
                    imagePath="/assets/images/tqna.png"
                    title="Trading Q&A"
                    desc="Q&A"
                  />
                </div>
              </div>
              {/* Separator for mobile */}
              <div className="border-t border-gray-100 md:hidden"></div>
              {/* Utilities & Updates */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 text-[#444]">
                {/* Utilities */}
                <div>
                  <h3 className="font-semibold text-base mb-2 sm:mb-4 text-gray-800">Utilities</h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium text-gray-500">
                    <li className="hover:text-[#387ed1] cursor-pointer">Calculators</li>
                    <li className="hover:text-[#387ed1] cursor-pointer">Brokerage calculator</li>
                    <li className="hover:text-[#387ed1] cursor-pointer">Margin calculator</li>
                    <li className="hover:text-[#387ed1] cursor-pointer">SIP calculator</li>
                  </ul>
                </div>
                {/* Updates */}
                <div>
                  <h3 className="font-semibold text-base mb-2 sm:mb-4 text-gray-800">Updates</h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium text-gray-500">
                    <li className="hover:text-[#387ed1] cursor-pointer">Z-Connect blog</li>
                    <li className="hover:text-[#387ed1] cursor-pointer">Circulars / Bulletin</li>
                    <li className="hover:text-[#387ed1] cursor-pointer">IPOs</li>
                    <li className="hover:text-[#387ed1] cursor-pointer">Markets</li>
                  </ul>
                </div>
                {/* Desktop Only Education Section (Hidden on Mobile as it moved to grid) */}
                <div className="hidden md:block">
                  <h3 className="font-semibold text-base mb-2 sm:mb-4 text-gray-800">Education</h3>
                  <div className="flex gap-4 sm:gap-8 mt-2 text-center">
                    <div className="flex flex-col items-center gap-2 cursor-pointer group">
                      <img src="/assets/images/varsity-logo.png" className="w-10 h-10" alt="Varsity" />
                      <span className="text-xs sm:text-sm font-medium text-gray-500 group-hover:text-[#387ed1]">Varsity</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 cursor-pointer group">
                      <img src="/assets/images/tqna.png" className="w-10 h-10" alt="Trading Q&A" />
                      <span className="text-xs sm:text-sm font-medium text-gray-500 group-hover:text-[#387ed1]">Trading Q&A</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

type MenuItemProps = {
  imagePath: string;
  title: string;
  desc: string;
};

const MenuItem = ({ imagePath, title, desc }: MenuItemProps) => {
  return (
    <div className="flex flex-row items-center md:flex-col md:justify-center gap-3 md:gap-4 cursor-pointer group text-left md:text-center">
      {/* Icon */}
      <img
        src={imagePath}
        alt={title}
        className="w-6 h-6 md:w-14 md:h-14 object-contain"
      />
      <div>
        <h4 className="font-medium text-gray-800 text-base md:text-lg group-hover:text-[#387ed1] transition-colors">{title}</h4>
        <p className="text-gray-400 text-xs mt-1 hidden md:block">{desc}</p>
      </div>
    </div>
  );
};

export default Navbar;