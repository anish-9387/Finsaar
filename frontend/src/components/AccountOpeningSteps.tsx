import React from 'react';

const AccountOpeningSteps = () => {
  const steps = [
    "Enter the requested details",
    "Complete e-sign & verification",
    "Start investing!"
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-medium text-[#424242] mb-12 md:mb-16 text-center">
          Steps to open a demat account with Zerodha
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Illustration */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/assets/images/ecosystem.png"
              alt="Account Opening Steps"
              className="w-full max-w-sm opacity-80"
            />
          </div>

          {/* Steps List */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-8">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-center gap-6">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium text-[#666]">
                    0{idx + 1}
                  </div>
                  <span className="text-lg md:text-xl text-[#424242] font-normal">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountOpeningSteps;