import React, { useContext } from 'react';
import { GeneralContext } from '@/contexts/GeneralContext';

export default function PositionsPage() {
  const { positions } = useContext(GeneralContext);

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-xl text-[#444] font-medium mb-6">Positions ({positions.length})</h3>

      <div className="overflow-x-auto border border-gray-100 rounded-sm bg-white">
        <table className="w-full text-xs md:text-sm text-left whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-200 text-[#9b9b9b]">
              <th className="p-2 md:p-3 font-normal">Product</th>
              <th className="p-2 md:p-3 font-normal">Instrument</th>
              <th className="p-2 md:p-3 font-normal">Qty.</th>
              <th className="p-2 md:p-3 font-normal">Avg.</th>
              <th className="p-2 md:p-3 font-normal">LTP</th>
              <th className="p-2 md:p-3 font-normal">P&L</th>
              <th className="p-2 md:p-3 font-normal">Chg.</th>
            </tr>
          </thead>
          <tbody className="text-[#444]">
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - (stock.avg * stock.qty);
              const isProfit = pnl >= 0;

              return (
                <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 bg-white">
                  <td className="p-2 md:p-3 text-[10px] md:text-xs bg-gray-50 text-[#888] rounded-sm w-fit px-1.5 md:px-2 py-0.5 md:py-1 m-1 md:m-2 inline-block border border-gray-200 uppercase">{stock.product}</td>
                  <td className="p-2 md:p-3">{stock.name}</td>
                  <td className="p-2 md:p-3">{stock.qty}</td>
                  <td className="p-2 md:p-3">{stock.avg.toFixed(2)}</td>
                  <td className="p-2 md:p-3">{stock.price.toFixed(2)}</td>
                  <td className={`p-2 md:p-3 ${isProfit ? 'text-[#26a69a]' : 'text-[#df514c]'}`}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={`p-2 md:p-3 ${stock.day.includes('-') ? 'text-[#df514c]' : 'text-[#26a69a]'}`}>
                    {stock.day}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}