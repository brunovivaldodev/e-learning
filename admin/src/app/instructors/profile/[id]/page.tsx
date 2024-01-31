import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { Profile } from "@/components/profile";

export default async function InstructorProfile({
  params,
}: {
  params: { id: string };
}) {
  const res = await api.get(`/instructors/${params.id}`, {
    headers: { Authorization: `Bearer ${cookies().get("token")?.value}` },
  });

  const instructor = res.data;

  return (
    <>
      <Profile
        id={params.id}
        instructor={instructor}
        token={cookies().get("token")?.value as string}
      />
    </>
  );
}
