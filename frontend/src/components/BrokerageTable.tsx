import React, { useState } from 'react';

const BrokerageTable = () => {
  const [activeTab, setActiveTab] = useState('equity');

  return (
    <div className="max-w-6xl mx-auto px-6 mt-16">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab('equity')}
          className={`pb-4 px-4 text-xl font-medium transition-colors whitespace-nowrap ${activeTab === 'equity' ? 'text-[#387ed1] border-b-2 border-[#387ed1]' : 'text-gray-500 hover:text-[#387ed1]'}`}
        >
          Equity
        </button>
        <button
          onClick={() => setActiveTab('currency')}
          className={`pb-4 px-4 text-xl font-medium transition-colors whitespace-nowrap ${activeTab === 'currency' ? 'text-[#387ed1] border-b-2 border-[#387ed1]' : 'text-gray-500 hover:text-[#387ed1]'}`}
        >
          Currency
        </button>
        <button
          onClick={() => setActiveTab('commodity')}
          className={`pb-4 px-4 text-xl font-medium transition-colors whitespace-nowrap ${activeTab === 'commodity' ? 'text-[#387ed1] border-b-2 border-[#387ed1]' : 'text-gray-500 hover:text-[#387ed1]'}`}
        >
          Commodity
        </button>
      </div>

      {/* Content */}
      <div className="border border-gray-100 rounded text-sm text-[#666] overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b border-gray-100 text-[#444]">
              <th className="p-4 font-normal w-1/5"></th>
              <th className="p-4 font-normal w-1/5">Equity delivery</th>
              <th className="p-4 font-normal w-1/5">Equity intraday</th>
              <th className="p-4 font-normal w-1/5">F&O - Futures</th>
              <th className="p-4 font-normal w-1/5">F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            {activeTab === 'equity' && (
              <>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-[#444]">Brokerage</td>
                  <td className="p-4">Zero Brokerage</td>
                  <td className="p-4">0.03% or Rs. 20/executed order whichever is lower</td>
                  <td className="p-4">0.03% or Rs. 20/executed order whichever is lower</td>
                  <td className="p-4">Flat Rs. 20 per executed order</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-[#444]">STT/CTT</td>
                  <td className="p-4">0.1% on buy & sell</td>
                  <td className="p-4">0.025% on the sell side</td>
                  <td className="p-4">0.02% on the sell side</td>
                  <td className="p-4">
                    <ul className="list-disc list-inside space-y-1">
                      <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-[#444]">Transaction charges</td>
                  <td className="p-4">NSE: 0.00297%<br />BSE: 0.00375%</td>
                  <td className="p-4">NSE: 0.00297%<br />BSE: 0.00375%</td>
                  <td className="p-4">NSE: 0.00173%<br />BSE: 0</td>
                  <td className="p-4">NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-[#444]">GST</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-[#444]">SEBI charges</td>
                  <td className="p-4">₹10 / crore</td>
                  <td className="p-4">₹10 / crore</td>
                  <td className="p-4">₹10 / crore</td>
                  <td className="p-4">₹10 / crore</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-[#444]">Stamp charges</td>
                  <td className="p-4">0.015% or ₹1500 / crore on buy side</td>
                  <td className="p-4">0.003% or ₹300 / crore on buy side</td>
                  <td className="p-4">0.002% or ₹200 / crore on buy side</td>
                  <td className="p-4">0.003% or ₹300 / crore on buy side</td>
                </tr>
              </>
            )}
            {activeTab === 'currency' && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-400 italic">Currency data to be added based on requirements (Placeholder)</td>
              </tr>
            )}
            {activeTab === 'commodity' && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-gray-400 italic">Commodity data to be added based on requirements (Placeholder)</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-8">
        <a href="#" className="text-[#387ed1] text-lg font-medium hover:text-black transition-colors">Calculate your costs upfront</a>
        <span className="text-[#444] text-lg"> using our brokerage calculator</span>
      </div>
    </div>
  );
};

export default BrokerageTable;