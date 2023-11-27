import Header from "@/components/Header";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { getSession } from "next-auth/react";
import Siderbar from "@/components/Sidebar";
import { ReportesAfiliados } from "@/data/afiliados_reportes";
import Link from "next/link";

export default function Reportes({ session }) {
  const afiliados = ReportesAfiliados;
  const [datos, setDatos] = useState(session);
  const contentCard = [
    {
      title: "Software Médico",
      img: "/gif/medical/software_medico.gif",
      description: "Software Médico - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/4cef9414-d260-4a20-80f7-34a755b69b51/views/c69710fa-8bc0-4e00-9419-df72534192ae",
    },
    {
      title: "Programas Entrenamiento",
      img: "/gif/medical/entrenamiento.gif",
      description: "Programas Entrenamiento - Quicksight",
      href: "https://us-east-1.quicksight.aws.amazon.com/sn/accounts/111141462942/dashboards/da95351b-f2bf-48f9-834c-2dd469eafb34?directory_alias=bodytechteam",
    },
  ];

  return (
    <div className="flex">
      <Siderbar datos={datos} />
      <div className="h-screen flex-1 p-7">
        <Header datos={datos} />
        <div className="relative mt-5 flex flex-col md:flex-row dark:bg-[#172554] dark:border-[#172554] dark:text-white md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full h-[20%] z-[-2] mx-auto border border-white bg-white">
          {/* <div className="w-full md:w-1/3 bg-white dark:bg-[#172554] dark:text-white grid place-items-center">
            <img
              src="/logos/aplicaciones/Logo_Medical.png"
              alt="software_medico"
              className="w-[50%] h-[80%] mt-[-2%] mg:w-1/5 animate-fade-up"
            />
          </div> */}
          <div className="w-full md:w-2/3 dark:bg-[#172554] dark:text-white bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex items-center"></div>
              <div className=""></div>
            </div>
            <h3 className="font-black dark:bg-[#172554] dark:text-white text-gray-800 md:text-3xl text-lg animate-fade-up mt-[10px]">
              ¡Bienvenid@ a la sección de
              <span className="text-blue-500"> REPORTES</span>!
            </h3>
          </div>
        </div>
        {/* seccion del menu acordeon */}
        <div className="w-full pt-5">
          <div className="mx-auto w-full rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span className="font-bold text-base">Operaciones</span>
                    {open ? (
                      <svg
                        className="w-6 h-6 animate-bounce"
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
                          
                          <path
                            d="M15 13.5L12 10.5L9 13.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 animate-bounce"
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
                          
                          <path
                            d="M15 10.5L12 13.5L9 10.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </g>
                      </svg>
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {/* sub seccion de los reportes de afiliados */}
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="font-semibold text-base">
                              Afiliados
                            </span>
                            {open ? (
                      <svg
                        className="w-6 h-6 animate-bounce"
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
                          
                          <path
                            d="M15 13.5L12 10.5L9 13.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </g>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 animate-bounce"
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
                          
                          <path
                            d="M15 10.5L12 13.5L9 10.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </g>
                      </svg>
                    )}
                          </Disclosure.Button>
                          {afiliados.map((afiliado, i) => (
                          <Disclosure.Panel className="text-base px-4 pt-4 pb-2 text-gray-500 hover:underline">
                            <svg
                              viewBox="0 0 1024 1024"
                              class="icon"
                              className="w-5 h-5 inline-block m-[6px]"
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
                                  d="M511.9 924.8C91.8 924.8 2.6 524.1 1.7 520.1L0 512l1.7-8.1c0.8-4 90-404.7 510.2-404.7s509.4 400.7 510.2 404.7l1.9 9.1-2.4 9c-0.9 4-110.5 402.8-509.7 402.8zM80.6 511.9c13.7 52.8 102.2 334.2 431.4 334.2 310.8 0 413.7-279.5 431.1-335.1-14.6-55.5-104.2-333.2-431.1-333.2-330.4 0-417.8 281-431.4 334.1z"
                                  fill="#3688FF"
                                ></path>
                                <path
                                  d="M511.9 708.6c-108.4 0-196.6-88.2-196.6-196.6s88.2-196.6 196.6-196.6c21.7 0 39.3 17.6 39.3 39.3 0 21.7-17.6 39.3-39.3 39.3-65 0-117.9 52.9-117.9 117.9s52.9 117.9 117.9 117.9 118-52.8 118-117.8c0-24.8-7.6-48.5-21.9-68.5-12.7-17.7-8.6-42.2 9.1-54.9 17.7-12.7 42.2-8.6 54.8 9.1 24 33.5 36.6 73 36.6 114.3 0 108.4-88.2 196.6-196.6 196.6z"
                                  fill="#5F6379"
                                ></path>
                              </g>
                            </svg>
                              <Link target="_blank" href={afiliado.href}>
                                {afiliado.title}
                              </Link>
                          </Disclosure.Panel>
                          ))}
                        </>
                      )}
                    </Disclosure>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/*  <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
              
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}
          </div>
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
