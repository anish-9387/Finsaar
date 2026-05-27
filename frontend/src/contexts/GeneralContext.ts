import { createContext } from "react";

export interface Stock {
  name: string;
  price: number;
  percent: string;
  isDown: boolean;
}

export type UserProfile = {
  id: string;
  email: string;
  username: string;
  balance: number;
  createdAt?: string;
};

export interface GeneralContextType {
  openBuyWindow: (uid: string, mode: "buy" | "sell", price: number) => void;
  closeBuyWindow: () => void;
  handleOpenChart: (stock: Stock) => void;
  handleCloseChart: () => void;
  activeView: "summary" | "chart";
  selectedStockForChart: Stock | null;
  watchlist: Stock[];
  removeFromWatchlist: (name: string) => void;
  orders: any[];
  holdings: any[];
  positions: any[];
  placeOrder: (order: any) => Promise<void>;
  user: UserProfile | null;
  addFunds: (amount: number) => Promise<void>;
  withdrawFunds: (amount: number) => Promise<void>;
  logout: () => void;
}

export const GeneralContext = createContext<GeneralContextType>({
  openBuyWindow: () => { },
  closeBuyWindow: () => { },
  handleOpenChart: () => { },
  handleCloseChart: () => { },
  activeView: "summary",
  selectedStockForChart: null,
  watchlist: [],
  removeFromWatchlist: () => { },
  orders: [],
  holdings: [],
  positions: [],
  placeOrder: async () => { },
  user: null,
  addFunds: async () => { },
  withdrawFunds: async () => { },
  logout: () => { },
});