import Link from '@/routing/Link';
import React, { useContext, useMemo, useState } from 'react';
import { Plus, RotateCcw } from 'lucide-react';
import FundsActionWindow from '@/components/FundsActionWindow';
import { GeneralContext } from '@/contexts/GeneralContext';

export default function FundsPage() {
  const { user, addFunds, withdrawFunds } = useContext(GeneralContext);
  const [activeAction, setActiveAction] = useState<"add" | "withdraw" | null>(null);

  const balance = user?.balance ?? 0;
  const balanceDisplay = useMemo(
    () => balance.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    [balance]
  );

  const handleSubmit = async (amount: number) => {
    if (activeAction === "add") {
      await addFunds(amount);
    }
    if (activeAction === "withdraw") {
      await withdrawFunds(amount);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
        <p className="text-sm text-[#444]">Instant, zero-cost fund transfers with UPI</p>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveAction("add")}
            className="flex items-center gap-2 bg-[#4caf50] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#43a047] transition-colors"
          >
            <Plus className="h-4 w-4" /> Add funds
          </button>
          <button
            onClick={() => setActiveAction("withdraw")}
            className="flex items-center gap-2 bg-[#444] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#333] transition-colors"
          >
            <RotateCcw className="h-4 w-4" /> Withdraw
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6 text-[#444] text-lg">
            <span>Equity</span>
          </div>

          <div className="border border-gray-100 bg-white rounded-sm">
            <div className="flex justify-between p-3 md:p-4 border-b border-gray-100 items-center">
              <span className="text-xs md:text-sm text-[#444]">Available margin</span>
              <span className="text-xl md:text-2xl text-[#387ed1] font-medium">{balanceDisplay}</span>
            </div>
            <div className="flex justify-between p-3 md:p-4 border-b border-gray-100 items-center bg-gray-50">
              <span className="text-xs md:text-sm text-[#444]">Used margin</span>
              <span className="text-base md:text-lg text-[#444] font-medium">0.00</span>
            </div>
            <div className="flex justify-between p-3 md:p-4 border-b border-gray-100 items-center bg-gray-50">
              <span className="text-xs md:text-sm text-[#444]">Available cash</span>
              <span className="text-base md:text-lg text-[#444] font-medium">{balanceDisplay}</span>
            </div>

            <div className="p-3 md:p-4 space-y-3 md:space-y-4">
              <div className="flex justify-between text-xs md:text-sm text-[#666]">
                <span>Opening Balance</span>
                <span>{balanceDisplay}</span>
              </div>
              <div className="flex justify-between text-sm text-[#666]">
                <span>Payin</span>
                <span>0.00</span>
              </div>
              <div className="flex justify-between text-sm text-[#666]">
                <span>SPAN</span>
                <span>0.00</span>
              </div>
              <div className="flex justify-between text-sm text-[#666]">
                <span>Delivery margin</span>
                <span>0.00</span>
              </div>
              <div className="flex justify-between text-sm text-[#666]">
                <span>Exposure</span>
                <span>0.00</span>
              </div>
              <div className="flex justify-between text-sm text-[#666]">
                <span>Options premium</span>
                <span>0.00</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6 text-[#444] text-lg">
            <span>Commodity</span>
          </div>

          <div className="border border-gray-100 bg-white rounded-sm p-8 text-center">
            <p className="text-[#666] mb-4">You don't have a commodity account</p>
            <Link href="/open-account" className="text-[#387ed1] font-medium hover:text-black transition-colors">Open Account</Link>
          </div>
        </div>
      </div>

      {activeAction && (
        <FundsActionWindow
          mode={activeAction}
          balance={balance}
          onSubmit={handleSubmit}
          onClose={() => setActiveAction(null)}
        />
      )}
    </div>
  );
}