import { Card } from "@/components/card";
import { AreaChart } from "@/components/area-chart";
import { Header } from "@/components/header";
import card from "../../../public/Cards.svg";
import Image from "next/image";
import {
  ArrowLeft,
  Dot,
  DotOutline,
  ArrowRight,
  PlusCircle,
} from "@phosphor-icons/react/dist/ssr";
export default function Earnings() {
  return (
    <main className="flex flex-col space-y-8">
      <Header page="Ganhos" />
      <div className="mx-28 space-y-8">
        <section className="grid grid-cols-4 gap-4">
          <Card title="Rendimento total" total={50} />
          <Card title="Saldo total" total={30} />
          <Card title="Retiradas totais" total={19} />
          <Card title="Retiradas hoje" total={50} />
        </section>
        <section className="flex flex-col gap-8">
          <div className="flex gap-6">
            <div className="flex flex-col flex-1 w-72 bg-white">
              <div className="h-12 flex items-center p-2 justify-between ">
                <h4>Receita</h4>
                <select className="bg-white ">
                  <option value="">Hoje</option>
                  <option value="">Ontem</option>
                </select>
              </div>
              <div className="border"></div>
              <AreaChart />
            </div>

            <div className="flex flex-col w-80 bg-white p-2">
              <div className="h-12 flex items-center justify-between ">
                <h4>Cartões</h4>
                <select className="bg-white ">
                  <option value="">Receita</option>
                </select>
              </div>
              <div className="border"></div>
              <div className="flex flex-col">
                <Image src={card} alt="visa card" />
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <DotOutline size={32} weight="fill" />
                    <DotOutline size={32} weight="fill" />
                  </div>
                  <div className="flex">
                    <ArrowLeft size={20} />
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex items-center justify-center mt-4">
                <PlusCircle size={28} />
                <p>Adcionar novo cartão</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
