import React, { useContext } from "react";
import Summary from "@/components/Summary";
import StockDetails from "@/components/StockDetails";
import { GeneralContext } from "./GeneralContext";

export default function DashboardContent() {
    const { activeView, selectedStockForChart } = useContext(GeneralContext);

    if (activeView === 'chart' && selectedStockForChart) {
        return <StockDetails stock={selectedStockForChart} />;
    }

    return <Summary />;
}

