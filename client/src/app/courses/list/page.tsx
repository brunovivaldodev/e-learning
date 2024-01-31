import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { api } from "@/lib/api";
import Curso from "@/components/Curso";
import { getStudent } from "@/contexts/auth";

export default async function CourseList() {
  const userAuth = getStudent();

  const res = await api.get(`/students/courses/list`);

  const courses = res.data;
  return (
    <>
      <Header user={userAuth} />

      <div className="bg-white justify-center">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex w-3/4 justify-between mt-5">
            <div className="flex w-1/2">
              <div className="flex w-3/4 m-1 border border-gray-200 p-2 items-center">
                <MagnifyingGlass size={15} />
                <input
                  className="text-xs w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder=" Procura nos cursos..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mx-20 mb-20">
        {courses.map((course) => {
          return (
            <Curso
              key={course.id}
              id={course.id}
              categorie={course.categories}
              title={course.title}
              price={course.price}
              coments={25}
              students={23}
              thumb={course.thumbnail}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}
