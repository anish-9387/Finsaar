import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import WatchList from "@/components/WatchList";
import Providers from "@/providers/DashboardProviders";
import MobileNav from "@/components/MobileNav";

export default function DashboardLayout() {
  return (
    <div className="bg-gray-50 h-screen flex flex-col overflow-hidden">
      <Providers>
        <TopBar />

        <div className="flex flex-1 pt-16 h-full pb-16 md:pb-0">
          {/* Watchlist Sidebar */}
          <div className="hidden md:block h-full">
            <WatchList />
          </div>

          {/* Main Content */}
          <div className="flex-1 h-full overflow-y-auto p-6 md:p-8">
            <Outlet />
          </div>
        </div>

        <MobileNav />
      </Providers>
    </div>
  );
}