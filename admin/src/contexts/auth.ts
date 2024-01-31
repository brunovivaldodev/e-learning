import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export interface UserPayload {
  sub: string;
  name: string;
  email: string;
}

export function getAdmin(): UserPayload {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticated.");
  }

  const user: UserPayload = jwtDecode(token);

  return user;
}
