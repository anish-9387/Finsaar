import React, { useState, useContext } from 'react';
import Link from '@/routing/Link';
import { usePathname } from '@/routing/navigation';
import { User, LogOut } from 'lucide-react';
import { GeneralContext } from './GeneralContext';

const TopBar = () => {
    const pathname = usePathname();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { user, logout } = useContext(GeneralContext);

    const routes = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Orders', path: '/dashboard/orders' },
        { name: 'Holdings', path: '/dashboard/holdings' },
        { name: 'Positions', path: '/dashboard/positions' },
        { name: 'Funds', path: '/dashboard/funds' },
        { name: 'Apps', path: '/dashboard/apps' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-10 z-50 shadow-sm">
            {/* Left: Logo & Indices */}
            <div className="flex items-center gap-8">
                <Link href="/dashboard">
                    <img src="/assets/logo.png" alt="Zerodha" className="h-5 w-auto" />
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium border-l border-gray-200 pl-6">
                    <div className="flex items-center gap-2">
                        <span className="text-[#444] uppercase">Nifty 50</span>
                        <span className="text-[#d43725]">100.2</span>
                        <span className="text-[#d43725] text-xs">-0.55%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#444] uppercase">Sensex</span>
                        <span className="text-[#d43725]">100.2</span>
                        <span className="text-[#d43725] text-xs">-0.88%</span>
                    </div>
                </div>
            </div>

            {/* Right: Menu */}
            <div className="flex items-center gap-8">
                {/* Links */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-[#444]">
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            href={route.path}
                            className={`transition-colors hover:text-[#da5543] ${pathname === route.path ? 'text-[#da5543] font-medium' : 'text-[#444]'}`}
                        >
                            {route.name}
                        </Link>
                    ))}
                </nav>

                {/* Profile */}
                <div className="relative">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <div className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-semibold border border-purple-200">
                            {user ? user.username.substring(0, 2).toUpperCase() : 'Guest'}
                        </div>
                        <span className="text-xs font-medium text-[#444] hidden sm:block">{user ? user.username : 'Guest'}</span>
                    </div>

                    {/* Dropdown */}
                    {isProfileOpen && (
                        <div className="absolute top-10 right-0 w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 text-sm text-[#444]">
                            <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                                <User className="h-4 w-4" /> My Profile
                            </div>
                            <div
                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2 text-red-500"
                                onClick={logout}
                            >
                                <LogOut className="h-4 w-4" /> Logout
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default TopBar;

