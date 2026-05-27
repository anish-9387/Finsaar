import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingTables from "@/components/PricingTables";
import BrokerageTable from "@/components/BrokerageTable";
import PricingCharges from "@/components/PricingCharges";
import ExplainedCharges from "@/components/ExplainedCharges";

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <div className="pt-20 pb-12 md:pt-32 md:pb-20 text-center border-b border-gray-100">
        <h1 className="text-3xl lg:text-3xl md:text-[44px] font-medium text-[#444] mb-4">Charges</h1>
        <p className="text-lg md:text-xl text-[#666] mb-12">List of all charges and taxes</p>

        <PricingTables />
      </div>

      <BrokerageTable />
      <PricingCharges />
      <ExplainedCharges />

      <Footer />
    </>
  );
}