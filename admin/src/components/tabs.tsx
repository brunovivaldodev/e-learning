"use client";
import React from "react";
import { Tabs as TabComponent, Tab, Card, CardBody } from "@nextui-org/react";
import {
  ClipboardText,
  MonitorPlay,
  PlayCircle,
  Stack,
} from "@phosphor-icons/react/dist/ssr";

import thumb from "../../public/thumbnail.png";
import trailler from "../../public/trailler.png";

import Image from "next/image";
import { TableSection } from "./section-table";

export default function Tabs() {
  return (
    <div className="flex w-full flex-col">
      <TabComponent aria-label="Options" variant="underlined" radius="none">
        <Tab
          key="basic"
          title={
            <div className="flex items-center space-x-2">
              <Stack />
              <span>Informações basicas</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="font-semibold text-medium">
                Informações Básicas
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Titulo
                </label>
                <div className="mt-2">
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Subtitulo
                </label>
                <div className="mt-2">
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Categoria do curso
                  </label>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="selecione ..."
                    >
                      <option value="">teste</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Subcategorias do curso
                  </label>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="selecione ..."
                    >
                      <option value="">teste</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Topico do curso
                </label>
                <div className="mt-2">
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Idioma do curso
                  </label>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="selecione ..."
                    >
                      <option value="">teste</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Subidioma do curso
                  </label>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="selecione ..."
                    >
                      <option value="">teste</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nível do curso
                  </label>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="selecione ..."
                    >
                      <option value="">teste</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Duração do curso
                  </label>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="selecione ..."
                    >
                      <option value="">teste</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6 justify-between">
                <div className="flex bg-orange-300 h-12 w-24 justify-center items-center">
                  <a className="text-sm font-semibold text-orange-500 text-center">
                    Cancelar
                  </a>
                </div>
                <div className="flex bg-orange-500 h-12 w-36 justify-center items-center">
                  <a className="text-sm text-white semi-bold text-center">
                    Salvar e Proximo
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="advanced"
          title={
            <div className="flex items-center space-x-2">
              <ClipboardText />
              <span>Informações Avançadas</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="font-semibold text-medium">
                Informações avançadas
              </div>
              <div className="border"></div>
              <div className="flex gap-8">
                <div>
                  <h2>Thumbnail do Curso</h2>
                  <div className="flex gap-2">
                    <Image src={thumb} alt="" />
                    <div className="w-56">
                      <p>
                        Carregue a miniatura do seu curso aqui. Diretrizes
                        importantes: 1200x800 pixels ou proporção 12:8. Formato
                        compatível: .jpg, .jpeg ou .png
                      </p>
                      <div className="flex bg-orange-300 h-12 w-36 justify-center items-center">
                        <a className="text-sm text-white semi-bold text-center">
                          Upload Da Imagem
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Trailler do Curso</h2>
                  <div className="flex gap-2">
                    <Image src={thumb} alt="" />
                    <div className="w-56">
                      <p>
                        Carregue a miniatura do seu curso aqui. Diretrizes
                        importantes: 1200x800 pixels ou proporção 12:8. Formato
                        compatível: .jpg, .jpeg ou .png
                      </p>
                      <div className="flex bg-orange-300 h-12 w-36 justify-center items-center">
                        <a className="text-sm text-white semi-bold text-center">
                          Upload Do Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border mt-4"></div>

              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Descrição Do Curso
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={7}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <h2 className="block text-sm font-medium leading-6 text-gray-900">
                  O que vais ensinar nesse curso
                </h2>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    01
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    02
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    03
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    04
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <h2 className="block text-sm font-medium leading-6 text-gray-900">
                  Público Alvo
                </h2>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    01
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    02
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    03
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    04
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <h2 className="block text-sm font-medium leading-6 text-gray-900">
                  Requisitos do Curso
                </h2>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    01
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    02
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    03
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    04
                  </label>
                  <input
                    id="about"
                    name="about"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-6 justify-between">
                <div className="flex bg-orange-300 h-12 w-24 justify-center items-center">
                  <a className="text-sm font-semibold text-orange-500 text-center">
                    Anterior
                  </a>
                </div>
                <div className="flex bg-orange-500 h-12 w-36 justify-center items-center">
                  <a className="text-sm text-white semi-bold text-center">
                    Salvar e Proximo
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="currículo"
          title={
            <div className="flex items-center space-x-2">
              <MonitorPlay />
              <span>Currículo</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <div className="font-semibold text-medium">
                Curriculo do curso
              </div>
              <div className="border"></div>

              <TableSection />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="course"
          title={
            <div className="flex items-center space-x-2">
              <PlayCircle />
              <span>Publicar curso</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
      </TabComponent>
    </div>
  );
}
