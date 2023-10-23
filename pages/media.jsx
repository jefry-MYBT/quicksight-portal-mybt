import Header from "@/components/Header";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { getSession } from "next-auth/react";
import Siderbar from "@/components/Sidebar";
import { ReportesAfiliados } from "@/data/afiliados_reportes";
import Link from "next/link";

export default function Media({ session }) {
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
        <div className="relative mt-5 flex flex-col md:flex-row dark:bg-[#172554] dark:border-[#172554] dark:text-white md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full h-[10%] z-[-2] mx-auto border border-white bg-white">
          {/* <div className="w-full md:w-1/3 bg-white dark:bg-[#172554] dark:text-white grid place-items-center">
            <img
              src="/logos/aplicaciones/Logo_Medical.png"
              alt="software_medico"
              className="w-[50%] h-[80%] mt-[-2%] mg:w-1/5 animate-fade-up"
            />
          </div> */}
          <div className="w-full mt-[-20px] md:w-2/3 dark:bg-[#172554] dark:text-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex items-center"></div>
              <div className=""></div>
            </div>
            <h3 className="font-black dark:bg-[#172554] dark:text-white text-gray-800 md:text-3xl text-lg animate-fade-up ">
              ¡Bienvenid@ a la sección de
              <span className="text-blue-500"> APRENDIZAJE</span>!
            </h3>
          </div>
        </div>
        {/* seccion del menu acordeon */}
        <div className="w-full pt-5">
          <div className="mx-auto w-full h rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span className="font-bold text-base">
                      Instructivo Quicksight - Creación Usuario
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
                          {" "}
                          <path
                            d="M15 13.5L12 10.5L9 13.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
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
                          {" "}
                          <path
                            d="M15 10.5L12 13.5L9 10.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {/* sub seccion de los reportes de afiliados */}
                    <iframe
                      src="/files/pdf/usuario_quicksight.pdf"
                      className="w-full h-[440px]"
                      frameborder="0"
                    />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/*  <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
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
