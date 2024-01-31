"use client";
import { BreadcrumbItem, Breadcrumbs as Bread } from "@nextui-org/react";
type Props = {
  categorie: string;
  course: string;
};

export function Breadcrums({ categorie, course }: Props) {
  return (
    <Bread separator={"/"}>
      <BreadcrumbItem>Curso</BreadcrumbItem>
      <BreadcrumbItem>{categorie}</BreadcrumbItem>
      <BreadcrumbItem>{course}</BreadcrumbItem>
    </Bread>
  );
}
