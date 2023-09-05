import Header from "@/components/Header";
import { useState } from "react";
import { getSession } from "next-auth/react";
import Cards from "@/components/Cards";
import LogoWelcome from "@/components/LogoWelcome";
import Sidebar from "@/components/Sidebar";

export default function Home({ session }) {
  const fecha = new Date();
  const [datos, setDatos] = useState(session);
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <Sidebar datos={datos} />
      <div className="h-screen flex-1 p-7">
        <Header datos={datos} />
        <div className="relative h-[38%] mt-5 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full z-[-2] mx-auto border-[#ccf1fd] bg-[#ccf1fd] dark:bg-[#172554]">
          <div className="w-full md:w-[50%]  grid place-items-center">
            <LogoWelcome
              className={`animate-fade-up ${
                open
                  ? "h-[10%] w-[85%] mt-[-75px]"
                  : "h-[90%] w-[72%] mt-[-77px]"
              }`}
            />
          </div>
          <div className="w-full md:w-2/3 bg-[#ccf1fd] dark:bg-[#172554] dark:text-white flex flex-col space-y-2 p-3 animate-fade-up">
            <div className="flex justify-between item-center">
              <div className="flex items-center"></div>
              <div className=""></div>
              <div className="bg-gray-200 dark:bg-[#1e293b] dark:text-white  px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                {fecha.getFullYear()}
              </div>
            </div>
            <h3 className="text-gray-800 md:text-1xl dark:text-white font-bold text-xl">
              ¡Bienvenido(a), {session.user.name} <span>👋</span>!
            </h3>
            <p className="text-lg text-gray-500 md:text-1xl">
              {session.user.email}
            </p>
          </div>
        </div>
        <Cards />
        <p className="flex justify-end text-gray-500 font-semibold">
          © Bodytech Corp. Todos los derechos reservados.
        </p>
      </div>
      <div
        id="tooltip-right"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip on right
        <div class="tooltip-arrow" data-popper-arrow></div>
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
