import { Header } from "@/components/header";
import { getAdmin } from "@/contexts/auth";

export default function Settings() {
  const admin = getAdmin();

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
                    <div className="">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Nome
                      </label>
                      <div className="mt-2">
                        <input
                          id="about"
                          name="about"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={admin.name}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="about"
                          name="about"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={admin.email}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  disabled
                  className="flex bg-orange-800 h-12 w-40 justify-center items-center mt-6 "
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
