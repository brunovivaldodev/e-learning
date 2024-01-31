"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import sign from "../../../public/SignIn.png";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { api } from "@/lib/api";
import { setCookie } from "cookies-next";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = (
      await api.post("/admins/login", {
        email,
        password,
      })
    ).data;

    if (response.statusCode === 400) {
      setError(response.message);
      return;
    }

    setCookie("token", `${response.token}`, { maxAge: 60 * 60 * 24 });
    router.refresh();
  }
  return (
    <>
      <header className="flex justify-between items-center mx-48 m-4">
        <div className="flex items-center">
          <Image src={logo} alt="logo" />
        </div>
        <div className="space-x-2">
          <p className="text-gray-500 outline-none text-sm">Não tem conta?</p>

          <button className="bg-peach text-orange-500 p-3 rounded-lg text-sm">
            <Link href={"/sign-up"}>Criar Conta</Link>
          </button>
        </div>
      </header>

      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="hidden md:flex items-center justify-center">
          <Image src={sign} alt="presentation" />
        </div>

        <div className="flex justify-center items-center h-full mr-36 -mt-20">
          <form onSubmit={handleRegister} className="w-[500px]">
            <h1 className="font-bold text-2xl mb-8 text-center">
              Faça login na sua conta
            </h1>
            <hr />
            <div className="mt-4 flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="email"
                  name="user"
                  id="user"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-gray-400 rounded-lg p-2 w-full outline-none"
                  placeholder="Endereço de email ou username"
                />
              </div>

              <label htmlFor="password" className="">
                Password
              </label>
              <div className="space-x-4">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="border-2 border-gray-400 rounded-lg p-2 outline-none w-full"
                  placeholder="Criar Password"
                />
              </div>
            </div>

            <div className="flex mt-4 justify-between items-center text-gray-500">
              <p className="text-sm"></p>
              <button
                type="submit"
                className="bg-orange-500 text-white text-sm bg-laranja p-2 rounded-lg flex justify-between items-center gap-2 px-10"
              >
                Entrar <GoArrowRight />
              </button>
            </div>
            {error && (
              <div>
                <p className="text-red-600">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
