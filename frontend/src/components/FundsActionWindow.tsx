import React, { useState } from "react";
import { X } from "lucide-react";

interface FundsActionWindowProps {
  mode: "add" | "withdraw";
  balance: number;
  onClose: () => void;
  onSubmit: (amount: number) => Promise<void>;
}

const FundsActionWindow = ({ mode, balance, onClose, onSubmit }: FundsActionWindowProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAdd = mode === "add";
  const primaryColor = isAdd ? "bg-[#4caf50]" : "bg-[#444]";
  const hoverColor = isAdd ? "hover:bg-[#43a047]" : "hover:bg-[#333]";
  const headerText = isAdd ? "Add funds" : "Withdraw funds";

  const handleSubmit = async () => {
    if (amount <= 0) {
      setError("Enter a valid amount");
      return;
    }

    if (!isAdd && amount > balance) {
      setError("Amount exceeds available balance");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await onSubmit(amount);
      onClose();
    } catch (submitError) {
      console.error("Funds action failed", submitError);
      setError("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-[2px] p-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className={`${primaryColor} text-white p-4 flex items-center justify-between`}>
          <h4 className="text-lg font-medium">{headerText}</h4>
          <button onClick={onClose} className="text-white/80 hover:text-white" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-4">
          <div className="flex items-center justify-between text-sm text-[#666]">
            <span>Available balance</span>
            <span className="font-medium text-[#444]">{balance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>

          <div>
            <label className="text-xs text-[#9b9b9b] mb-1 block">Amount</label>
            <input
              type="number"
              value={amount}
              min={0}
              onChange={(event) => setAmount(Number(event.target.value))}
              className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#387ed1] focus:outline-none"
              placeholder="Enter amount"
            />
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="border border-gray-300 text-[#444] px-5 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`${primaryColor} ${hoverColor} text-white px-6 py-2 rounded text-sm font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? "Processing..." : headerText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundsActionWindow;