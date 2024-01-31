"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import CursoWatch from "./curso-watch";
import Purchase from "./Purchase";

type Props = {
  students: any;
};

export default function StudentsTabs({ students }: Props) {
  return (
    <div className="flex flex-col w-3/4 bg-white mb-20">
      <Tabs aria-label="Options">
        <Tab key="cursos" title="Cursos">
          <Card>
            <CardBody>
              <div>
                <div className="mt-5">
                  <span className="text-lg font-bold">Cursos</span>
                  <span className="text-lg font-thin">
                    {" "}
                    ({students.purchases.length})
                  </span>
                </div>

                <div className="flex mt-5 justify-between">
                  <div className="w-1/3">
                    <p className="text-gray-600 text-xs">Procurar:</p>
                    <div className="flex border border-gray-200 p-2 mt-1 items-center">
                      <MagnifyingGlass size={15} />
                      <input
                        className="text-xs w-full"
                        type="text"
                        name=""
                        id=""
                        placeholder=" Procura nos teus cursos..."
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {students.purchases.map((purchase) => {
                    return (
                      <CursoWatch
                        key={purchase.course.id}
                        categorie={purchase.course.categories}
                        id={purchase.course.id}
                        price={purchase.course.price}
                        title={purchase.course.title}
                        thumb=""
                        coments={23}
                        students={12}
                      />
                    );
                  })}
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="history" title="Historico De Compras">
          <Card>
            <CardBody>
              <div>
                {students.purchases.map((purchase) => {
                  return (
                    <Purchase
                      key={purchase.course.id}
                      title={purchase.course.title}
                      price={purchase.course.price}
                      date={purchase.course.created_at}
                    />
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
