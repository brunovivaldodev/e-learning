import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
export interface UserPayload {
  sub: string;
  name: string;
  email: string;
}

export function getStudent(): UserPayload | null {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }

  const user: UserPayload = jwtDecode(token);

  return user;
}
