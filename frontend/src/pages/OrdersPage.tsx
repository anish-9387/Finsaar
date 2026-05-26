import Link from '@/routing/Link';
import React, { useContext } from 'react';
import { GeneralContext } from '@/components/GeneralContext';

export default function OrdersPage() {
  const { orders } = useContext(GeneralContext);

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <p className="text-[#666] mb-6">You haven't placed any orders today</p>
        <Link href="/" className="bg-[#387ed1] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#2a6bd8] transition-colors">
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-xl text-[#444] font-medium mb-6">Orders ({orders.length})</h3>
      <div className="overflow-x-auto border border-gray-100 rounded-sm bg-white">
        <table className="w-full text-xs md:text-sm text-left whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-200 text-[#9b9b9b]">
              <th className="p-3 font-normal">Time</th>
              <th className="p-3 font-normal">Type</th>
              <th className="p-3 font-normal">Instrument</th>
              <th className="p-3 font-normal">Product</th>
              <th className="p-3 font-normal">Qty.</th>
              <th className="p-3 font-normal">Price</th>
              <th className="p-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody className="text-[#444]">
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 bg-white">
                <td className="p-3 text-xs text-[#999]">
                  {/* Mock time assuming simple list */}
                  {new Date().toLocaleTimeString()}
                </td>
                <td className={`p-3 uppercase ${order.mode === 'BUY' ? 'text-blue-500' : 'text-orange-500'}`}>{order.mode}</td>
                <td className="p-3 font-medium">{order.name}</td>
                <td className="p-3 uppercase">CNC</td>
                <td className="p-3">{order.qty}</td>
                <td className="p-3">{order.price}</td>
                <td className="p-3">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[10px] uppercase font-medium">Executed</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}