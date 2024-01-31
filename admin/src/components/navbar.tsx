import { ChartBar, Gear, Stack } from "@phosphor-icons/react/dist/ssr";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export function NavBar() {
  return (
    <nav className="flex flex-col min-h-screen w-56 bg-slate-900">
      <div className="fixed">
        <figure>
          <Image className="ml-4" src={Logo} alt="" />
          <div className="border w-48 mt-4 border-gray-700"></div>
        </figure>
        <Link
          href={"/"}
          className="flex text-white p-4 space-x-2 hover:bg-orange-500 mt-4"
        >
          <ChartBar size={24} />
          <p>Painel</p>
        </Link>

        <Link
          href={"/courses"}
          className="flex text-white p-4 space-x-2 hover:bg-orange-500"
        >
          <Stack size={24} />
          <p>Cursos Pendentes</p>
        </Link>

        <Link
          href={"/instructors"}
          className="flex text-white p-4 space-x-2 hover:bg-orange-500"
        >
          <Stack size={24} />
          <p>Instructores Pendentes</p>
        </Link>

        <Link
          href={"/settings"}
          className="flex text-white p-4 space-x-2 hover:bg-orange-500"
        >
          <Gear size={24} />
          <p>Settings</p>
        </Link>
      </div>
    </nav>
  );
}
