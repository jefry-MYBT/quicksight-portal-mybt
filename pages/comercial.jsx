import Header from "@/components/Header";
import { useState } from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";

export default function Medical({ session }) {
  const [datos, setDatos] = useState(session);
  const [open, setOpen] = useState(true);
  const Menus = [
    {
        title: "My Bodytech",
        src: "icon_MyBodytech",
        gap: true,
        href: "/bodytech",
      },
      { title: "Medical", src: "icon_Medical", href: "medical" },
      { title: "Operaciones", src: "icon_Operaciones", href: "operaciones" },
      { title: "Comercial", src: "icon_Comercial", href: "comercial" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white rounded-lg h-screen p-5 pt-8 relative duration-300`}
      >
        <button
          className={`animate-bounce bg-white absolute -right-3 top-9 w-7
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

        <div className="flex gap-x-4 flex justify-center">
          <img
            src="/logos/logo_bi4.png"
            className={`cursor-pointer duration-500 w-20 h-20 mt-[-26px] ${
              open && "rotate-[360deg] "
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
              className={`flex bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4`}
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
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link href={Menu.href}>
              <li
                key={index}
                className={`flex bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-md p-2 cursor-pointer hover:bg-light-white text-black font-semibold text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img
                  className="w-6 h-6"
                  src={`/logos/aplicaciones/iconos/${Menu.src}.png`}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <hr />
      {/*   <h3
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
        <div className="relative h-[120px] h-10 mt-5 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full h-1/2 z-[-2] mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src="/logos/aplicaciones/Logo_Comercial.png"
              alt="tailwind logo"
              className="w-[45%] h-[80%] mt-[-3%] mg:w-1/5 animate-fade-up"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex items-center"></div>
              <div className=""></div>
           
            </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-lg animate-fade-up">
              ¡Bienvenido(a) a la aplicación <span className="text-red-500" >COMERCIAL</span>!
            </h3>
          </div>
        </div>
        {/* seccion de las tarjetas */}

        <p className="flex justify-end text-gray-500 font-semibold mt-[12px]">
          © Bodytech Corp 🧡. Todos los derechos reservados.
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
