import { Header } from "@/components/header";
import Tabs from "@/components/tabs";

export default function NewCourses() {
  return (
    <main className="flex flex-col space-y-8">
      <Header page="Painel" />
      <div className="mx-28 space-y-8">
        <Tabs />
      </div>
    </main>
  );
}
