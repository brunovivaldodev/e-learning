import { Breadcrums } from "@/components/breadcrumbs";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { WatchPlaylist } from "@/components/watch_playlist";

export default async function Watch_Course({
  params,
}: {
  params: { id: string };
}) {
  const res = await api.get(`/admins/courses/${params.id}`, {
    headers: { Authorization: `Bearer ${cookies().get("token")?.value}` },
  });
  const course = res.data;

  return (
    <div className="flex flex-col mt-10 ml-3">
      <div className="">
        <div>
          <div className="flex space-x-3 items-center">
            <div className="space-y-2">
              <Breadcrums categorie={course.categories} course={course.title} />
              <h1 className="text-4xl font-semibold">{course.title}</h1>
            </div>
          </div>
        </div>
      </div>
      <WatchPlaylist
        sections={course.course_section}
        courseId={course.id}
        token={cookies().get("token")?.value as string}
      />
    </div>
  );
}
