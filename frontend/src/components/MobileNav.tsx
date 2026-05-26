import React from 'react';
import Link from '@/routing/Link';
import { usePathname } from '@/routing/navigation';
import { ShoppingBag, Briefcase, Grid, User, Bookmark } from 'lucide-react';

const MobileNav = () => {
    const pathname = usePathname();

    const routes = [
        { name: 'Watchlist', path: '/dashboard/watchlist', icon: Bookmark },
        { name: 'Orders', path: '/dashboard/orders', icon: ShoppingBag },
        { name: 'Portfolio', path: '/dashboard/holdings', icon: Briefcase },
        { name: 'Apps', path: '/dashboard/apps', icon: Grid },
        { name: 'Account', path: '/dashboard', icon: User },
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-between items-center px-6 py-2 z-50">
            {routes.map((route) => {
                const Icon = route.icon;
                const isActive = pathname === route.path;

                return (
                    <Link
                        key={route.path}
                        href={route.path}
                        className={`flex flex-col items-center gap-1 ${isActive ? 'text-[#387ed1]' : 'text-[#666]'}`}
                    >
                        <Icon className="h-5 w-5" />
                        <span className="text-[10px] font-medium">{route.name}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default MobileNav;

