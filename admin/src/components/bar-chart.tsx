"use client";
import { BarChart as Chart } from "@tremor/react";

const chartdata = [
  {
    name: "",
    "": 2488,
  },
  {
    name: "",
    "": 1445,
  },
  {
    name: "",
    "": 743,
  },
  {
    name: "",
    "": 281,
  },
  {
    name: "",
    "": 251,
  },
  {
    name: "",
    "": 232,
  },
  {
    name: "",
    "": 98,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export function BarChart() {
  return (
    <Chart
      className="mt-6 text-sm"
      data={chartdata}
      index="name"
      categories={[""]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  );
}
