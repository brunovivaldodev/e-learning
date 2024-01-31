import { Header } from "@/components/header";
import Tabs from "@/components/tabs";
import WaitingValidation from "@/components/waiting-validation";
import { getInstructor } from "@/contexts/auth";
import { api } from "@/lib/api";

export default async function NewCourses() {
  const res = await api.get(`/instructors/${getInstructor().sub}`);

  const instructor = res.data;

  return (
    <main className="flex flex-col space-y-8">
      <Header page="Painel" />
      <div className="mx-28 space-y-8">
        {instructor.decision === "Aprovado" ? <Tabs /> : <WaitingValidation />}
      </div>
    </main>
  );
}
