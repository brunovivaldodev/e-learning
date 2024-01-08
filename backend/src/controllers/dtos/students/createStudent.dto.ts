export interface CreateStudentDTO {
  name: string;
  email: string;
  password: string;
  confirmationPassword: string;
  description?: string;
}
