import React from 'react';
import { TrendingUp, PieChart, Target, BarChart2 } from 'lucide-react';

const InvestmentOptions = () => {
  const options = [
    {
      icon: TrendingUp,
      color: "text-blue-500",
      title: "Stocks",
      desc: "Invest in all exchange-listed securities"
    },
    {
      icon: PieChart, // Placeholder for Mutual Funds
      color: "text-blue-500",
      title: "Mutual funds",
      desc: "Invest in commission-free direct mutual funds"
    },
    {
      icon: Target, // Placeholder for IPO
      color: "text-blue-500",
      title: "IPO",
      desc: "Apply to the latest IPOs instantly via UPI"
    },
    {
      icon: BarChart2,
      color: "text-blue-500",
      title: "Futures & options",
      desc: "Hedge and mitigate market risk through simplified F&O trading"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-[#424242] mb-16">
          Investment options with Zerodha demat account
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-left">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <div key={idx} className="flex gap-4 items-start">
                <div className="hidden md:block">
                  {/* Using svg for placeholder of illustration */}
                  <div className="w-24 h-16 bg-blue-50 rounded flex items-center justify-center">
                    <Icon className={`h-8 w-8 ${opt.color}`} />
                  </div>
                </div>
                <div className="block md:hidden">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Icon className={`h-5 w-5 ${opt.color}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#424242] mb-2">{opt.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed max-w-xs">{opt.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <button className="bg-[#387ed1] hover:bg-[#2b65ab] text-white font-medium py-3 px-8 rounded text-sm md:text-base transition-colors">
            Explore Investments
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;