import { signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";

export default function Header(props) {
  return (
    <div className="flex bg-white justify-between px-4 pb-2 pt-[5px] rounded-lg">
      <div>
       <p className="w-full h-full mt-[10px] font-semibold animate-fade-up text-xl tracking-wide">Business Intelligence</p>
        {/* <h1 className="w-10/12 animate-fade-down">Inicio</h1> */}
      </div>
      <Menu as="div">
        <div>
          <Menu.Button className="flex items-center gap-4 hover:bg-gray-200 py-2 px-4 rounded-lg transition-colors relative">
          <img src={props.datos.user.image} className="w-8 h-8 object-cover rounded-full" />
            <span>{props.datos.user.name}</span> 
            <svg
              className="w-8 h-8 hover:animate-bounce"
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
                  d="M7 10L12 15L17 10"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
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
            className=" z-50 absolute top-6 w-full bg-white rounded-lg shadow-lg p-4 "
          >
            <div>
              <h1 className="font-medium text-center mb-2 text-xs text-gray-400">
              {props.datos.user.email}
              </h1>
              <hr className="my-2" />
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="w-full text-base flex items-center gap-4 p-2 rounded-lg hover:bg-gray-200"
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