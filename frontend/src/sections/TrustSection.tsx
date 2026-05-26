import React from 'react'

const TrustSection = () => {
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-10 lg:px-20">
      <div className='container mx-auto flex flex-col lg:flex-row items-center my-8 lg:my-20 gap-10 lg:gap-0'>
        {/* Left Content */}
        <div className="w-full lg:w-2/5 lg:pr-16 flex flex-col items-start text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 md:mb-8 text-gray-900">Trust with confidence</h1>
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl font-medium mb-2">Customer-first always</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-medium mb-2">No spam or gimmicks</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" className="text-blue-600">Our philosophies.</a></p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-medium mb-2">The Zerodha universe</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-medium mb-2">Do better with money</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">With initiatives like  <a href="#" className="text-blue-600">Nudge</a> and  <a href="#" className="text-blue-600">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="w-full lg:w-3/5 relative flex flex-col items-center justify-center mb-8 lg:mb-0">
          <img src="/assets/images/ecosystem.png" alt="Trust Section Image" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto" />
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8 sm:mt-12 w-full justify-center items-center">
            <a href="#" className='text-blue-500 text-base sm:text-lg'>
              Explore Our Products <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
            <a href="#" className="text-blue-500 text-base sm:text-lg">
              Try Kite demo <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
      <img src="/assets/images/pressLogos.png" alt="Press Logos" className="mx-auto mt-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto" />
    </div>
  )
}

export default TrustSection;