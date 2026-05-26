import React, { useContext } from 'react';
import { User } from 'lucide-react';
import { GeneralContext } from './GeneralContext';

const Summary = () => {
    const { user, holdings } = useContext(GeneralContext);

    // Calculate dynamic values
    const totalInvestment = holdings.reduce((acc, stock) => acc + (stock.avg * stock.qty), 0);
    const currentValue = holdings.reduce((acc, stock) => acc + (stock.price * stock.qty), 0);
    const totalPnL = currentValue - totalInvestment;
    const totalPnLPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

    return (
        <>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
                <h2 className="text-lg md:text-2xl text-[#444] font-medium">Hi, {user ? user.username : 'User'}!</h2>
                <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Equity Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4 md:mb-6 text-[#444] text-base md:text-[1.1rem]">
                        <User className="h-4 w-4" /> <span>Equity</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                        <div className="flex flex-col gap-1 md:border-r md:border-gray-200 pr-4 md:pr-8">
                            <h1 className="text-2xl md:text-4xl text-[#444] font-medium">3.74k</h1>
                            <p className="text-xs text-[#9b9b9b]">Margin available</p>
                        </div>
                        <div className="flex flex-col justify-center gap-3 md:gap-4 text-xs md:text-sm">
                            <div className="flex justify-between text-[#444]">
                                <span>Margins used</span>
                                <span className="font-medium">0</span>
                            </div>
                            <div className="flex justify-between text-[#444]">
                                <span>Opening balance</span>
                                <span className="font-medium">3.74k</span>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-200 mb-6 md:mb-8" />
                </div>

                {/* Holdings Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4 md:mb-6 text-[#444] text-base md:text-[1.1rem]">
                        <User className="h-4 w-4" /> <span>Holdings ({holdings.length})</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                        <div className="flex flex-col gap-1 md:border-r md:border-gray-200 pr-4 md:pr-8">
                            <h1 className={`text-2xl md:text-4xl font-medium ${totalPnL >= 0 ? 'text-[#26a69a]' : 'text-[#df514c]'}`}>
                                {totalPnL.toFixed(2)}K
                                <span className={`text-[10px] md:text-xs font-normal align-middle ml-1 ${totalPnL >= 0 ? 'text-[#26a69a]' : 'text-[#df514c]'}`}>
                                    {totalPnLPercent > 0 ? '+' : ''}{totalPnLPercent.toFixed(2)}%
                                </span>
                            </h1>
                            <p className="text-xs text-[#9b9b9b]">P&L</p>
                        </div>
                        <div className="flex flex-col justify-center gap-4 text-sm">
                            <div className="flex justify-between text-[#444]">
                                <span>Current Value</span>
                                <span className="font-medium">{currentValue.toFixed(2)}k</span>
                            </div>
                            <div className="flex justify-between text-[#444]">
                                <span>Investment</span>
                                <span className="font-medium">{totalInvestment.toFixed(2)}k</span>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-200 mb-8" />
                </div>
            </div>
        </>
    );
};

export default Summary;

