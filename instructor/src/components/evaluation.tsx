import { LineChartTest } from "./line-chart-test";
import { ProgressBar } from "@tremor/react";
import { Star } from "@phosphor-icons/react/dist/ssr";

export function Evaluation() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col flex-1 w-96 min-w-full  bg-white">
        <div className="h-12 flex items-center p-2 justify-between ">
          <h4>Avaliação geral dos curso</h4>
          <select className="bg-white ">
            <option value="">Hoje</option>
            <option value="">Ontem</option>
          </select>
        </div>
        <div className="border"></div>
        <div className="flex p-4 gap-4">
          <div className="flex  flex-col bg-red-100 p-4 items-center justify-center h-36 gap-2">
            <h2 className="text-2xl font-medium">4.6</h2>
            <div className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>Avaliação geral</p>
          </div>
          <div className="flex-1">
            <LineChartTest />
          </div>
        </div>
        <div className="p-4">
          <div className="flex-1">
            <div className="flex justify-center gap-2">
              <div className="flex">
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
              </div>
              <div className="flex flex-1 gap-2">
                <ProgressBar value={56} color="yellow" />
                <p>56%</p>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex justify-center gap-2">
              <div className="flex">
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" />
              </div>
              <div className="flex flex-1 gap-2">
                <ProgressBar value={37} color="yellow" />
                <p>37%</p>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex justify-center gap-2">
              <div className="flex">
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" />
                <Star size={12} color="#e3cc36" />
              </div>
              <div className="flex flex-1 gap-1">
                <ProgressBar value={8} color="yellow" />
                <p>8%</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center gap-2">
              <div className="flex">
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" />
                <Star size={12} color="#e3cc36" />
                <Star size={12} color="#e3cc36" />
              </div>
              <div className="flex flex-1 gap-2">
                <ProgressBar value={1} color="yellow" />
                <p>1%</p>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <div className="flex justify-center gap-2">
              <div className="flex">
                <Star size={12} color="#e3cc36" weight="fill" />
                <Star size={12} color="#e3cc36" />
                <Star size={12} color="#e3cc36" />
                <Star size={12} color="#e3cc36" />
                <Star size={12} color="#e3cc36" />
              </div>
              <div className="flex flex-1 gap-2">
                <ProgressBar value={6} color="yellow" />
                <p>6%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
