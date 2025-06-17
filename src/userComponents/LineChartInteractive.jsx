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
  visitors: {
    label: "Visitors",
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
  return (
    <Card className="w-full max-w-6xl mx-auto my-20 p-4">
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

            <ChartTooltip
              content={
                <ChartTooltipContent
                  className={"h-8 content-center"}
                  labelKey="value"
                  hideIndicator
                />
              }
            />

            {/* <ChartTooltip
                content={
                  <ChartTooltipContent <ChartTooltipContent labelKey="activities" indicator="line" /> indicator="line" />
                }
                cursor={false}
                defaultIndex={1}
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
