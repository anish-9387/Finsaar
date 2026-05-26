import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Holdings",
            font: { size: 14 }
        },
    },
    scales: {
        x: { ticks: { font: { size: 10 } } },
        y: { ticks: { font: { size: 10 } } }
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VerticalGraph({ data }: { data: any }) {
    return <Bar options={options} data={data} />;
}

