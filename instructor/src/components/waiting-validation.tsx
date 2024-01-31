import imagem from "../../public/admin.png";
import Image from "next/image";

export default function WaitingValidation() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen -mt-[5%]">
        <div className="flex justify-center items-center h-full  ">
          <div className="w-[50%] space-y-6">
            <h2 className="text-4xl text-gray-300">Activação da Conta</h2>
            <h2 className="text-4xl">
              Por favor, Aguarde a activação da conta
            </h2>
            <p className="text-gray-500 text-sm">
              Para publicação de cursos na sua conta do tipo docente precisa
              aguardar que a sua conta seja verificada e activada pelo
              administrador
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center w-[80%]">
          <Image src={imagem} alt="presentation" />
        </div>
      </div>
    </>
  );
}
