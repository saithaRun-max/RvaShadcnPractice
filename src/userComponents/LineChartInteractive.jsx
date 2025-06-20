"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { graphData } from "@/lib/constants";

export const description = "An interactive area chart";

const chartConfig = {
  year: {
    label: "year",
    value: "year",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};

const LineChartInteractive = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-md bg-[#ffffff] shadow-md h-14 w-20 p-2">
          <p className="font-semibold text-md">{label}</p>

          <p className="pt-2  ">
            {"value"}
            <span className="font-semibold pl-1">
              {` ${payload[0].value}`}{" "}
            </span>
          </p>
        </div>
      );
    }
  };

  return (
    <Card className=" p-1 max-w-5xl ">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={graphData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="year" />

            <YAxis />

            <CartesianGrid strokeDasharray="3 3" />
            {/* <Tooltip viewBox="PolarViewBox" /> */}

            <ChartTooltip content={<CustomTooltip />} />

            {/* <ChartTooltip
              content={
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className={"h-8 content-center"}
                      labelKey="value"
                      hideIndicator
                    />
                  }
                />
              }
            /> */}

            <Area
              type="bump"
              dataKey="value"
              stroke="#4f46e5"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartInteractive;
