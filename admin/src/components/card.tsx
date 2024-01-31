import { PlayCircle } from "@phosphor-icons/react/dist/ssr";

type Props = {
  title: string;
  number: number;
};

export function Card({ title, number }: Props) {
  return (
    <div className="flex items-center gap-2 bg-white w-56 p-3">
      <div className="bg-red-200 p-1">
        <PlayCircle color="#f87171" size={32} />
      </div>
      <div>
        <p>{number}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
