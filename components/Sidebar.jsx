import Link from "next/link";
import { useState } from "react";
import { Menu } from "@/data/slider";

export default function Siderbar(props) {
  const [open, setOpen] = useState(true);
  const menus = Menu;
  const session = props.datos;

  const userCondition =
    session.user.email === "joan.gomez@bodytechcorp.com" ||
    session.user.email === "johan.farfan@bodytechcorp.com" ||
    session.user.email === "estefania.sierra@bodytechcorp.com" ||
    session.user.email === "edwin.castiblanco@bodytechcorp.com" ||
    session.user.email === "jefry.maldonado@bodytechcorp.com" ||
    session.user.email === "yonhfreen.quintero@bodytechcorp.com" ||
    session.user.email === "wilson.coy@bodytechcorp.com" ||
    session.user.email === "rafael.socarras@bodytechcorp.com" ||
    session.user.email === "john.mena@bodytechcorp.com" ||
    session.user.email === "oscar.maldonado@bodytechcorp.com";
  return (
    <div className="dark:bg-[#0f172a] bg-white rounded-lg">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  p-5 pt-8 relative duration-300 dark:bg-[#0f172a] `}
      >
        <button
          className={`animate-bounce bg-white dark:bg-[#0f172a] dark:border-[#0f172a] absolute -right-3 top-9 w-7 rounded-full ${
            !open && "rotate-[360deg]"
          }`}
          onClick={() => setOpen(!open)}
        >
          <svg
            transform={`rotate(180) ${open && "rotate(360)"}`}
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z"
                fill="#3688FF"
              ></path>
              <path
                d="M469.3 704c-10.9 0-21.8-4.2-30.2-12.5-16.7-16.7-16.7-43.7 0-60.3L558.3 512 439.2 392.8c-16.7-16.7-16.7-43.7 0-60.3 16.7-16.7 43.7-16.7 60.3 0l149.3 149.3c16.7 16.7 16.7 43.7 0 60.3L499.5 691.5c-8.3 8.3-19.3 12.5-30.2 12.5z"
                fill="#5F6379"
              ></path>
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
          } text-gray-500 font-medium mt-5 mb-[-10px] dark:text-white`}
        >
          Inicio
        </h3>
        <ul className="pt-6">
          <Link href="/">
            <li
              className={`flex dark:text-white dark:bg-[#1e293b] bg-gray-100 hover:bg-gray-200 dark:hover:bg-[#1e293b] rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4`}
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
          } text-gray-500 font-medium mt-6 mb-[-45px] dark:text-white`}
        >
          Aplicaciones
        </h3>
        <ul className="pt-14 group">
          {menus.map((menu, index) => (
            <Link href={menu.href}>
              <li
                key={index}
                className={`flex dark:hover:bg-[#1e293b] dark:bg-[#1e293b] dark:text-white hover:bg-gray-200 bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >


                <img
                  className="w-6 h-6"
                  src={`/logos/aplicaciones/iconos/${menu.src}.png`}
                />
                <span
                  className={`${!open && "invisible"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}

          {/* Condicional para la sección de tecnología */}
          {userCondition ? (
            <Link href="/tecnologia">
              <li className="flex mt-2 dark:bg-[#1e293b] dark:hover:bg-[#1e293b] dark:text-white hover:bg-gray-200 bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4">
                <img
                  className="w-6 h-6"
                  src={`/logos/aplicaciones/iconos/icon-Tecnologia.png`}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200 dark:text-white`}
                >
                  Tecnología
                </span>
              </li>
            </Link>
          ) : (
            <div></div>
          )}
        </ul>
        <ul>
          <Link href="/glosary">
            <li className="flex mt-2 dark:bg-[#1e293b] dark:hover:bg-[#1e293b] dark:text-white hover:bg-gray-200 bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4">
              <img
                className="w-6 h-6"
                src={`/logos/aplicaciones/iconos/icon_Glosary.png`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200 dark:text-white`}>
                Data Governance
              </span>
            </li>
          </Link>
          <div></div>
        </ul>

        <h3
          className={` ${
            !open && "hidden"
          } text-gray-500 font-medium mt-6 mb-[-10px] dark:text-white`}
        >
          Aprendizaje
        </h3>
        <ul className="pt-6">
          <Link href="/media">
            <li
              className={`flex bg-gray-100 dark:bg-[#1e293b] dark:hover:bg-[#1e293b] hover:bg-gray-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4`}
            >
              <img
                className="w-6 h-6"
                src={`/logos/aplicaciones/iconos/icon_Media.png`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200 dark:text-white`}>
                Multimedia
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
