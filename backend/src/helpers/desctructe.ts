import { randomUUID as uuidV4 } from "crypto";
import { extname } from "path";
interface FileItem {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export function findFileByFieldname(
  fieldnameToFind: string,
  files: Express.Multer.File[]
): FileItem | undefined {
  return files.find((file) => file.fieldname === fieldnameToFind);
}

export function organizeLessonsByNumber(
  lessons: Express.Multer.File[]
): Record<string, Express.Multer.File[]> {
  const organizedLessons: Record<string, Express.Multer.File[]> = {};

  lessons.forEach((lesson) => {
    const match = lesson.fieldname.match(/lesson(\d)/);
    if (match) {
      const lessonNumber = match[1];

      if (!organizedLessons[lessonNumber]) {
        organizedLessons[lessonNumber] = [];
      }

      organizedLessons[lessonNumber].push(lesson);
    }
  });

  return organizedLessons;
}

interface TransformedLesson {
  id: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  type: string;
  url: string;
}

type InputObject = Record<string, Express.Multer.File[]>;
type OutputObject = Record<string, TransformedLesson[]>;

export function transformLessons(inputObject: InputObject): OutputObject {
  const outputObject: OutputObject = {};

  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      outputObject[key] = inputObject[key].map((element) => ({
        id: uuidV4(),
        created_at: new Date(),
        updated_at: new Date(),
        name: element.filename,
        type: extname(element.filename) === ".mp4" ? "video" : "pdf",
        url: element.filename,
      }));
    }
  }

  return outputObject;
}
