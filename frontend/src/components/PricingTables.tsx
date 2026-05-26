import React from 'react';

const PricingTables = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Equity */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/images/pricing0.svg" alt="Free Equity" className="w-52 h-auto mb-6" />
          <h2 className="text-3xl text-[#444] font-medium mb-4">Free equity delivery</h2>
          <p className="text-[#666] leading-7">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Intraday */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/images/pricing_intraday.svg" alt="Intraday" className="w-52 h-auto mb-6" />
          <h2 className="text-3xl text-[#444] font-medium mb-4">Intraday and F&O trades</h2>
          <p className="text-[#666] leading-7">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="flex flex-col items-center text-center">
          <img src="/assets/images/pricingMF.svg" alt="Mutual Funds" className="w-52 h-auto mb-6" />
          <h2 className="text-3xl text-[#444] font-medium mb-4">Free direct MF</h2>
          <p className="text-[#666] leading-7">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PricingTables;