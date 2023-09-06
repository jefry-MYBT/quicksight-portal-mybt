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
    session.user.email === "john.mena@bodytechcorp.com";
  return (
    <div>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white rounded-lg h-[700px] p-5 pt-8 relative duration-300 dark:bg-[#0f172a]`}
      >
        <button
          className={`animate-bounce bg-white dark:bg-[#0f172a] dark:border-[#0f172a] absolute -right-3 top-9 w-7
           border-white border-2 rounded-full  ${!open && "rotate-[360deg]"}`}
          onClick={() => setOpen(!open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
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
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}

          {/* Condicional para el área de tecnología */}
          {userCondition ? (
            <Link href="/tecnologia">
              <li className="flex mt-2 dark:bg-[#1e293b] dark:hover:bg-[#1e293b] dark:text-white hover:bg-gray-200 bg-gray-100 rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4">
                <img
                  className="w-6 h-6"
                  src={`/logos/aplicaciones/iconos/tecnologia.png`}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  Tecnología
                </span>
              </li>
            </Link>
          ) : (
            <div></div>
          )}
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
    </div>
  );
}
