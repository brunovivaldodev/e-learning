export interface EditInstructorDTO {
  instructorId: string;
  title: string | null;
  description: string | null;
  avatarUrl: string | null;
  social_profiles: object | null;
}
