import {
  DotsThree,
  Star,
  User as UserIcon,
} from "@phosphor-icons/react/dist/ssr";
import { User } from "@nextui-org/react";

import course1 from "../../../../public/course1.png";

import { Header } from "@/components/header";
import Image from "next/image";
import { Breadcrums } from "@/components/breadcrumbs";
import { Card } from "@/components/card";
import { Evaluation } from "@/components/evaluation";
import { AreaChart } from "@/components/area-chart";
import { LineChart } from "@/components/line-chart";

export default function Courses() {
  return (
    <main className="flex flex-col space-y-8">
      <Header page="Meus Cursos" />
      <div className="flex flex-col mx-28 space-y-8">
        <section className="flex gap-2">
          <Breadcrums />
        </section>
        <section className="bg-white p-4">
          <div className="flex w-75 gap-2 bg-white">
            <div
              style={{
                position: "relative",
                width: "30%",
                height: "200px",
              }}
            >
              <Image
                fill={true}
                objectFit="cover"
                src={course1}
                alt="course 1"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="px-2">
                <div className="flex">
                  <p className="text-sm p-1 text-slate-400">
                    Disponibilizado: Jan 21,2023
                  </p>
                  <p className="text-sm p-1 text-slate-400">
                    Actualizado: Jan 21,2023
                  </p>
                </div>
                <h5 className="font-medium">React Curso Completo</h5>
                <h5 className="text-sm  text-slate-400">
                  React Curso Completo para sair do zero ao 100 no React
                </h5>
              </div>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <div className="flex">
                    <User
                      name=""
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                    />
                    <div>
                      <p className="text-sm text-slate-400">Created by</p>
                      <strong className="text-sm">Kevin Gilbert</strong>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex">
                    <Star size={18} color="#e3cc36" weight="fill" />
                    <Star size={18} color="#e3cc36" weight="fill" />
                    <Star size={18} color="#e3cc36" weight="fill" />
                    <Star size={18} color="#e3cc36" weight="fill" />
                    <Star size={18} color="#e3cc36" weight="fill" />
                  </div>
                  <p>5.0</p>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex justify-between px-2">
                <div className="flex justify-between gap-6">
                  <div className="flex flex-col">
                    <p className="">
                      <strong>AOA</strong> 24.000
                    </p>
                    <p className="text-sm text-slate-400">Preço do curso</p>
                  </div>
                  <div className="flex flex-col">
                    <p>
                      <strong>AOA</strong> 245.000
                    </p>
                    <p className="text-sm text-slate-400">Vendas Total</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex bg-orange-500 h-12 w-40 justify-center items-center">
                    <a className="text-sm text-white semi-bold text-center">
                      Retirar o Dinheiro
                    </a>
                  </div>
                  <DotsThree size={32} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex gap-6">
          <div className="grid grid-cols-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex-1">
            <Evaluation />
          </div>
        </section>
        <section className="flex gap-6">
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
        </section>
      </div>
    </main>
  );
}
