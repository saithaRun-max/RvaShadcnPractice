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

export const description = "An interactive area chart";

const data = [
  {
    year: 2002,
    value: -46,
  },
  {
    year: 2003,
    value: 9,
  },
  {
    year: 2004,
    value: -81,
  },
  {
    year: 2005,
    value: -40,
  },
  {
    year: 2006,
    value: -40,
  },
  {
    year: 2007,
    value: -17,
  },
  {
    year: 2008,
    value: 23,
  },
  {
    year: 2009,
    value: 54,
  },
  {
    year: 2010,
    value: -1,
  },
  {
    year: 2011,
    value: 0,
  },
  {
    year: 2012,
    value: 70,
  },
  {
    year: 2013,
    value: 112,
  },
  {
    year: 2014,
    value: 112,
  },
  {
    year: 2015,
    value: 90,
  },
  {
    year: 2016,
    value: 110,
  },
  {
    year: 2017,
    value: 68,
  },
  {
    year: 2018,
    value: -35,
  },
  {
    year: 2019,
    value: -79,
  },
  {
    year: 2020,
    value: -79,
  },
  {
    year: 2021,
    value: -75,
  },
  {
    year: 2022,
    value: -75,
  },
  {
    year: 2023,
    value: 0,
  },
  {
    year: 2024,
    value: -2,
  },
  {
    year: 2025,
    value: -82,
  },
  {
    year: 2026,
    value: -12,
  },
  {
    year: 2027,
    value: 13,
  },
  {
    year: 2028,
    value: 113,
  },
  {
    year: 2029,
    value: 144,
  },
  {
    year: 2030,
    value: 4,
  },
  {
    year: 2031,
    value: 36,
  },
  {
    year: 2032,
    value: 60,
  },
  {
    year: 2033,
    value: 32,
  },
  {
    year: 2034,
    value: -119,
  },
  {
    year: 2035,
    value: -119,
  },
  {
    year: 2036,
    value: 50,
  },
  {
    year: 2037,
    value: 50,
  },
  {
    year: 2038,
    value: 0,
  },
  {
    year: 2039,
    value: 26,
  },
  {
    year: 2040,
    value: 26,
  },
  {
    year: 2041,
    value: 70,
  },
  {
    year: 2042,
    value: 0,
  },
  {
    year: 2043,
    value: 0,
  },
  {
    year: 2044,
    value: 0,
  },
  {
    year: 2045,
    value: -93.2,
  },
  {
    year: 2046,
    value: -87.2,
  },
  {
    year: 2047,
    value: -37.2,
  },
  {
    year: 2048,
    value: -176,
  },
  {
    year: 2049,
    value: -136,
  },
  {
    year: 2050,
    value: -46,
  },
  {
    year: 2051,
    value: 97,
  },
  {
    year: 2052,
    value: 53,
  },
  {
    year: 2053,
    value: -122,
  },
  {
    year: 2054,
    value: -122,
  },
  {
    year: 2055,
    value: -67,
  },
  {
    year: 2056,
    value: 23,
  },
  {
    year: 2057,
    value: -94,
  },
  {
    year: 2058,
    value: -60,
  },
  {
    year: 2059,
    value: -74,
  },
  {
    year: 2060,
    value: 40,
  },
  {
    year: 2061,
    value: 7,
  },
  {
    year: 2062,
    value: 11,
  },
  {
    year: 2063,
    value: -26,
  },
  {
    year: 2064,
    value: 9,
  },
  {
    year: 2065,
    value: 160,
  },
  {
    year: 2066,
    value: 120,
  },
  {
    year: 2067,
    value: 120,
  },
  {
    year: 2068,
    value: 33,
  },
  {
    year: 2069,
    value: 68,
  },
  {
    year: 2070,
    value: 63,
  },
  {
    year: 2071,
    value: -38,
  },
];

const LineChartInteractive = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto my-20 p-4">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="bump"
              dataKey="value"
              stroke="#4f46e5"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartInteractive;
