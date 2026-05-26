import Link from '@/routing/Link';
import React from 'react';
import { ExternalLink, BookOpen, BarChart2, Briefcase, Zap } from 'lucide-react';

export default function AppsPage() {
  const apps = [
    {
      name: 'Kite',
      description: 'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.',
      link: 'https://kite.zerodha.com',
      icon: Zap,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      name: 'Console',
      description: 'The central dashboard for your Zerodha account. Reports, tax, portfolio, and other backoffice operations.',
      link: 'https://console.zerodha.com',
      icon: BarChart2,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      name: 'Coin',
      description: 'Buy direct mutual funds online, commission-free, delivered directly to your Demat account.',
      link: 'https://coin.zerodha.com',
      icon: Briefcase,
      color: 'bg-green-100 text-green-600',
    },
    {
      name: 'Varsity',
      description: 'Easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.',
      link: 'https://zerodha.com/varsity',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-500',
    },
    {
      name: 'Kite Connect',
      description: 'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.',
      link: 'https://kite.trade',
      icon: ExternalLink,
      color: 'bg-gray-100 text-gray-600',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-xl text-[#444] font-medium mb-8">Apps</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app, index) => {
          const Icon = app.icon;
          return (
            <Link
              href={app.link}
              key={index}
              target="_blank"
              className="group block p-6 border border-gray-100 rounded hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 rounded flex items-center justify-center ${app.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <ExternalLink className="h-4 w-4 text-gray-300 group-hover:text-[#387ed1] transition-colors" />
              </div>
              <h4 className="text-lg font-medium text-[#444] mb-2 group-hover:text-[#387ed1] transition-colors">
                {app.name}
              </h4>
              <p className="text-sm text-[#666] leading-relaxed">
                {app.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}