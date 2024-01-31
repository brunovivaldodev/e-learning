"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import sign from "../../../public/SignUp.png";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { api } from "@/lib/api";
import { setCookie } from "cookies-next";

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmationPassword) {
      setError("Por favor confirme correctamente sua password");
      return;
    }

    const response = (
      await api.post("/students", {
        name,
        email,
        password,
        confirmationPassword,
      })
    ).data;

    if (response.statusCode === 400) {
      setError(response.message);
      return;
    }

    setCookie("token", `${response.token}`, { maxAge: 60 * 60 * 24 });
    router.replace("/");
  }
  return (
    <>
      <header className="flex justify-between items-center mx-[13%] m-[1%]">
        <div className="flex items-center">
          <Image src={logo} alt="logo" />
        </div>
        <div className="gap-4">
          <Link className="text-gray-500 outline-none text-sm" href="/sign-in">
            Já tenho uma conta ?
            <button className="bg-peach text-orange-500 p-3 rounded-lg text-sm">
              Fazer login
            </button>
          </Link>
        </div>
      </header>

      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-2">
        <div className="hidden md:flex items-center justify-center">
          <Image src={sign} alt="presentation" />
        </div>

        <div className="flex flex-col justify-center items-center h-full -mt-[5%] w-[75%]">
          <form action="" className="w-full" onSubmit={handleRegister}>
            <h1 className="font-bold text-2xl mb-8 text-center">
              Crie a sua conta
            </h1>
            <hr />
            <div className="mt-4 flex flex-col space-y-2">
              <label htmlFor="user">Nome</label>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-2 border-gray-400 rounded-lg p-2 w-full outline-none"
                  placeholder="Username..."
                />
              </div>

              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-gray-400 rounded-lg p-2 w-full outline-none"
                  placeholder="Endereço de email"
                />
              </div>

              <label htmlFor="password" className="">
                Password
              </label>
              <div className="flex space-x-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-gray-400 rounded-lg p-2 outline-none"
                  placeholder="Criar Password"
                />
                <input
                  type="password"
                  value={confirmationPassword}
                  onChange={(e) => setConfirmationPassword(e.target.value)}
                  className="border-2 border-gray-400 rounded-lg p-2 outline-none"
                  placeholder="Confirmar password"
                />
              </div>
            </div>

            <div className="flex mt-4 justify-end text-gray-500">
              <button
                type="submit"
                className="text-white text-sm bg-laranja p-2 rounded-lg flex justify-between items-center gap-2 px-10 "
              >
                Criar Conta <GoArrowRight />
              </button>
            </div>
          </form>
          {error && (
            <div className="mt-5">
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
