import { signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function Header(props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex dark:bg-[#0f172a] dark:text-white bg-white justify-between px-4 pb-2 pt-[5px] rounded-lg">
      <div className="flex">
        <p className="w-full h-full mt-[10px] font-semibold animate-fade-up text-xl tracking-wide">
          Business Intelligence
        </p>
        {/* <h1 className="w-10/12 animate-fade-down">Inicio</h1> */}
      </div>
      <Menu as="div">
        <div>
          <Menu.Button className="[&>*:nth-child(3)]:hover:animate-bounce flex items-center gap-4 hover:bg-gray-200 dark:hover:bg-[#1e293b] py-2 px-4 rounded-lg transition-colors relative">
            <img
              src={props.datos.user.image}
              className="w-8 h-8 object-cover rounded-full"
            />
            <span>{props.datos.user.name}</span>
            <svg
              className="w-8 h-8 dark:fill-white"
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
                
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="section"
            className=" z-50 absolute top-6 w-full bg-white rounded-lg dark:bg-[#0f172a] dark:text-white shadow-lg p-4 "
          >
            <div>
              <h1 className="font-medium text-center  mb-2 text-xs text-gray-400 dark:text-white">
                {props.datos.user.email}
              </h1>
              <hr className="my-2" />
              <Menu.Item>
                <div>
                  <button
                    className="w-full text-base flex gap-4 p-2 rounded-lg dark:hover:bg-[#1e293b] hover:bg-gray-200"
                    onClick={changeTheme}
                  >
                    {theme === "light" ? (
                      <svg
                        className="w-8 h-8"
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
                          
                          <path
                            d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z"
                            stroke="#000000"
                          ></path>
                          <path
                            d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z"
                            stroke="#000000"
                          ></path>
                          <path
                            d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        className="w-8 h-8"
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
                          
                          <circle
                            cx="12"
                            cy="12"
                            r="6"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                          ></circle>
                          <path
                            d="M12 2V3"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M12 21V22"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M22 12L21 12"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M3 12L2 12"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            opacity="0.5"
                            d="M19.0708 4.92969L18.678 5.32252"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            opacity="0.5"
                            d="M5.32178 18.6777L4.92894 19.0706"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            opacity="0.5"
                            d="M19.0708 19.0703L18.678 18.6775"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                          <path
                            opacity="0.5"
                            d="M5.32178 5.32227L4.92894 4.92943"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                        </g>
                      </svg>
                    )}
                    {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
                  </button>
                </div>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="w-full text-base flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#1e293b]"
                >
                  <img className="w-8 h-8" src="/svg/out.svg"></img>
                  Cerrar Sesión
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
