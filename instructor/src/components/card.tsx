import { PlayCircle } from "@phosphor-icons/react/dist/ssr";

type Props = {
  title: string;
  total: number;
  option?: string;
};
export function Card({ total, title, option }: Props) {
  return (
    <div className="flex items-center gap-2 bg-white w-56 p-3">
      <div className="bg-red-200 p-1">
        <PlayCircle color="#f87171" size={32} />
      </div>
      <div>
        <p>{total}</p>
        <p>{title}</p>
        <p>{option}</p>
      </div>
    </div>
  );
}
