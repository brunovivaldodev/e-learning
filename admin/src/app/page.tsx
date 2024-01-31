import { cookies } from "next/headers";
import Home from "./home/page";
import SignIn from "./sign-in/page";

export default async function Page() {
  const isAuthenticated = cookies().has("token");

  return <>{isAuthenticated ? <Home /> : <SignIn />}</>;
}
