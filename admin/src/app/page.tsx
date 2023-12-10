import {
  Bell,
  MagnifyingGlass,
  PlayCircle,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { CardBody, CardHeader, Image, User } from "@nextui-org/react";
import { Card } from "@/components/card";
import { AreaChart } from "@/components/area-chart";
import { BarChart } from "@/components/bar-chart";
import { LineChart } from "@/components/line-chart";
import { LineChartTest } from "@/components/line-chart-test";
import { ProgressBar } from "@tremor/react";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8">
      <nav className="flex flex-1 items-center space-x-96 justify-around bg-white p-2">
        <div>
          <h3>Bom dia</h3>
          <h2>Painel</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-72 bg-slate-100 p-1">
            <MagnifyingGlass size={20} />
            <input
              className="bg-slate-100 p-2 w-64"
              type="text"
              placeholder="Pesquisar"
            />
          </div>
          <Bell size={24} />
          <User
            name=""
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </div>
      </nav>
      <div className="mx-28 space-y-8">
        <section className="grid grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <section className="flex flex-col gap-8">
          <div className="flex gap-6">
            <div className="flex flex-col w-80 bg-white">
              <div className="h-12 flex items-center p-2 justify-between ">
                <h4>Vista de perfil</h4>
                <select className="bg-white ">
                  <option value="">Hoje</option>
                  <option value="">Ontem</option>
                </select>
              </div>
              <div className="border"></div>
              <div className="flex p-2">
                <User
                  name=""
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
                <div>
                  <p>
                    <strong>Kevin</strong> comentou no seu curso{" "}
                    <strong>React na prática</strong> {"  "}
                    "Muito bom esse curso gostei"
                  </p>
                </div>
              </div>
              <div className="flex p-2">
                <User
                  name=""
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
                <div>
                  <p>
                    <strong>Kevin</strong> comentou no seu curso{" "}
                    <strong>React na prática</strong> {"  "}
                    "Muito bom esse curso gostei"
                  </p>
                </div>
              </div>
              <div className="flex p-2">
                <User
                  name=""
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
                <div>
                  <p>
                    <strong>Kevin</strong> comentou no seu curso{" "}
                    <strong>React na prática</strong> {"  "}
                    "Muito bom esse curso gostei"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-96 bg-white">
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
            <div className="flex flex-col w-96 bg-white">
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
