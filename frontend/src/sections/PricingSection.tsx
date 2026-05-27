import React from 'react'

const PricingSection = () => {
  return (
    <div className="w-full py-18 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-4 md:px-0 px-4 py-0 md:py-6">
        {/* Left: Heading and description */}
        <div className="flex-1 min-w-55 max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 md:mb-8 text-gray-900">Unbeatable pricing</h2>
          <p className="text-gray-700 text-sm sm:text-base -mb-6 md:mb-6">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="/pricing" className="hidden lg:flex text-blue-600 font-medium items-center gap-2 group w-fit">
            See pricing <span className="group-hover:translate-x-1 transition-transform"><i className="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
        {/* Right: Pricing cards */}
        <div className="flex flex-col xs:flex-row sm:flex-row gap-0 md:gap-10 w-full md:w-full lg:flex-1 justify-start">
          {/* Card 1 */}
          <div className="flex flex-row items-center">
            <img src="/assets/images/pricing0.svg" alt="₹0" className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-32 lg:h-32" />
            <span className="text-gray-500 text-[9px] sm:text-[10px] md:text-[9px] lg:text-xs text-left -ml-3 sm:-ml-4">Free account<br />opening</span>
          </div>
          {/* Card 2 */}
          <div className="flex flex-row items-center">
            <img src="/assets/images/pricingEquity.svg" alt="₹0" className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-32 lg:h-32" />
            <span className="text-gray-500 text-[9px] sm:text-[10px] md:text-[9px] lg:text-xs text-left -ml-3 sm:-ml-4">Free equity delivery<br />and direct mutual funds</span>
          </div>
          {/* Card 3 */}
          <div className="flex flex-row items-center">
            <img src="/assets/images/pricing_intraday.svg" alt="₹20" className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-32 lg:h-32" />
            <span className="text-gray-500 text-[9px] sm:text-[10px] md:text-[9px] lg:text-xs text-left -ml-3 sm:-ml-4">Intraday and<br />F&amp;O</span>
          </div>
        </div>
        {/* See pricing for mobile */}
        <div className="flex w-full lg:hidden -mt-10 justify-start">
          <a href="#" className="text-blue-600 font-medium flex items-center gap-2 group w-fit">
            See pricing <span className="group-hover:translate-x-1 transition-transform"><i className="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PricingSection;