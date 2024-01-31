"use client";
import { FormEvent, useState } from "react";
import { CoverPicker } from "./thumPicture";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

type Props = {
  instructor: any;
  token: string;
};

export function AccountInfo({ instructor, token }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);


    const coverUrlToUpload = formData.get("avatar_url");

    if (coverUrlToUpload) {
      formData.set("description", description);
      formData.set("avatar_url", coverUrlToUpload);
      formData.set("title", title);

      const response = (
        await api.put(`/instructors/${instructor.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
      ).data;


      if (response.statusCode === 400) {
        setError(response.message);
        return;
      }

      router.refresh();
    }
  }
  return (
    <form onSubmit={handleRegister}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12 bg-white p-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Configuração De Conta
          </h2>
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1">
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nome
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        className="block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                        placeholder="name"
                        value={instructor.name}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        className="block  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6  w-full"
                        placeholder="email"
                        value={instructor.email}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Titulo
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={title ? title : instructor.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div>
                  <CoverPicker />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Biografia
            </label>
            <div className="mt-2">
              <textarea
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={description ? description : instructor.description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex bg-orange-500 h-12 w-40 justify-center items-center mt-6"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </form>
  );
}
