"use client";
import { BreadcrumbItem, Breadcrumbs as Bread } from "@nextui-org/react";

export function Breadcrums() {
  return (
    <Bread separator={"/"}>
      <BreadcrumbItem>Curso</BreadcrumbItem>
      <BreadcrumbItem>Meus Cursos</BreadcrumbItem>
      <BreadcrumbItem>Desenvolvimento</BreadcrumbItem>
      <BreadcrumbItem>Desenvolvimento Web</BreadcrumbItem>
      <BreadcrumbItem>React Curso Completo</BreadcrumbItem>
    </Bread>
  );
}
