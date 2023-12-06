import {
  ChartBar,
  ChatCircleDots,
  CreditCard,
  Gear,
  PlusCircle,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export function NavBar() {
  return (
    <nav className="flex flex-col min-h-screen w-56 bg-slate-900">
      <figure>
        <Image className="ml-4" src={Logo} alt="" />
        <div className="border mt-4 border-gray-700"></div>
      </figure>

      <Link
        href={"/"}
        className="flex text-white p-4 space-x-2 hover:bg-orange-500 mt-4"
      >
        <ChartBar size={24} />
        <p>Painel</p>
      </Link>

      <Link
        href={"/courses/new"}
        className="flex text-white p-4 space-x-2 hover:bg-orange-500"
      >
        <PlusCircle size={24} />
        <p>Criar novo curso</p>
      </Link>

      <Link
        href={"/courses"}
        className="flex text-white p-4 space-x-2 hover:bg-orange-500"
      >
        <Stack size={24} />
        <p>Meus cursos</p>
      </Link>
      <Link
        href={"/earnings"}
        className="flex text-white p-4 space-x-2 hover:bg-orange-500"
      >
        <CreditCard size={24} />
        <p>Ganhos</p>
      </Link>
      <Link
        href={"/mensages"}
        className="flex text-white p-4 space-x-2 hover:bg-orange-500"
      >
        <ChatCircleDots size={24} />
        <p>Mensagens</p>
      </Link>
      <Link
        href={"/settings"}
        className="flex text-white p-4 space-x-2 hover:bg-orange-500"
      >
        <Gear size={24} />
        <p>Settings</p>
      </Link>
    </nav>
  );
}
