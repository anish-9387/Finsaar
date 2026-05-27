import React, { useEffect, useMemo, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import { watchlist as initialWatchlist } from "@/data/data";
import axios from "axios";
import { GeneralContext, type Stock, type UserProfile } from "@/contexts/GeneralContext";

export const GeneralContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUid, setSelectedStockUid] = useState("");
  const [selectedStockMode, setSelectedStockMode] = useState<'buy' | 'sell'>('buy');
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const [activeView, setActiveView] = useState<'summary' | 'chart'>('summary');
  const [selectedStockForChart, setSelectedStockForChart] = useState<Stock | null>(null);

  const [watchlist, setWatchlist] = useState<Stock[]>(initialWatchlist);
  const [orders, setOrders] = useState<any[]>([]);
  const [holdings, setHoldings] = useState<any[]>([]);
  const [positions, setPositions] = useState<any[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);

  const apiUrl = useMemo(() => import.meta.env.VITE_API_URL || "http://localhost:3000", []);

  const persistUser = (nextUser: UserProfile | null) => {
    setUser(nextUser);
    if (nextUser) {
      localStorage.setItem("user", JSON.stringify(nextUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  useEffect(() => {
    // Check for token in URL params (from cross-port redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get('token');
    const urlUser = urlParams.get('user');

    if (urlToken) {
      localStorage.setItem("token", urlToken);
      if (urlUser) {
        localStorage.setItem("user", decodeURIComponent(urlUser));
      }
      // Clear URL params to clean up address bar
      window.history.replaceState({}, document.title, window.location.pathname);

      // Allow state to unify before continuing
    }

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      window.location.href = "/open-account";
      return;
    }

    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        persistUser({
          id: parsed.id || parsed._id || "",
          email: parsed.email || "",
          username: parsed.username || "",
          balance: Number(parsed.balance ?? 0),
          createdAt: parsed.createdAt,
        });
      } catch (error) {
        console.warn("Failed to parse stored user", error);
      }
    } else if (urlUser) {
      try {
        const parsed = JSON.parse(decodeURIComponent(urlUser));
        persistUser({
          id: parsed.id || parsed._id || "",
          email: parsed.email || "",
          username: parsed.username || "",
          balance: Number(parsed.balance ?? 0),
          createdAt: parsed.createdAt,
        });
      } catch (error) {
        console.warn("Failed to parse URL user", error);
      }
    }

    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const [holdingsRes, positionsRes, ordersRes] = await Promise.all([
          axios.get(`${apiUrl}/allHoldings`, { headers }),
          axios.get(`${apiUrl}/allPositions`, { headers }),
          axios.get(`${apiUrl}/allOrders`, { headers }),
        ]);
        setHoldings(holdingsRes.data);
        setPositions(positionsRes.data);
        setOrders(ordersRes.data);

        try {
          const meRes = await axios.get(`${apiUrl}/me`, { headers });
          if (meRes.data?.user) {
            persistUser(meRes.data.user);
          }
        } catch (error) {
          console.warn("Failed to load user profile", error);
        }

      } catch (error) {
        console.error("Error fetching data", error);
        // If 401, redirect?
        // For now, disabling auto-logout to debug navigation issues. 
        // Perhaps the token is valid but server momentarily fails or CORS?
        // if (axios.isAxiosError(error) && error.response?.status === 401) {
        //      logout();
        // }
      }
    };

    fetchData();

    // Simulating Realtime Ticker
    const interval = setInterval(() => {
      // Update Watchlist Only
      setWatchlist((prevWatchlist) => {
        return prevWatchlist.map((stock) => {
          const fluctuation = (Math.random() - 0.5) * 2;
          const newPrice = +(stock.price + fluctuation).toFixed(2);
          const isDown = newPrice < stock.price;
          return { ...stock, price: newPrice, isDown };
        });
      });
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/open-account";
  };

  const handleOpenBuyWindow = (uid: string, mode: 'buy' | 'sell', price: number) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUid(uid);
    setSelectedStockMode(mode);
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUid("");
    setSelectedStockPrice(0);
  };

  const handleOpenChart = (stock: Stock) => {
    setSelectedStockForChart(stock);
    setActiveView('chart');
  };

  const handleCloseChart = () => {
    setActiveView('summary');
    setSelectedStockForChart(null);
  };

  const removeFromWatchlist = (name: string) => {
    setWatchlist((prev) => prev.filter(stock => stock.name !== name));
  };

  const placeOrder = async (orderData: any) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.post(`${apiUrl}/newOrder`, orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Refresh Data
      const headers = { Authorization: `Bearer ${token}` };
      const ordersRes = await axios.get(`${apiUrl}/allOrders`, { headers });
      setOrders(ordersRes.data);

      alert("Order Placed Successfully");
      handleCloseBuyWindow();
    } catch (error) {
      console.error(error);
      alert("Failed to place order");
    }
  };

  const addFunds = async (amount: number) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    if (amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/funds/add`,
        { amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data?.user) {
        persistUser(response.data.user);
      }
    } catch (error) {
      console.error("Failed to add funds", error);
      alert("Failed to add funds");
    }
  };

  const withdrawFunds = async (amount: number) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    if (amount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/funds/withdraw`,
        { amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data?.user) {
        persistUser(response.data.user);
      }
    } catch (error) {
      console.error("Failed to withdraw funds", error);
      alert("Failed to withdraw funds");
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        handleOpenChart,
        handleCloseChart,
        activeView,
        selectedStockForChart,
        watchlist,
        removeFromWatchlist,
        orders,
        holdings,
        positions,
        placeOrder,
        user,
        addFunds,
        withdrawFunds,
        logout
      }}
    >
      {children}
      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUid}
          mode={selectedStockMode}
          price={selectedStockPrice}
          closeBuyWindow={handleCloseBuyWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};