import { User } from "@nextui-org/react";
import { Bell, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

type HeaderProps = {
  page: string;
};

export function Header({ page }: HeaderProps) {
  return (
    <nav className="flex flex-1 items-center space-x-96 justify-around bg-white p-2">
      <div>
        <h3>Bom dia</h3>
        <h2>{page}</h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center w-72 bg-slate-100 p-1">
          <MagnifyingGlass size={20} />
          <input
            className="bg-slate-100 p-2 w-64"
            type="text"
            placeholder="Pesquisar"
          />
        </div>
        <Bell size={24} />
        <User
          name=""
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </div>
    </nav>
  );
}
