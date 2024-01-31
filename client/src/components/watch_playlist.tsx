import { SectionsWatch } from "./sections-watch";

type Props = {
  sections: any[];
  token: string;
  courseId: string;
};

export function WatchPlaylist({ sections, courseId, token }: Props) {
  return (
    <div className="flex">
      <SectionsWatch courseId={courseId} token={token} sections={sections} />
    </div>
  );
}
