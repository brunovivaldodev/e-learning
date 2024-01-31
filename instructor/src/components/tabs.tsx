"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Tabs as TabComponent,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  ClipboardText,
  List,
  MonitorPlay,
  PlayCircle,
  Plus,
  Stack,
  Trash,
} from "@phosphor-icons/react/dist/ssr";

import preview from "../../public/thumbnail.png";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { api } from "@/lib/api";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Tabs() {
  const keys = ["basic", "advanced", "currículo", "course"];
  const [selected, setSelected] = useState("basic");
  const [counter, setCounter] = useState(0);
  const [thumb, setThumb] = useState<string | null>(null);
  const [trailer, setTrailer] = useState<string | null>(null);
  const router = useRouter();

  function onThumbSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setThumb(previewURL);
  }

  function onTrailerSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setTrailer(previewURL);
  }

  const [sections, setSections] = useState([[0]]);
  const [lessons, setLessons] = useState([[0]]);

  function addSection(index: number) {
    setSections([...sections, [index + 1]]);
    setLessons([...lessons, [index + 1]]);
  }

  function removeSection(index: number) {
    if (sections.length === 1) return;
    sections.splice(index, 1);
    setSections([...sections]);
  }

  function addLesson(index: number) {
    lessons[index].push(lessons[index].length + 1);
    setLessons([...lessons]);
  }

  function removeLesson(index: number, element: number) {
    if (lessons[index].length === 1) return;
    lessons[index].splice(element, 1);
    setSections([...lessons]);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  function removeKeyAtIndex(keys: string[], index: number): string[] {
    if (index < 0 || index >= keys.length) {
      // Verificar se o índice está dentro dos limites do array
      console.error("Índice inválido");
      return keys;
    }

    // Criar uma cópia do array original sem o elemento na posição indicada pelo índice
    const updatedKeys = [...keys.slice(0, index), ...keys.slice(index + 1)];
    return updatedKeys;
  }

  function validation1(obj: Record<string, any>): boolean {
    return (
      !obj.hasOwnProperty("title") &&
      !obj.hasOwnProperty("subtitle") &&
      !obj.hasOwnProperty("categories") &&
      !obj.hasOwnProperty("language") &&
      !obj.hasOwnProperty("level") &&
      !obj.hasOwnProperty("duration") &&
      !obj.hasOwnProperty("price")
    );
  }

  function validation2(obj: Record<string, any>): boolean {
    return (
      !obj.hasOwnProperty("description") &&
      !obj.hasOwnProperty("thumbnail") &&
      !obj.hasOwnProperty("trailer") &&
      !obj.hasOwnProperty("lessons1") &&
      !obj.hasOwnProperty("lessons2") &&
      !obj.hasOwnProperty("requirements1") &&
      !obj.hasOwnProperty("requirements2") &&
      !obj.hasOwnProperty("target_Audience1") &&
      !obj.hasOwnProperty("target_Audience2")
    );
  }
  const onSubmit = (data) => {
    if (validation1(data)) {
      setSelected(keys[counter + 1]);
      setCounter(counter + 1);
    } else {
      console.log("trengo erro");
    }
  };

  const onSubmit1 = (data) => {
    if (validation2(data)) {
      setSelected(keys[counter + 1]);
      setCounter(counter + 1);
    } else {
      console.log("trengo erro");
    }
  };

  const onSubmit2 = (data) => {
    if (isValid) {
      setSelected(keys[counter + 1]);
      setCounter(counter + 1);
    } else {
      console.log("trengo erro");
    }
  };

  async function onSubmit3(data) {
    const formData = new FormData();

    const lessonsArr = [];
    const settionsData = [];

    for (let i = 0; i < sections.length; i++) {
      settionsData.push(data[`section${i}`]);
    }

    for (let i = 0; i < lessons.length; i++) {
      lessonsArr.push(lessons[i].length);
      for (let j = 0; j < lessons[i].length; j++) {
        formData.set(`lesson${i}${j}`, data[`lesson${i}${j}`][0]);
      }
    }

    formData.set("title", data.title);
    formData.set("subtitle", data.subtitle);
    formData.set("categories", data.categories);
    formData.set("language", data.language);
    formData.set("level", data.level);
    formData.set("duration", data.duration);
    formData.set("price", data.price);
    formData.set("description", data.description);
    formData.set("thumbnail", data.thumbnail[0]);
    formData.set("trailer", data.trailer[0]);
    formData.set(
      "targetAudience",
      [
        data.target_Audience1,
        data.target_Audience2,
        data.target_Audience3,
        data.target_Audience4,
      ].toString()
    );
    formData.set(
      "requirements",
      [
        data.requirements1,
        data.requirements2,
        data.requirements3,
        data.requirements4,
      ].toString()
    );
    formData.set(
      "lessons",
      [data.lessons1, data.lessons2, data.lessons3, data.lessons4].toString()
    );
    formData.set("sections", settionsData.toString());

    formData.set("lessonsArray", lessonsArr.toString());

    api.post(`/courses/`, formData, {
      headers: { Authorization: `Bearer ${getCookie("token")}` },
    });

    router.replace("/home");
  }

  const previousTab = () => {
    setSelected(keys[counter - 1]);
    setCounter(counter - 1);
  };

  return (
    <div className="flex w-full flex-col">
      <TabComponent
        aria-label="Options"
        variant="underlined"
        radius="none"
        selectedKey={selected}
        onSelectionChange={setSelected}
        disabledKeys={removeKeyAtIndex(keys, counter)}
      >
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
                    {...register("title", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Subtitulo
                </label>
                <div className="mt-2">
                  <input
                    {...register("subtitle", { required: true })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      {...register("categories", { required: true })}
                    >
                      <option value="Densevolvimento">Densevolvimento</option>
                      <option value="Negócios">Negócios</option>
                      <option value="IT & Software">IT & Software</option>
                      <option value="Contabilidade e Finanças">
                        Contabilidade e Finanças
                      </option>
                      <option value="Productictividade e Escrítorio">
                        Productictividade e Escrítorio
                      </option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sáude">Sáude</option>
                      <option value="Música">Música</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Idioma do curso
                  </label>
                  <div className="mt-2">
                    <select
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      {...register("language", { required: true })}
                    >
                      <option value="Português">Português</option>
                      <option value="Inglês">Inglês</option>
                      <option value="Francês">Francês</option>
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
                      {...register("level", { required: true })}
                    >
                      <option value="Iniciante">Iniciante</option>
                      <option value="Intermediário">Intermediário</option>
                      <option value="Avançado">Avançado</option>
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
                      {...register("duration", { required: true })}
                    >
                      <option value="1-7 Dias">1-7 Dias</option>
                      <option value="1-4 Semanas">1-4 Semanas</option>
                      <option value="3-6 Meses">3-6 Meses</option>
                      <option value="6-12 Meses">6-12 Meses</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Preço
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      {...register("price", { required: true })}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6 justify-end">
                <button
                  className="flex bg-orange-500 h-12 w-36 justify-center items-center"
                  onClick={handleSubmit(onSubmit, onSubmit)}
                >
                  Salvar e Proximo
                </button>
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
                    <Image
                      src={thumb ? thumb : preview}
                      alt=""
                      width={200}
                      height={200}
                    />
                    <div className="w-56">
                      <p>
                        Carregue a miniatura do seu curso aqui. Diretrizes
                        importantes: 1200x800 pixels ou proporção 12:8. Formato
                        compatível: .jpg, .jpeg ou .png
                      </p>
                      <input
                        type="file"
                        {...register("thumbnail", {
                          required: true,
                          onChange: onThumbSelected,
                        })}
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Trailler do Curso</h2>
                  <div className="flex gap-2">
                    <Image
                      src={trailer ? trailer : preview}
                      alt=""
                      width={200}
                      height={200}
                    />
                    <div className="w-56">
                      <p>
                        Carregue a miniatura do seu curso aqui. Diretrizes
                        importantes: 1200x800 pixels ou proporção 12:8. Formato
                        compatível: .jpg, .jpeg ou .png
                      </p>
                      <input
                        type="file"
                        {...register("trailer", {
                          required: true,
                          onChange: onTrailerSelected,
                        })}
                        accept="video/*"
                      />
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
                    rows={7}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("description", { required: true })}
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("lessons1", { required: true })}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    02
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("lessons2", { required: true })}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    03
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("lessons3")}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    04
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("lessons4")}
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("target_Audience1", { required: true })}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    02
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("target_Audience2", { required: true })}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    03
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("target_Audience3")}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    04
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("target_Audience4")}
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("requirements1", { required: true })}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    02
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("requirements2", { required: true })}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    03
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("requirements3")}
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    04
                  </label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("requirements4")}
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-6 justify-between">
                <button
                  className="flex bg-orange-300 h-12 w-24 justify-center items-center"
                  onClick={previousTab}
                >
                  Anterior
                </button>
                <button
                  className="flex bg-orange-500 h-12 w-36 justify-center items-center"
                  onClick={handleSubmit(onSubmit1, onSubmit1)}
                >
                  Salvar e Proximo
                </button>
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
              <div className="border mb-4"></div>

              {sections.map((section, index) => {
                return (
                  <Card className="mb-4">
                    <CardHeader>
                      <div className="flex w-full justify-between items-center ">
                        <div className="flex gap-2">
                          <p>Seccão {index} :</p>
                          <input
                            className="w-96"
                            type="text"
                            placeholder="Nome da Secção"
                            {...register(`section${index}`, { required: true })}
                          />
                        </div>
                        <div className="flex gap-6">
                          <Plus size={24} onClick={() => addSection(index)} />
                          <Trash
                            size={24}
                            onClick={() => removeSection(index)}
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody>
                      {lessons[index].map((lesson, index1) => {
                        return (
                          <div className="flex w-full justify-between items-center mb-4">
                            <div className="flex gap-2">
                              <List size={24} />
                              <input
                                className="w-96"
                                type="file"
                                placeholder="Nome da leitura"
                                key={index}
                                {...register(`lesson${index}${index1}`)}
                              />
                            </div>
                            <div className="flex items-center gap-6">
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button variant="bordered">conteúdo</Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                  <DropdownItem key="new">
                                    New file
                                  </DropdownItem>
                                  <DropdownItem key="copy">
                                    Copy link
                                  </DropdownItem>
                                  <DropdownItem key="edit">
                                    Edit file
                                  </DropdownItem>
                                  <DropdownItem
                                    key="delete"
                                    className="text-danger"
                                    color="danger"
                                  >
                                    Delete file
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                              <Plus
                                size={24}
                                onClick={() => addLesson(index)}
                              />
                              <Trash
                                size={24}
                                onClick={() => removeLesson(index, index1)}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </CardBody>
                  </Card>
                );
              })}
              <div className="flex gap-2 mt-80 justify-between">
                <button
                  className="flex bg-orange-300 h-12 w-24 justify-center items-center"
                  onClick={previousTab}
                >
                  Anterior
                </button>
                <button
                  className="flex bg-orange-500 h-12 w-36 justify-center items-center"
                  onClick={handleSubmit(onSubmit2, onSubmit2)}
                >
                  Salvar e Proximo
                </button>
              </div>
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
              <div className="font-semibold text-medium">Publicar Curso</div>
              <div className="border"></div>
              <div className="flex gap-8 p-5">
                <p className="text-lg">
                  O seu curso será enviado para revisão. Clique em Carregar para
                  continuar.
                </p>
              </div>
              <div className="flex gap-2 mt-80 justify-between">
                <button
                  className="flex bg-orange-300 h-12 w-24 justify-center items-center"
                  onClick={previousTab}
                >
                  Anterior
                </button>
                <button
                  className="flex bg-orange-500 h-12 w-36 justify-center items-center"
                  onClick={handleSubmit(onSubmit3, onSubmit3)}
                >
                  Carregar
                </button>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </TabComponent>
    </div>
  );
}
