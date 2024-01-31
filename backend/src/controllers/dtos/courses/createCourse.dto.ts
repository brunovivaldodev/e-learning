export interface CreateCourseDTO {
  categories: string;
  description: string;
  duration: string;
  instructor_id: string;
  language: string;
  level: string;
  price: number;
  subtitle: string;
  thumbnail: string;
  title: string;
  trailer_url: string;
  targetAudience: string[];
  requirements: string[];
  lessons: string[];
  sections: string[];
  lessonsArray: Record<string, Express.Multer.File[]>;
}
