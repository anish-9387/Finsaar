import React, { useState, useContext, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, MoreHorizontal, TrendingUp, Trash2, BarChart2, Briefcase, Activity } from 'lucide-react'; // Added icons
import { GeneralContext } from './GeneralContext';

const WatchList = () => {
    const { watchlist } = useContext(GeneralContext); // Use watchlist from context

    return (
        <div className="w-full md:w-[400px] h-full flex flex-col border-r border-gray-200 bg-white">
            {/* Search */}
            <div className="p-3 border-b border-gray-200 relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
                    className="w-full pl-10 pr-24 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#444] transition-colors truncate"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    {watchlist.length} / 50
                </span>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto">
                {watchlist.map((stock, index) => (
                    <WatchListItem key={index} stock={stock} />
                ))}
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WatchListItem = ({ stock }: { stock: any }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const { openBuyWindow, handleOpenChart, removeFromWatchlist } = useContext(GeneralContext);
    const moreMenuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
                setShowMoreMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="group relative flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`${stock.isDown ? 'text-[#df514c]' : 'text-[#26a69a]'} text-sm font-medium`}>
                {stock.name}
            </div>

            <div className="flex items-center gap-4 text-sm">
                <span className={`${stock.isDown ? 'text-[#df514c]' : 'text-[#26a69a]'}`}>
                    {stock.percent}
                </span>
                <div className="flex items-center gap-1 w-20 justify-end">
                    <span className="text-[#444] font-medium">{stock.price}</span>
                    {stock.isDown ? (
                        <ChevronDown className="h-3 w-3 text-[#df514c]" />
                    ) : (
                        <ChevronUp className="h-3 w-3 text-[#26a69a]" />
                    )}
                </div>
            </div>

            {/* Actions overlay on hover */}
            {isHovered && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-50 shadow-sm pl-2 py-1 rounded z-20">
                    <button
                        title="Buy (B)"
                        onClick={() => openBuyWindow(stock.name, 'buy', stock.price)}
                        className="bg-[#4184f3] text-white px-2 py-1 rounded-sm text-xs font-medium hover:bg-[#2a6bd8] transition-colors"
                    >
                        B
                    </button>
                    <button
                        title="Sell (S)"
                        onClick={() => openBuyWindow(stock.name, 'sell', stock.price)}
                        className="bg-[#ff5722] text-white px-2 py-1 rounded-sm text-xs font-medium hover:bg-[#e64a19] transition-colors"
                    >
                        S
                    </button>
                    <button
                        title="Chart (C)"
                        onClick={() => handleOpenChart(stock)}
                        className="p-1 px-2 hover:bg-gray-200 rounded-sm text-gray-600 transition-colors"
                    >
                        <BarChart2 className="h-4 w-4" />
                    </button>
                    <button
                        title="Delete (D)"
                        onClick={(e) => { e.stopPropagation(); removeFromWatchlist(stock.name); }}
                        className="p-1 px-2 hover:bg-gray-200 rounded-sm text-gray-600 transition-colors"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="relative" ref={moreMenuRef}>
                        <button
                            title="More"
                            onClick={(e) => { e.stopPropagation(); setShowMoreMenu(!showMoreMenu); }}
                            className="p-1 px-2 hover:bg-gray-200 rounded-sm text-gray-600 transition-colors"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                        </button>

                        {/* More Menu Dropdown */}
                        {showMoreMenu && (
                            <div className="absolute right-0 top-full mt-1 w-40 bg-white shadow-xl rounded border border-gray-100 py-1 z-30 flex flex-col">
                                <button className="flex items-center gap-2 px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 text-left w-full">
                                    <Briefcase className="h-3 w-3" /> Fundamentals
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 text-left w-full">
                                    <Activity className="h-3 w-3" /> Technicals
                                </button>
                                <button className="flex items-center gap-2 px-3 py-2 text-xs text-gray-600 hover:bg-gray-50 text-left w-full">
                                    <TrendingUp className="h-3 w-3" /> Option Chain
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default WatchList;

