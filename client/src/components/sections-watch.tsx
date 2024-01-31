"use client";
import { removeTimestamp } from "@/helpers";
import { api } from "@/lib/api";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { File, Play } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { IoChatbubblesOutline, IoPersonCircleOutline } from "react-icons/io5";

type Props = {
  sections: any[];
  token: string;
  courseId: string;
};

export function SectionsWatch({ sections, courseId, token }: Props) {
  const [video, setVideo] = useState(sections[0].lecture[0].url);
  const [title, setTitle] = useState(sections[0].lecture[0].name);

  function changeVideo(lecture: any) {
    setVideo(lecture.url);
    setTitle(lecture.name);
  }

  return (
    <div className="flex gap-4 mx-20">
      <div className="space-y-2">
        <video
          className="w-[1044px] h-[650px]"
          src={`${api.getUri()}/${video}`}
          controls
        ></video>
        <div className="space-y-2">
          <h2 className="text-xl mt-2">{title}</h2>

          <div className="flex justify-end">
            <div className="flex gap-3 text-xs text-gray-500">
              <p>última actualização: Abril 23,2023</p>
              <p>Comentários: 154</p>
            </div>
          </div>
          <hr />
        </div>

        <div className="flex space-x-10 text-gray-700">
          <a
            className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center"
            href="#Descrição"
          >
            Descrição
          </a>

          <a
            className="hover:border-b-2 hover:border-orange-500 pb-3 p-3 text-center"
            href="#Comment"
          >
            Comentários
          </a>
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold" id="Descrição">
            Descrição das palestras
          </h2>
          <p className="text-sm text-gray-600">
            We cover everything you need to build your first website. From
            creating your first page through to uploading your website to the
            internet. We’ll use the world’s most popular (and free) web design
            tool called Visual Studio Code. There are exercise files you can
            download and then work along with me. At the end of each video I
            have a downloadable version of where we are in the process so that
            you can compare your project with mine. This will enable you to see
            easily where you might have a problem. We will delve into all the
            good stuff such as how to create your very own mobile burger menu
            from scratch learning some basic JavaScript and jQuery.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center mb-5">
            <h3 className="text-xl font-semibold" id="Comment">
              Comentários
            </h3>
            <h3 className="text-xl ml-2"> (154)</h3>
          </div>
          <div className="flex space-x-2 mb-4">
            <IoPersonCircleOutline size={35} />
            <div>
              <div className="flex gap-2 items-center mb-1">
                <p className="text-sm">Malcolm Silva</p>
                <p className="text-[10px] text-gray-500">Há uma semana</p>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Gostei da aula, bem explicita
              </p>
              <div className="flex gap-2 text-gray-600 items-center">
                <IoChatbubblesOutline size={18} />
                <p className="text-xs">RESPONDER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Accordion className="w-96">
          {sections.map((section) => {
            return (
              <AccordionItem
                className="w-96"
                key={section.name}
                aria-label={section.name}
                title={section.name}
              >
                {section.lecture.map((lecture) => {
                  return (
                    <div>
                      {lecture.type === "video" ? (
                        <button
                          className="flex items-center gap-2"
                          onClick={() => changeVideo(lecture)}
                        >
                          <Play /> {removeTimestamp(lecture.name)}
                        </button>
                      ) : (
                        <a
                          href={`${api.getUri()}/${lecture.url}`}
                          download
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          <File /> {removeTimestamp(lecture.name)}
                        </a>
                      )}
                    </div>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
