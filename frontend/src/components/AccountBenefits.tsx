import React from 'react';

const AccountBenefits = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/images/ecosystem.png"
            alt="Benefits of Zerodha"
            className="w-full max-w-sm mx-auto"
          />
          <h2 className="text-2xl md:text-3xl font-medium text-[#424242] mt-8 text-center md:text-left">
            Benefits of opening a Zerodha demat account
          </h2>
        </div>

        {/* Benefits List */}
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#424242] mb-3">Unbeatable pricing</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#424242] mb-3">Best investing experience</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Simple and intuitive trading platform with an easy-to-understand user interface.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#424242] mb-3">No spam or gimmicks</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-medium text-[#424242] mb-3">The Zerodha universe</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              More than just an app — gain free access to the entire ecosystem of our partner products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountBenefits;