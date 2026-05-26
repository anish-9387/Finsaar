import React, { useState, createContext, useEffect } from "react";
import BuyActionWindow from "./BuyActionWindow";
import { watchlist as initialWatchlist } from "@/data/data";
import axios from "axios";

interface Stock {
    name: string;
    price: number;
    percent: string;
    isDown: boolean;
}

interface GeneralContextType {
    openBuyWindow: (uid: string, mode: 'buy' | 'sell', price: number) => void;
    closeBuyWindow: () => void;
    handleOpenChart: (stock: Stock) => void;
    handleCloseChart: () => void;
    activeView: 'summary' | 'chart';
    selectedStockForChart: Stock | null;
    watchlist: Stock[];
    removeFromWatchlist: (name: string) => void;
    orders: any[];
    holdings: any[];
    positions: any[];
    placeOrder: (order: any) => Promise<void>;
    user: any;
    logout: () => void;
}

export const GeneralContext = createContext<GeneralContextType>({
    openBuyWindow: (uid: string, mode: 'buy' | 'sell', price: number) => { },
    closeBuyWindow: () => { },
    handleOpenChart: (stock: Stock) => { },
    handleCloseChart: () => { },
    activeView: 'summary',
    selectedStockForChart: null,
    watchlist: [],
    removeFromWatchlist: (name: string) => { },
    orders: [],
    holdings: [],
    positions: [],
    placeOrder: async (order: any) => { },
    user: null,
    logout: () => { },
});

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
    const [user, setUser] = useState<any>(null);

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
            setUser(JSON.parse(storedUser));
        } else if (urlUser) {
            // Fallback if not in storage but found in URL
            setUser(JSON.parse(decodeURIComponent(urlUser)));
        }

        const fetchData = async () => {
            try {
                const headers = { Authorization: `Bearer ${token}` };
                const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

                // Fetch Holdings
                const holdingsRes = await axios.get(`${apiUrl}/allHoldings`, { headers });
                setHoldings(holdingsRes.data);

                // Fetch Positions
                const positionsRes = await axios.get(`${apiUrl}/allPositions`, { headers });
                setPositions(positionsRes.data);

                // Fetch Orders
                const ordersRes = await axios.get(`${apiUrl}/allOrders`, { headers });
                setOrders(ordersRes.data);

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
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
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

export default GeneralContext;

