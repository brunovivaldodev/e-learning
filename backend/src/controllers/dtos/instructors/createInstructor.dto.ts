export interface CreateInstructorDTO {
  name: string;
  email: string;
  password: string;
  confirmationPassword: string;
  description: string;
  title: string;
  social_profiles: object;
}
