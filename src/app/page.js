"use client";
import { Button } from "@/components/ui/button";
import UserPage from "../userComponents/UserPage";
import Dynamic from "@/userComponents/Dynamic";
import Astakavarga from "@/userComponents/Astakavarga";
import ChartAreaGradient from "@/userComponents/ChartAreaGradient";
import LagnaChart from "@/userComponents/LagnaChart";
import CalenderPicker from "@/userComponents/CalenderPicker";
import LineChartMultiple from "@/userComponents/LineChartMultiple";
import LineChartDots from "@/userComponents/LineChartDots";
import MyBarChart from "@/userComponents/MyBarChart";
import MyCalender from "@/userComponents/MyCalender";
import MyCalenderForm from "@/userComponents/MyCalenderForm";
import MyCalenderFormGpt from "@/userComponents/MyCalenderFormGpt";
import LineChartInteractive from "@/userComponents/LineChartInteractive";
import AreaChartInteractive from "@/userComponents/AreaChartInteractive";

export default function Home() {
  const chartData = {
    1: ["Asc", "Sun"],
    2: ["Moon"],
    5: ["Mars"],
    7: ["Jupiter", "Venus"],
  };

  return (
    <div className="flex-col">
      <AreaChartInteractive />
      
      <LineChartInteractive />

      <ChartAreaGradient />

      <LineChartMultiple />

      <LineChartDots />

      <MyBarChart />

      <LagnaChart data={chartData} />

      <Astakavarga />

      <MyCalenderForm />

      <UserPage />
    </div>
  );
}
