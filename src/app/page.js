"use client";

import AreaChartInteractive from "@/userComponents/AreaChartInteractive";
import Astakavarga from "@/userComponents/Astakavarga";
import ChartAreaGradient from "@/userComponents/ChartAreaGradient";
import LagnaChartTopup from "@/userComponents/LagnaChartTopup";
import LineChartDots from "@/userComponents/LineChartDots";
import LineChartInteractive from "@/userComponents/LineChartInteractive";
import LineChartMultiple from "@/userComponents/LineChartMultiple";
import MyBarChart from "@/userComponents/MyBarChart";
import MyCalenderForm from "@/userComponents/MyCalenderForm";
import UserPage from "@/userComponents/UserPage";
import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex-col align-middle justify-center">
        <LineChartInteractive />

        <ChartAreaGradient />
        <LineChartMultiple />
        <LineChartDots />
        <MyBarChart />
        <LagnaChartTopup />
        <Astakavarga />
        <MyCalenderForm />
        <UserPage />
      </div>
    </div>
  );
}
