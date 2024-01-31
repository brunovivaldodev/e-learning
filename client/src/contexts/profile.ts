import { api } from "@/lib/api";

export interface User {
  id: string;
  name: string;
  email: string;
}

export class ProfileContext {
  static user: User;
  static async getMideas(userId: string) {
    ProfileContext.user = (await api.get(`/users/${userId}`)).data.users;
  }
}
