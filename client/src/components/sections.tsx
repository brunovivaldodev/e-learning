"use client";
import { removeTimestamp } from "@/helpers";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { File, Play } from "@phosphor-icons/react/dist/ssr";

type Props = {
  sections: any[];
};

export function Sections({ sections }: Props) {
  return (
    <Accordion>
      {sections.map((section) => {
        return (
          <AccordionItem
            key={section.name}
            aria-label={section.name}
            title={section.name}
          >
            {section.lecture.map((lecture) => {
              return (
                <div>
                  {lecture.type === "video" ? (
                    <p className="flex items-center gap-2">
                      <Play /> {removeTimestamp(lecture.name)}
                    </p>
                  ) : (
                    <p className="flex items-center gap-2">
                      <File /> {removeTimestamp(lecture.name)}
                    </p>
                  )}
                </div>
              );
            })}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
