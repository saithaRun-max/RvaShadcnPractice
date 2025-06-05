"use client";
import { Button } from "@/components/ui/button";

import UserPage from "../userComponents/UserPage";
import Dynamic from "@/userComponents/Dynamic";
import Astakavarga from "@/userComponents/Astakavarga";
import ChartCopy from "@/userComponents/ChartCopy";
import ChartAreaGradient from "@/userComponents/ChartAreaGradient";
import LagnaChart from "@/userComponents/LagnaChart";
import CalenderPicker from "@/userComponents/CalenderPicker";

export default function Home() {


const chartData = {
    1: ["Asc", "Sun"],
    2: ["Moon"],
    5: ["Mars"],
    7: ["Jupiter", "Venus"],
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <UserPage />

      {/* <Astakavarga /> */}

      {/* <ChartCopy /> */}

      {/* <ChartAreaGradient /> */}

      {/* <LagnaChart data={chartData} /> */}
    </div>
  );
}
