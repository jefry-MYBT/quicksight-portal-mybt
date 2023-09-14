import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";
import Siderbar from "@/components/Sidebar";

export default function Medical({ session }) {
  const [datos, setDatos] = useState(session);
  const contentCard = [
    {
      title: "Control de Accesos",
      img: "/gif/operaciones/accesos.gif",
      description: "Control de Accesos -  Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/43de66f7-4db5-4f8d-9676-ad31c8bb13e8",
    },
    {
      title: "Almacenamiento",
      img: "/gif/operaciones/novedades.gif",
      description: "Almacenamiento - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/5abbf8af-40d0-4baa-b178-2afe1bf21c1b?directory_alias=bodytechteam",
    },
    {
      title: "Afiliados - Uso",
      img: "/gif/operaciones/afiliados.gif",
      description: "Afiliados - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/31802f4d-65f5-43e5-8ec9-55a68a34ab3d?directory_alias=bodytechteam",
    },
    {
      title: "Novedades",
      img: "/gif/operaciones/almacenamiento.gif",
      description: "Novedades - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/b624b4cf-132f-415d-ad72-64bbc3a28297?directory_alias=bodytechteam",
    },
   /*  {
      title: "Grupales",
      img: "/gif/operaciones/Grupales.gif",
      description: "Grupales - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/609adf52-7e31-47c1-b5a5-0fa30ca2259a?directory_alias=bodytechteam",
    }, */
  ];
  return (
    <div className="flex">
      <Siderbar datos = {datos}/>
      <div className="h-screen flex-1 p-7">
        <Header datos={datos} />
        <div className="relative mt-5 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full h-[20%] z-[-2] mx-auto border border-white dark:bg-[#172554] dark:text-white dark:border-[#172554] bg-white">
          <div className="w-full md:w-1/3 bg-white dark:bg-[#172554] dark:text-white grid place-items-center">
            <img
              src="/logos/aplicaciones/Logo_Operaciones.png"
              alt="tailwind logo"
              className="w-[50%] h-[85%] mt-[-2%] mg:w-1/5 animate-fade-up"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white dark:bg-[#172554] dark:text-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex items-center"></div>
              <div className=""></div>
            </div>
            <h3 className="dark:bg-[#172554] dark:text-white font-black text-gray-800 md:text-3xl text-lg animate-fade-up">
              ¡Bienvenid@ al área de{" "}
              <span className="text-purple-500">OPERACIONES</span>!
            </h3>
          </div>
        </div>
        {/* seccion de las tarjetas */}
        <div className="grid grid-cols-1 mt-[20px] gap-5 md:grid-cols-2 lg:grid-cols-4 animate-fade-up">
          {contentCard.map((card, i) => (
            <div className="group relative cursor-pointer rounded-lg items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-full">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={card.img}
                  alt={card.title}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-2xl mt-[-50%] font-semibold text-white">
                  {card.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.description}
                </p>
                <Link href={card.href} target="_blank">
                  <button className="hover:bg-gray-200 hover:text-gray-900 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    <spam className="hover:opacity-100">Ingresar</spam>
                  </button>
                </Link>
              </div>
            </div>
          ))}
          ;
        </div>
        <p className="flex justify-end text-gray-500 font-semibold mt-[12px]">
          © Bodytech Corp. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
