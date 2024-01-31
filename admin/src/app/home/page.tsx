import { Card } from "@/components/card";
import { AreaChart } from "@/components/area-chart";
import { BarChart } from "@/components/bar-chart";
import { LineChart } from "@/components/line-chart";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8">
      <Header page="Painel" />
      <div className="mx-28 space-y-8">
        <section className="grid grid-cols-4 gap-4">
          <Card title="Estudantes" number={50} />
          <Card title="Instructores" number={50} />
          <Card title="Cursos" number={50} />
          <Card title="Total de Cursos Vendidos" number={50} />
          <Card title="Cursos Activos" number={50} />
          <Card title="Cursos Pendentes" number={50} />
          <Card title="Cursos Rejeitados" number={50} />
          <Card title="Cursos Vendidos" number={50} />
        </section>
        <section className="flex flex-col gap-8">
          <div className="flex gap-6">
            <div className="flex flex-1 flex-col w-96 bg-white">
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

            <div className="flex flex-col w-64 bg-white">
              <div className="h-12 flex items-center p-2 justify-between ">
                <h4>Vista de</h4>
                <select className="bg-white ">
                  <option value="">Hoje</option>
                  <option value="">Ontem</option>
                </select>
              </div>
              <div className="border"></div>
              <BarChart />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-1 flex-col  bg-white">
              <div className="h-12 flex items-center p-2 justify-between ">
                <h4>Visão geral do curso</h4>
                <select className="bg-white ">
                  <option value="">Esta semana</option>
                  <option value="">Ontem</option>
                </select>
              </div>
              <div className="border"></div>
              <LineChart />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
