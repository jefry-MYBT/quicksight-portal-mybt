import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";
import Siderbar from "@/components/Sidebar";

export default function Medical({ session }) {
  const [datos, setDatos] = useState(session);

  const contentCard = [
    {
      title: "Unidades",
      img: "/gif/comercial/unidades.gif",
      description: "Unidades - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/a1d9001e-d550-4510-ac86-6d7a87c45e66?directory_alias=bodytechteam",
    },
    {
      title: "Ingresos",
      img: "/gif/comercial/ingresos.gif",
      description: "Ingresos - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/d030f6aa-10e4-4d2e-99af-863e686a0af7?directory_alias=bodytechteam",
    },
    {
      title: "CRM",
      img: "/gif/comercial/crm.gif",
      description: "CRM - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/c1b471f7-6a6e-4243-b44a-24b04af968ce?directory_alias=bodytechteam",
    },
    {
      title: "Web - Buy Status",
      img: "/gif/comercial/web.gif",
      description: "Web - Buy Status - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/c073e786-7b3e-4cf5-826d-794f60dadae6?directory_alias=bodytechteam",
    }
  ];
  return (
    <div className="flex">
      <Siderbar datos = {datos} />
      <div className="h-screen flex-1 p-7">
        <Header datos={datos} />
        <div className="relative mt-5 flex flex-col md:flex-row md:space-x-5 dark:bg-[#172554] dark:text-white space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full h-[20%] z-[-2] mx-auto border dark:border-[#172554] border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center dark:bg-[#172554] dark:text-white">
            <img
              src="/logos/aplicaciones/Logo_Comercial.png"
              alt="tailwind logo"
              className="w-[50%] h-[80%] mt-[-2%] mg:w-1/5 animate-fade-up"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white dark:bg-[#172554] dark:text-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex items-center"></div>
              <div className=""></div>
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl dark:bg-[#172554] dark:text-white text-lg animate-fade-up">
              ¡Bienvenid@ a la sección
              <span className="text-red-500"> COMERCIAL</span>!
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
