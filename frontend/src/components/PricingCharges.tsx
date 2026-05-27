import React from 'react';

const PricingCharges = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Account Opening */}
      <div className="mb-16">
        <h3 className="text-2xl font-medium text-[#444] mb-8">Charges for account opening</h3>
        <div className="border border-gray-100 rounded overflow-hidden">
          <table className="w-full text-left border-collapse text-sm text-[#666]">
            <thead>
              <tr className="border-b border-gray-100 bg-white">
                <th className="p-4 font-normal w-2/3">Type of account</th>
                <th className="p-4 font-normal w-1/3">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">Online account</td>
                <td className="p-4">
                  <span className="bg-[#4caf50] text-white px-2 py-1 text-xs font-bold rounded uppercase">Free</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">Offline account</td>
                <td className="p-4">
                  <span className="bg-[#4caf50] text-white px-2 py-1 text-xs font-bold rounded uppercase">Free</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">NRI account (offline only)</td>
                <td className="p-4">₹ 500</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">HUF account</td>
                <td className="p-4"><span className="bg-[#4caf50] text-white px-2 py-1 text-xs font-bold rounded uppercase">Free</span> (online) / ₹ 500 (offline)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td className="p-4">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* AMC */}
      <div className="mb-16">
        <h3 className="text-2xl font-medium text-[#444] mb-8">Demat AMC (Annual Maintenance Charge)</h3>
        <div className="border border-gray-100 rounded overflow-hidden">
          <table className="w-full text-left border-collapse text-sm text-[#666]">
            <thead>
              <tr className="border-b border-gray-100 bg-white">
                <th className="p-4 font-normal w-2/3">Value of holdings</th>
                <th className="p-4 font-normal w-1/3">AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">Up to ₹4 lakh</td>
                <td className="p-4">
                  <span className="bg-[#4caf50] text-white px-2 py-1 text-xs font-bold rounded uppercase">Free*</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">₹4 lakh - ₹10 lakh</td>
                <td className="p-4">₹ 100 per year, charged quarterly*</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4">Above ₹10 lakh</td>
                <td className="p-4">₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#9b9b9b] mt-4 leading-5">
          * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha" className="text-[#387ed1]">click here</a>.
        </p>
      </div>

      {/* Optional Services */}
      <div className="mb-16">
        <h3 className="text-2xl font-medium text-[#444] mb-8">Charges for optional value added services</h3>
        <div className="border border-gray-100 rounded overflow-hidden">
          <table className="w-full text-left border-collapse text-sm text-[#666]">
            <thead>
              <tr className="border-b border-gray-100 bg-white">
                <th className="p-4 font-normal w-1/3">Service</th>
                <th className="p-4 font-normal w-1/3">Billing Frequency</th>
                <th className="p-4 font-normal w-1/3">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">Tickertape</td>
                <td className="p-4">Monthly / Annual</td>
                <td className="p-4">Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4">Smallcase</td>
                <td className="p-4">Per transaction</td>
                <td className="p-4">Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4">Kite Connect</td>
                <td className="p-4">Monthly</td>
                <td className="p-4">Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PricingCharges;