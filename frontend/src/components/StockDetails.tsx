import React from 'react';
import { VerticalGraph } from './VerticalGraph';

interface Stock {
  name: string;
  price: number;
  percent: string;
  isDown: boolean;
}

const StockDetails = ({ stock }: { stock: Stock }) => {
  const labels = ['9:15', '10:00', '11:00', '12:00', '13:00', '14:00', '15:30'];
  const data = {
    labels,
    datasets: [
      {
        label: stock.name,
        data: labels.map(() => stock.price + (Math.random() * 20 - 10)),
        backgroundColor: stock.isDown ? 'rgba(255, 99, 132, 0.5)' : 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-md shadow-sm p-6 overflow-hidden animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{stock.name}</h2>
          <p className="text-sm text-gray-500">NSE</p>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${stock.isDown ? 'text-red-500' : 'text-green-500'}`}>
            ₹ {stock.price}
          </div>
          <div className={`text-sm ${stock.isDown ? 'text-red-500' : 'text-green-500'}`}>
            {stock.percent}
          </div>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        {/* Reusing VerticalGraph for now, normally would use a Line chart */}
        <VerticalGraph data={data} />
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-400 uppercase">Open</p>
          <p className="font-medium text-gray-700">{stock.price}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-400 uppercase">High</p>
          <p className="font-medium text-gray-700">{(stock.price * 1.02).toFixed(2)}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-400 uppercase">Low</p>
          <p className="font-medium text-gray-700">{(stock.price * 0.98).toFixed(2)}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-xs text-gray-400 uppercase">Close</p>
          <p className="font-medium text-gray-700">{(stock.price * 0.99).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;