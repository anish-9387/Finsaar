import React, { useState, useContext } from 'react';
import { RefreshCcw } from 'lucide-react';
import { GeneralContext } from './GeneralContext';

interface BuyActionWindowProps {
    uid: string;
    mode: 'buy' | 'sell';
    price: number;
    closeBuyWindow: () => void;
}

const BuyActionWindow = ({ uid, mode, price, closeBuyWindow }: BuyActionWindowProps) => {
    const { placeOrder } = useContext(GeneralContext); // Hook
    const [activeTab, setActiveTab] = useState('regular'); // regular, cover, amo, iceberg
    const [orderType, setOrderType] = useState('longterm'); // intraday, longterm
    const [qty, setQty] = useState(1);
    const [orderPrice, setOrderPrice] = useState(price);

    // Theme colors based on mode
    const isBuy = mode === 'buy';
    const primaryColor = isBuy ? 'bg-[#4184f3]' : 'bg-[#ff5722]'; // Blue for Buy, Orange for Sell
    const primaryTextColor = isBuy ? 'text-[#4184f3]' : 'text-[#ff5722]';
    const hoverColor = isBuy ? 'hover:bg-[#2a6bd8]' : 'hover:bg-[#e64a19]';
    const accentColor = isBuy ? 'accent-[#4184f3]' : 'accent-[#ff5722]';
    const focusBorderColor = isBuy ? 'focus:border-[#4184f3]' : 'focus:border-[#ff5722]';

    const handleAction = () => {
        placeOrder({
            name: uid,
            qty: Number(qty),
            price: Number(orderPrice),
            mode: mode.toUpperCase()
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[2px] p-4">
            <div className="bg-white w-full max-w-[500px] rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className={`${primaryColor} p-4 text-white flex items-center justify-between`}>
                    <div className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                            <h4 className="font-medium text-lg capitalize">{mode} {uid}</h4>
                            <span className="text-sm opacity-80">NSE</span>
                            <span className="text-sm font-medium">₹ {price}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                            <input type="checkbox" className="accent-white h-4 w-4" /> <span>SL</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                            <input type="checkbox" className="accent-white h-4 w-4" /> <span>TGT</span>
                        </label>
                    </div>
                </div>

                {/* Body */}
                <div className="p-4 md:p-6">
                    {/* Tabs */}
                    <div className="flex gap-2 md:gap-6 border-b border-gray-100 pb-4 mb-6 text-sm text-[#666] overflow-x-auto">
                        {['regular', 'cover', 'amo', 'iceberg'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`uppercase transition-colors ${hoverColor} hover:text-white px-2 py-1 rounded whitespace-nowrap ${activeTab === tab ? `${primaryTextColor} font-medium` : ''}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Product Types */}
                    <div className="flex gap-4 mb-6 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="product"
                                checked={orderType === 'intraday'}
                                onChange={() => setOrderType('intraday')}
                                className={accentColor}
                            />
                            <span className="text-[#444]">Intraday <span className="text-xs text-[#9b9b9b] uppercase">MIS</span></span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="product"
                                checked={orderType === 'longterm'}
                                onChange={() => setOrderType('longterm')}
                                className={accentColor}
                            />
                            <span className="text-[#444]">Longterm <span className="text-xs text-[#9b9b9b] uppercase">CNC</span></span>
                        </label>
                    </div>

                    {/* Inputs grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="col-span-1">
                            <label className="text-xs text-[#9b9b9b] mb-1 block">Qty.</label>
                            <input
                                type="number"
                                value={qty}
                                onChange={(e) => setQty(Number(e.target.value))}
                                className={`w-full border border-gray-300 rounded p-2 text-sm ${focusBorderColor} focus:outline-none`}
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="text-xs text-[#9b9b9b] mb-1 block">Price</label>
                            <input
                                type="number"
                                value={orderPrice}
                                onChange={(e) => setOrderPrice(Number(e.target.value))}
                                className={`w-full border border-gray-300 rounded p-2 text-sm ${focusBorderColor} focus:outline-none`}
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="text-xs text-[#9b9b9b] mb-1 block">Trigger price</label>
                            <input type="number" disabled className="w-full border border-gray-200 bg-gray-50 rounded p-2 text-sm focus:outline-none cursor-not-allowed" />
                        </div>
                    </div>

                    {/* Order Types */}
                    <div className="flex gap-4 mb-8 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="orderType" defaultChecked className={accentColor} />
                            <span className="text-[#444]">Market</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="orderType" className={accentColor} />
                            <span className="text-[#444]">Limit</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="orderType" className={accentColor} />
                            <span className="text-[#444]">SL</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="orderType" className={accentColor} />
                            <span className="text-[#444]">SL-M</span>
                        </label>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className={`flex items-center gap-4 ${primaryTextColor} text-sm font-medium cursor-pointer`}>
                            <span>GTT</span>
                            <span className="flex items-center gap-1"><RefreshCcw className="h-3 w-3" /> Repeat</span>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleAction}
                                className={`${primaryColor} text-white px-8 py-2 rounded font-medium ${hoverColor} transition-colors capitalize`}
                            >
                                {mode}
                            </button>
                            <button
                                onClick={closeBuyWindow}
                                className="border border-gray-300 text-[#444] px-6 py-2 rounded font-medium hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;

