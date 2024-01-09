"use client";
import { AreaChart as Chart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    "": 2338,
  },
  {
    date: "Feb 22",
    "": 2103,
  },
  {
    date: "Mar 22",
    "": 2194,
  },
  {
    date: "Apr 22",
    "": 2108,
  },
  {
    date: "May 22",
    "": 1812,
  },
  {
    date: "Jun 22",
    "": 1726,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export function AreaChart() {
  return (
    <Chart
      className="h-72 mt-4 m-2 text-sm"
      data={chartdata}
      index="date"
      categories={[""]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
    />
  );
}
