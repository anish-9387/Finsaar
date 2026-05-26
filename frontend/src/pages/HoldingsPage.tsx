import React, { useContext } from 'react';
import { VerticalGraph } from '@/components/VerticalGraph';
import { GeneralContext } from '@/components/GeneralContext';

export default function HoldingsPage() {
  const { holdings } = useContext(GeneralContext);

  // Calculate total values
  const totalInvestment = holdings.reduce((acc, stock) => acc + (stock.avg * stock.qty), 0);
  const currentValue = holdings.reduce((acc, stock) => acc + (stock.price * stock.qty), 0);
  const totalPnL = currentValue - totalInvestment;
  const totalPnLPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  const labels = holdings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <h3 className="text-xl text-[#444] font-medium mb-6">Holdings ({holdings.length})</h3>

      <div className="overflow-x-auto border border-gray-200 rounded-sm mb-6 md:mb-8 bg-white">
        <table className="w-full text-xs md:text-sm text-left whitespace-nowrap">
          <thead>
            <tr className="border-b border-gray-200 text-[#9b9b9b]">
              <th className="p-2 md:p-3 font-normal">Instrument</th>
              <th className="p-2 md:p-3 font-normal">Qty.</th>
              <th className="p-2 md:p-3 font-normal">Avg. cost</th>
              <th className="p-2 md:p-3 font-normal">LTP</th>
              <th className="p-2 md:p-3 font-normal">Cur. val</th>
              <th className="p-2 md:p-3 font-normal">P&L</th>
              <th className="p-2 md:p-3 font-normal">Net chg.</th>
              <th className="p-2 md:p-3 font-normal">Day chg.</th>
            </tr>
          </thead>
          <tbody className="text-[#444]">
            {holdings.map((stock, index) => {
              const curVal = stock.price * stock.qty;
              const pnl = curVal - (stock.avg * stock.qty);
              const isProfit = pnl >= 0;

              return (
                <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 bg-white">
                  <td className="p-2 md:p-3">{stock.name}</td>
                  <td className="p-2 md:p-3">{stock.qty}</td>
                  <td className="p-2 md:p-3">{stock.avg.toFixed(2)}</td>
                  <td className="p-2 md:p-3">{stock.price}</td>
                  <td className="p-2 md:p-3">{curVal.toFixed(2)}</td>
                  <td className={`p-2 md:p-3 ${isProfit ? 'text-[#26a69a]' : 'text-[#df514c]'}`}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={`p-2 md:p-3 ${parseFloat(stock.net) >= 0 ? 'text-[#26a69a]' : 'text-[#df514c]'}`}>
                    {stock.net}
                  </td>
                  <td className={`p-2 md:p-3 ${parseFloat(stock.day) >= 0 ? 'text-[#26a69a]' : 'text-[#df514c]'}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
        <div className="flex-1">
          <h5 className="text-xl md:text-2xl text-[#444] font-medium">
            {totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </h5>
          <p className="text-xs text-[#9b9b9b] mt-1">Total investment</p>
        </div>
        <div className="flex-1">
          <h5 className="text-xl md:text-2xl text-[#444] font-medium">
            {currentValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
          </h5>
          <p className="text-xs text-[#9b9b9b] mt-1">Current value</p>
        </div>
        <div className="flex-1">
          <h5 className={`text-xl md:text-2xl font-medium ${totalPnL >= 0 ? 'text-[#26a69a]' : 'text-[#df514c]'}`}>
            {totalPnL.toFixed(2)} <span className="text-xs md:text-sm">({totalPnLPercent.toFixed(2)}%)</span>
          </h5>
          <p className="text-xs text-[#9b9b9b] mt-1">P&L</p>
        </div>
      </div>

      <div className="h-60 md:h-80 w-full mb-8">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
}