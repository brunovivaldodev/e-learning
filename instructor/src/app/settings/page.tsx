import { Header } from "@/components/header";
import { getInstructor } from "@/contexts/auth";
import { api } from "@/lib/api";

import { AccountInfo } from "@/components/account-info";
import { SocialProfilesInfo } from "@/components/social_profiles_info";
import { cookies } from "next/headers";
export default async function Settings() {
  const res = await api.get(`/instructors/${getInstructor().sub}`);

  const instructor = res.data;

  return (
    <main className="flex flex-col space-y-8">
      <Header page="Settings" />
      <div className="mx-28 space-y-8">
        <section>
          <div className="space-y-12">
            <AccountInfo
              instructor={instructor}
              token={cookies().get("token")?.value as string}
            />
            <SocialProfilesInfo
              instructor={instructor}
              token={cookies().get("token")?.value as string}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
