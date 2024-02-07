import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import InstF from "../../../../public/BecomeI.png";
import Girl from "../../../../public/becomI2.png";
import Woman from "../../../../public/becomei3.png";
import setI from "../../../../public/becomei4.png";
import female from "../../../../public/becomei5.png";
import Desktop from "../../../../public/desktop.png";
import { AiOutlineTeam, AiOutlineFileDone } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { IoMdCloudDone } from "react-icons/io";
import { BiConversation } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { LuFiles } from "react-icons/lu";
import { PiIdentificationCard } from "react-icons/pi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { PiHandshakeDuotone } from "react-icons/pi";
import { PiNewspaperClippingDuotone } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { getStudent } from "@/contexts/auth";

export default function BecomeI() {
  const userAuth = getStudent();

  return (
    <>
      <Header user={userAuth} />

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
        <div className="flex flex-col p-24 space-y-3 mx-14">
          <h2 className="text-4xl">
            <b>Vire um instrutor</b>
          </h2>
          <div>
            Torne-se um instrutor e comece a ensinar com 26 mil instrutores
            certificados. Crie uma história de sucesso com 67,1 mil alunos –
            Cresça em 71 países.
          </div>
          <button className="flex bg-laranja w-40 h-10 items-center justify-center p-2 text-white">
            Vamos Começar
          </button>
        </div>

        <div className="flex items-center justify-center">
          <Image src={InstF} height={400} alt="Instrutora" />
        </div>
      </div>

      <section className="flex items-center justify-center space-x-16 bg-peach p-6">
        <div className="flex items-center space-x-2">
          <div>
            <AiOutlineTeam color="orange" size={42} />{" "}
          </div>
          <div className="flex-col">
            <p className="text-2xl">67.1k</p>
            <p className="text-sm">Estudantes</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div>
            <AiOutlineFileDone color="#23BD33" size={42} />{" "}
          </div>
          <div className="flex-col">
            <p className="text-2xl">26k</p>
            <p className="text-sm">Instrutores certificados</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <BiWorld color="#23BD33" size={42} />
          </div>
          <div className="flex-col">
            <p className="text-2xl">72</p>
            <p className="text-sm">Línguas</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <IoMdCloudDone color="#23BD33" size={42} />{" "}
          </div>
          <div className="flex-col">
            <p className="text-2xl">99.9%</p>
            <p className="text-sm">Taxa de sucesso</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <LuFiles size={42} color="orange" />
          </div>
          <div className="flex-col">
            <p className="text-2xl">57</p>
            <p className="text-sm">Empresas confiáveis</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 p-24">
        <div className="flex items-center justify-center">
          <Image src={Desktop} height={400} alt="Instrutora" />
        </div>

        <div className="flex flex-col space-y-3 mx-16 text-sm">
          <h2 className="text-4xl">Porque usar a plataforma?</h2>
          <div className="text-gray-500">
            Nossa plataforma oferece eficiência e inovação, proporcionando uma
            experiência de fácil aprendizado, personalizada e segura. Economize
            tempo e recursos com uma solução confiável, suportada por
            atendimento excepcional ao cliente
          </div>
          <div className="text-gray-500 flex space-x-3">
            <div>
              <IoIosCheckmarkCircle size={30} color="#23BD33" />
            </div>
            <div className="">
              <p className="mb-3">
                <b className="text-black ">
                  Ensine o seus alunos o quanto precisar
                </b>
              </p>
              ensine os seus alunos a partir de um lugar confortável e em um
              momento de inspiração em que possa expressar a sua arte
            </div>
          </div>
          <div className="text-gray-500 flex space-x-3">
            <div>
              <IoIosCheckmarkCircle size={30} color="#23BD33" />
            </div>
            <div>
              <p className="mb-3">
                <b className="text-black">
                  Gerencie seu curso e o pagamento num so lugar
                </b>
              </p>
              gerencie o seu conteúdo da maneira mais agradádvel a si e aos seus
              alunos
            </div>
          </div>
          <div className="text-gray-500 flex space-x-3">
            <div>
              <IoIosCheckmarkCircle size={30} color="#23BD33" />
            </div>
            <div>
              <p className="mb-3">
                <b className="text-black">Chat com os seus alunos</b>
              </p>
              Tire duvidas de forma particular e crie uma boa relação com os
              seus alunos.
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 p-10 justify-center items-center">
        <div className="space-y-5">
          <h3 className="text-2xl text-center font-semibold">
            Como virar um instrutor de sucesso
          </h3>
          <div className="flex space-x-4 mx-32">
            <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
              <div className="bg-blue-100 p-3 rounded-lg">
                <PiNewspaperClippingDuotone color="#564FFD" size={60} />
              </div>
              <p className="text-center">
                1. Inscreva-se para se tornar instrutor.
              </p>
              <p className="text-gray-500 text-xs text-center">
                com apenas alguns clickes torne-se instrutor e comece a ensinar.{" "}
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
              <div className="bg-peach p-3 rounded-lg">
                <PiIdentificationCard color="#E34444" size={60} />
              </div>
              <p className="text-center">2. Configure e edite seu perfil.</p>
              <p className="text-gray-500 text-xs text-center">
                plataforma de facil acesso para configurar e editação de forma
                simples o seu perfil
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
              <div className="bg-peach p-3 rounded-lg">
                <AiOutlinePlayCircle color="#FF6636" size={60} />
              </div>
              <p className="text-center">3. Crie seu novo curso.</p>
              <p className="text-gray-500 text-xs text-center">
                Crie o seu curso e divulgue todo o seu conhecimento para o mundo
              </p>
            </div>
            <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 w-96">
              <div className="bg-green-100 p-3 rounded-lg">
                <PiHandshakeDuotone color="#23BD33" size={60} />
              </div>
              <p className="text-center">4. Comece a ensinar e ganhar.</p>
              <p className="text-gray-500 text-xs text-center">
                ensine os seus alunos , ajude a chegar aos seus objectivos e
                ganhe dinheiro por todo o conhecimento que possue
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-24">
        <div className="flex flex-col space-y-4 justify-center mx-10">
          <h2 className="text-4xl font-semibold">
            Regras e regulações dos Instrutores
          </h2>
          <div className="text-gray-500">
            Para manter um ambiente seguro e saudavel para os nossos instrutores
            e estudantes, regras e regulamentos são essenciais para que tudo
            aconteça nos conformes
          </div>

          <ul className="ml-8 list-disc space-y-2 text-sm">
            <li>
              Fornecer conteúdo educacional preciso, atualizado e relevante,
              alinhado aos objetivos do curso e às normas educacionais
              estabelecidas.
            </li>
            <li>
              Respeitar os direitos autorais, utilizando apenas material de sua
              autoria e protegido por direitos autorais de maneira legal e
              ética, ou obtendo permissões adequadas quando necessário.
            </li>
            <li>
              Promover um ambiente de aprendizado respeitoso e inclusivo,
              incentivando a participação e a troca construtiva de ideias entre
              os alunos.
            </li>
            <li>
              Adoptar práticas éticas no ensino online, evitando plágio, fraudes
              acadêmicas e qualquer comportamento antiético.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <Image src={Girl} height={450} alt="Instrutora" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-16 bg-peach">
        <div className="flex items-center justify-center">
          <Image src={Woman} height={450} alt="Instrutora" />
        </div>

        <div className="flex flex-col space-y-4 justify-center mx-10">
          <h2 className="text-4xl font-semibold">
            As sua preocupações são as nossas e nós nos importamos com elas{" "}
          </h2>
          <div className="text-gray-500">
            Estaremos sempre disponivel para tirar as suas duvidas e ajudar com
            qualquer problema que possa vir a ter.
          </div>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <GoArrowRight color="FF6636" /> Atendimento disponivel 24h
            </li>
            <li className="flex items-center gap-2">
              <GoArrowRight color="FF6636" /> Qualquer tipo de reclamação sera
              gravada para futuras melhorias
            </li>
            <li className="flex items-center gap-2">
              <GoArrowRight color="FF6636" /> Tanto estudantes como instrutores
              terão mesmo nivel de suporte independente do tempo na plataforma
            </li>
            <li className="flex items-center gap-2">
              <GoArrowRight color="FF6636" /> Possuimos também email como forma
              de contacto
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 p-24">
        <div className="flex flex-col space-y-4 justify-center mx-14">
          <h2 className="text-4xl font-semibold">
            Vários instrutores já tornaram as suas carreiras em grandes sucessos{" "}
          </h2>
          <div className="text-gray-500">
            Faça como os nosso instrutores e torne-se um grande instrutor,
            impulsionando a sua carreira e valorizando cada vez mais o seu
            conhecimento
          </div>

          <div className="bg-peach w-full p-4 flex flex-col gap-4">
            <BiConversation color="FF6636" size={45} />
            Fazia anos que não conseguia transmitir o meu conhecimento de forma
            adequada para os meus alunos o que me tornava um instrutor mediano e
            não conseguia expandir a minha carreira. Agora além de conseguir
            impulsionar a minha carreira ainda consigo aprender e transmitir o
            meu conhecimento de forma mais adequada dando a atenção aos meus
            aluno de forma personalizada
          </div>

          <div className="space-x-2">
            <button className="bg-gray-100 p-2">&larr;</button>

            <button className="bg-laranja text-white p-2">&rarr;</button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image src={setI} height={650} alt="Instrutora" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-800 pt-20 pb-20">
        <div className="flex flex-col space-y-4 justify-center mx-40 text-white">
          <h2 className="text-4xl font-semibold">
            Comece ensinando connosco e inspire outros
          </h2>
          <div className="text-gray-400">
            Torne-se um instrutor e comece a ensinar com 26 mil instrutores
            certificados. Crie uma história de sucesso com 67,1 mil alunos –
            Cresça em 71 países.
          </div>
          <button className="text-center bg-laranja p-3 w-fit">
            Registrar Agora
          </button>
        </div>

        <div className="flex items-center justify-center">
          <Image src={female} height={450} alt="Instrutora" />
        </div>
      </div>

      <hr />

      <Footer />
    </>
  );
}
