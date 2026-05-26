import React from 'react';
import { User, Users, Globe, Baby, Building2 } from 'lucide-react';

const AccountTypes = () => {
  const types = [
    {
      icon: User,
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives"
    },
    {
      icon: Users,
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family"
    },
    {
      icon: Globe,
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more"
    },
    {
      icon: Baby,
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future with them"
    },
    {
      icon: Building2,
      title: "Corporate / LLP/ Partnership",
      desc: "Manage your business surplus and investments easily"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-medium text-[#424242] mb-12 text-center">
          Explore different account types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, idx) => {
            const Icon = type.icon;
            return (
              <div key={idx} className="bg-white p-8 border border-gray-200 rounded hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium text-[#424242] mt-2">{type.title}</h3>
                </div>
                <p className="text-[#666] text-sm leading-relaxed pl-14">
                  {type.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;