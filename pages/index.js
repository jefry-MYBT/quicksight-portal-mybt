import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { Menu } from "@/data/slider";
import Cards from "@/components/Cards";
import LogoWelcome from "@/components/LogoWelcome";

export default function Sidebar({ session }) {
  const fecha = new Date();
  const [datos, setDatos] = useState(session);
  const [open, setOpen] = useState(true);

  const menus = Menu;
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white rounded-lg h-[700px] p-5 pt-8 relative duration-300 dark:bg-[#0f172a]`}
      >
        <button
          className={`animate-bounce bg-white dark:bg-[#0f172a] dark:border-[#0f172a] absolute -right-3 top-9 w-7
           border-white border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7Z"
                fill="#000000"
              ></path>{" "}
              <path
                opacity="0.7"
                d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z"
                fill="#000000"
              ></path>{" "}
              <path
                opacity="0.4"
                d="M3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H9C9.41421 16.25 9.75 16.5858 9.75 17C9.75 17.4142 9.41421 17.75 9 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </button>

        <div className="flex gap-x-4 justify-center">
          <img
            src="/logos/logo_bi4.png"
            className={`cursor-pointer duration-500 w-20 h-20 mt-[-26px] ${
              open ? "rotate-[360deg] " : "w-10 h-10 ml-[20px]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          ></h1>
        </div>
        <hr />
        <h3
          className={` ${
            !open && "hidden"
          } text-gray-500 font-medium mt-5 mb-[-10px]`}
        >
          {" "}
          Inicio{" "}
        </h3>
        <ul className="pt-6">
          <Link href="/">
            <li
              className={`flex dark:text-white bg-gray-100 hover:bg-gray-200 dark:hover:bg-[#1e293b] rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4`}
            >
              <img
                className="w-6 h-6"
                src={`/logos/aplicaciones/iconos/home-sidebar.png`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Inicio
              </span>
            </li>
          </Link>
        </ul>
        <h3
          className={` ${
            !open && "hidden"
          } text-gray-500 font-medium mt-10 mb-[-45px]`}
        >
          {" "}
          Aplicaciones{" "}
        </h3>
        <ul className="pt-14">
          {menus.map((menu, index) => (
            <Link href={menu.href}>
              <li
                key={index}
                className={`flex dark:hover:bg-[#1e293b] dark:text-white hover:bg-gray-200 bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img
                  className="w-6 h-6"
                  src={`/logos/aplicaciones/iconos/${menu.src}.png`}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        {/*  <h3
          className={` ${
            !open && "hidden"
          } text-gray-500 font-medium mt-10 mb-[-10px]`}
        >
          {" "}
          Otros{" "}
        </h3>
        <ul className="pt-6">
          <Link href="/">
            <li
              className={`flex bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4`}
            >
              <img
                className="w-6 h-6"
                src={`/logos/aplicaciones/iconos/home-sidebar.png`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Aprendizaje
              </span>
            </li>
          </Link>
        </ul> */}
      </div>

      <div className="h-screen flex-1 p-7">
        <Header datos={datos} />
        <div className="relative h-[38%] mt-5 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full z-[-2] mx-auto border-[#ccf1fd] bg-[#ccf1fd] dark:bg-[#172554]">
          <div className="w-full md:w-[50%]  grid place-items-center">
            <LogoWelcome className={
                  `animate-fade-up ${open ? "h-[10%] w-[85%] mt-[-75px]" : "h-[90%] w-[72%] mt-[-77px]"
                }`}/>
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
