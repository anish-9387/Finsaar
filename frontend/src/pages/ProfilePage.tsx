import React, { useContext, useMemo } from "react";
import Link from "@/routing/Link";
import { Mail, User, Wallet } from "lucide-react";
import { GeneralContext } from "@/contexts/GeneralContext";

export default function ProfilePage() {
  const { user, logout } = useContext(GeneralContext);

  const balanceDisplay = useMemo(() => {
    const balance = user?.balance ?? 0;
    return balance.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }, [user?.balance]);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-[#666] mb-4">No profile data available. Please log in.</p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center bg-[#387ed1] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#2a6bd8] transition-colors"
          >
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#444]">My Profile</h2>
          <p className="text-sm text-[#666]">Manage your account details</p>
        </div>
        <button
          onClick={logout}
          className="inline-flex items-center justify-center border border-red-200 text-red-600 px-4 py-2 rounded text-sm font-medium hover:bg-red-50 transition-colors cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center gap-2 text-[#444] font-medium mb-4">
            <User className="h-4 w-4" /> Account
          </div>
          <div className="space-y-3 text-sm text-[#666]">
            <div className="flex items-center justify-between">
              <span>Username</span>
              <span className="text-[#444] font-medium">{user.username}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>User ID</span>
              <span className="text-[#444] font-medium">{user.id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Joined</span>
              <span className="text-[#444] font-medium">{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "28 May 2026"}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center gap-2 text-[#444] font-medium mb-4">
            <Mail className="h-4 w-4" /> Contact
          </div>
          <div className="space-y-3 text-sm text-[#666]">
            <div className="flex items-center justify-between">
              <span>Email</span>
              <span className="text-[#444] font-medium">{user.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Balance</span>
              <span className="text-[#444] font-medium">{balanceDisplay}</span>
            </div>
            <div className="pt-2">
              <Link
                href="/dashboard/funds"
                className="inline-flex items-center gap-2 text-[#387ed1] font-medium hover:text-[#2a6bd8] transition-colors"
              >
                <Wallet className="h-4 w-4" /> Manage funds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}