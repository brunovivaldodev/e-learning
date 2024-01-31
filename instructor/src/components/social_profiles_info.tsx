"use client";
import { api } from "@/lib/api";
import {
  FacebookLogo,
  Globe,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {
  instructor: any;
  token: string;
};

export function SocialProfilesInfo({ instructor, token }: Props) {
  const [site, setSite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [insta, setInsta] = useState("");
  const [youTube, setYouTube] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = (
      await api.put(
        `/instructors/${instructor.id}`,
        { social_profiles: { site, facebook, insta, youTube } },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
    ).data;

    if (response.statusCode === 400) {
      setError(response.message);
      return;
    }
    router.refresh();
  }
  return (
    <form onSubmit={handleRegister}>
      <div className="border-b border-gray-900/10 pb-12 bg-white p-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Perfil Social
        </h2>

        <div className="flex flex-col gap-6">
          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Site Pessoal
            </label>
            <div className="flex mt-2">
              <span className="flex select-none items-center pl-3  sm:text-sm">
                <Globe size={24} color="#f97516" />
              </span>
              <input
                type="text"
                className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={site ? site : instructor?.social_profiles?.site}
                onChange={(e) => setSite(e.target.value)}
              />
            </div>
          </div>

          <div className="flex col-span-full">
            <div className="w-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Facebbok
              </label>
              <div className="flex mt-2">
                <span className="flex select-none items-center pl-3  sm:text-sm">
                  <FacebookLogo size={24} color="#f97516" />
                </span>
                <input
                  type="text"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={
                    facebook ? facebook : instructor?.social_profiles?.facebook
                  }
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Instagram
              </label>
              <div className="flex mt-2">
                <span className="flex select-none items-center pl-3  sm:text-sm">
                  <InstagramLogo size={24} color="#f97516" />
                </span>
                <input
                  type="text"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={insta ? insta : instructor?.social_profiles?.insta}
                  onChange={(e) => setInsta(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                YouTube
              </label>
              <div className="flex mt-2">
                <span className="flex select-none items-center pl-3  sm:text-sm">
                  <YoutubeLogo size={24} color="#f97516" />
                </span>
                <input
                  type="text"
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={
                    youTube ? youTube : instructor?.social_profiles?.youTube
                  }
                  onChange={(e) => setYouTube(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="flex bg-orange-500 h-12 w-40 justify-center items-center mt-6"
        >
          Salvar Alterações
        </button>
      </div>
    </form>
  );
}
