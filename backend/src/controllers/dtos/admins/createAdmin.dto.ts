export interface CreateAdminDTO {
  name: string;
  email: string;
  password: string;
  confirmationPassword: string;
  description?: string;
}
