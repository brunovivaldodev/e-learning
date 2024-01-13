"use client";
import { LineChart as Chart } from "@tremor/react";

const chartdata = [
  {
    year: 1970,
    "": 2.04,
  },
  {
    year: 1971,
    "": 1.96,
  },
  {
    year: 1972,
    "": 1.96,
  },
  {
    year: 1973,
    "": 1.93,
  },
  {
    year: 1974,
    "": 1.88,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export function LineChartTest() {
  return (
    <Chart
      className="mt-6 h-32"
      data={chartdata}
      index="year"
      categories={[""]}
      colors={["yellow"]}
      valueFormatter={valueFormatter}
      showXAxis={false}
      showYAxis={false}
      showGridLines={false}
    />
  );
}
