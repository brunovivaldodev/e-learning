import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Plus, Trash, List } from "@phosphor-icons/react/dist/ssr";

export function TableSection() {
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

  return (
    <Card>
      <CardBody>
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
                    />
                  </div>
                  <div className="flex gap-6">
                    <Plus size={24} onClick={() => addSection(index)} />
                    <Trash size={24} onClick={() => removeSection(index)} />
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
                          type="text"
                          placeholder="Nome da leitura"
                        />
                      </div>
                      <div className="flex items-center gap-6">
                        <Dropdown>
                          <DropdownTrigger>
                            <Button variant="bordered">conteúdo</Button>
                          </DropdownTrigger>
                          <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">New file</DropdownItem>
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem
                              key="delete"
                              className="text-danger"
                              color="danger"
                            >
                              Delete file
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                        <Plus size={24} onClick={() => addLesson(index)} />
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
      </CardBody>
    </Card>
  );
}
