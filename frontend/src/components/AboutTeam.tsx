import React from 'react';

const AboutTeam = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Founder Image */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden mb-6 border border-gray-100">
            <img
              src="/assets/images/nithinKamath.jpg"
              alt="Nithin Kamath"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <h4 className="text-xl font-medium text-[#444]">Nithin Kamath</h4>
          <p className="text-gray-500 text-sm mt-1">Founder, CEO</p>
        </div>

        {/* Right: Bio */}
        <div className="text-left text-[#444] leading-7 md:leading-8 text-sm md:text-[17px]">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="mb-4">
            Playing basketball is his zen.
          </p>
          <p>
            Connect on <a href="https://nithinkamath.me/" className="text-[#387ed1] font-medium hover:text-black">Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary" className="text-[#387ed1] font-medium hover:text-black">TradingQnA</a> / <a href="https://twitter.com/Nithin0dha" className="text-[#387ed1] font-medium hover:text-black">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam;