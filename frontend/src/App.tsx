import { Route, Routes } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import LoginPage from "@/pages/LoginPage";
import SignupRedirectPage from "@/pages/SignupRedirectPage";
import DashboardHomePage from "@/pages/DashboardHomePage";
import AppsPage from "@/pages/AppsPage";
import FundsPage from "@/pages/FundsPage";
import ProfilePage from "@/pages/ProfilePage";
import HoldingsPage from "@/pages/HoldingsPage";
import OrdersPage from "@/pages/OrdersPage";
import PositionsPage from "@/pages/PositionsPage";
import WatchlistPage from "@/pages/WatchlistPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import AboutPage from "@/pages/AboutPage";
import OpenAccountPage from "@/pages/OpenAccountPage";
import PricingPage from "@/pages/PricingPage";
import ProductsPage from "@/pages/ProductsPage";
import HomeRedirectPage from "@/pages/HomeRedirectPage";
import SupportHomeRedirectPage from "@/pages/SupportHomeRedirectPage";
import SupportPage from "@/pages/SupportPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomeRedirectPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/open-account" element={<OpenAccountPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/support/home" element={<SupportHomeRedirectPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupRedirectPage />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHomePage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="holdings" element={<HoldingsPage />} />
        <Route path="positions" element={<PositionsPage />} />
        <Route path="funds" element={<FundsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="apps" element={<AppsPage />} />
        <Route path="watchlist" element={<WatchlistPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

