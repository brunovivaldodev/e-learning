import { Header } from "@/components/header";
import {
  FacebookLogo,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  UserCircle,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Settings() {
  return (
    <main className="flex flex-col space-y-8">
      <Header page="Settings" />
      <div className="mx-28 space-y-8">
        <section>
          <form>
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
                          Primeiro Nome
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="text"
                              name="primeiro nome"
                              id="primeiro nome"
                              autoComplete="primeiro nome"
                              className="block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full"
                              placeholder="janesmith"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Username
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              className="block  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6  w-full"
                              placeholder="janesmith"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        About
                      </label>
                      <div className="mt-2">
                        <input
                          id="about"
                          name="about"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="flex gap-2">
                        <div className="mt-2">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block rounded-md border-0 py-1.5 text-orange-500 shadow-sm ring-1 ring-inset ring-gray-300 h-9 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>+244</option>
                            <option>+251</option>
                            <option>+888</option>
                          </select>
                        </div>
                        <div className="mt-2 flex-1">
                          <input
                            id="about"
                            name="about"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={""}
                          />
                        </div>
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
                      <div className="text-center">
                        <UserCircle
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Titulo
                  </label>
                  <div className="mt-2">
                    <input
                      id="about"
                      name="about"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Biografia
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="flex bg-orange-500 h-12 w-40 justify-center items-center mt-6">
                  <a className="text-sm text-white semi-bold text-center">
                    Salvar Alterações
                  </a>
                </div>
              </div>

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
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
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
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
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
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Linkedln
                      </label>
                      <div className="flex mt-2">
                        <span className="flex select-none items-center pl-3  sm:text-sm">
                          <LinkedinLogo size={24} color="#f97516" />
                        </span>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex col-span-full">
                    <div className="w-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Twitter
                      </label>
                      <div className="flex mt-2">
                        <span className="flex select-none items-center pl-3  sm:text-sm">
                          <TwitterLogo size={24} color="#f97516" />
                        </span>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Whatsapp
                      </label>
                      <div className="flex mt-2">
                        <span className="flex select-none items-center pl-3  sm:text-sm">
                          <WhatsappLogo size={24} color="#f97516" />
                        </span>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
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
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="janesmith"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex bg-orange-500 h-12 w-40 justify-center items-center mt-6">
                  <a className="text-sm text-white semi-bold text-center">
                    Salvar Alterações
                  </a>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
