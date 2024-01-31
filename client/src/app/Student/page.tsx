import Footer from "../../components/Footer";
import ProfileInfo from "../../components/ProfileInfo";
import Header from "../../components/Header";
import StudentsTabs from "@/components/students-tab";
import { getStudent } from "@/contexts/auth";
import { api } from "@/lib/api";

export default async function Student() {
  const userAuth = getStudent();

  const res = await api.get(`/students/${userAuth?.sub}`);

  const purchases = res.data;

  return (
    <div>
      <Header user={userAuth}></Header>

      <div className="flex flex-col bg-white justify-center items-center">
        <ProfileInfo
          pfp={purchases.avatarUrl}
          name={purchases.name}
          description={purchases.description}
        ></ProfileInfo>

        <StudentsTabs students={purchases} />
      </div>

      <Footer></Footer>
    </div>
  );
}
