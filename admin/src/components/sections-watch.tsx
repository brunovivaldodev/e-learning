"use client";
import { api } from "@/lib/api";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { File, Play } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  sections: any[];
  token: string;
  courseId: string;
};

export function SectionsWatch({ sections, courseId, token }: Props) {
  const router = useRouter();

  const [video, setVideo] = useState(sections[0].lecture[0].url);
  const [title, setTitle] = useState(sections[0].lecture[0].name);

  function changeVideo(lecture: any) {
    setVideo(lecture.url);
    setTitle(lecture.name);
  }
  function Aprove() {
    api.post(
      `/admins/courses/${courseId}`,
      {
        decision: "Aprovado",
      },

      { headers: { Authorization: `Bearer ${token}` } }
    );

    router.replace("/courses");
  }

  function Reject() {
    api.post(
      `/admins/courses/${courseId}`,
      {
        decision: "Rejeitado",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    router.replace("/courses");
  }

  return (
    <>
      <div className="h-40 w-full">
        <div className="space-y-2">
          <video
            className="w-[850px] h-[650px]"
            src={`${api.getUri()}/${video}`}
            controls
          ></video>
          <h2 className="text-xl">{title}</h2>
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
                          <Play /> {lecture.name}
                        </button>
                      ) : (
                        <a
                          href={`${api.getUri()}/${lecture.url}`}
                          download
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          <File /> {lecture.name}
                        </a>
                      )}
                    </div>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
        <div className="flex w-full gap-2  justify-center">
          <div className="flex justify-between gap-20">
            <button
              onClick={Reject}
              className="flex bg-orange-300 h-12 w-24 justify-center items-center"
            >
              Rejeitar
            </button>
            <button
              onClick={Aprove}
              className="flex bg-orange-500 h-12 w-36 justify-center items-center"
            >
              Aprovar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
