import Link from "next/link";

const dataCards = [
  {
    title: "Medical",
    color: "blue-500",
    href: "/medical",
    img: "/logos/aplicaciones/iconos/white/medical.png",
  },
  {
    title: "Operaciones",
    color: "#be123c",
    href: "/operaciones",
    img: "/logos/aplicaciones/iconos/white/mercadeo.png",
  },
  {
    title: "Comercial",
    color: "#a21caf",
    href: "/comercial",
    img: "/logos/aplicaciones/iconos/white/operaciones.png",
  },
];

export default function Cards() {
  return (
    <div className="animate-fade-up grid mt-[20px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#ef4444] rounded-lg max-w-xs shadow-2xl">
      <svg className="absolute bottom-0 left-0 mb-8 scale-150 opacity-10" viewBox="0 0 375 283" fill="none">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
        <img className="relative w-40 animate-bounce-slow" src="logos/aplicaciones/botys/comercial.png" alt="comercial" />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Área</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">Comercial</span>
          <Link href="/comercial">
          <span className="block bg-white rounded-full text-[#ef4444] hover:bg-[#ef4444] hover:text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Ingresar</span>
          </Link>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#a855f7] rounded-lg max-w-xs shadow-2xl">
      <svg className="absolute bottom-0 left-0 mb-8 scale-150 opacity-10" viewBox="0 0 375 283" fill="none">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
        <img className="relative w-40 animate-bounce-slow" src="logos/aplicaciones/botys/operaciones.png" alt="operaciones" />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Área</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">Operaciones</span>
          <Link href="/operaciones">
          <span className="block bg-white rounded-full hover:bg-[#a855f7] hover:text-white text-[#a855f7] text-xs font-bold px-3 py-2 leading-none flex items-center">Ingresar</span>
          </Link>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#3b82f6] rounded-lg max-w-xs shadow-2xl">
      <svg className="absolute bottom-0 left-0 mb-8 scale-150 opacity-10" viewBox="0 0 375 283" fill="none">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
        <img className="relative w-40 animate-bounce-slow" src="logos/aplicaciones/botys/medical.png" alt="medical" />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Área</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">Medical</span>
          <Link href="/medical">
          <span className="block hover:bg-[#3b82f6] hover:text-white bg-white rounded-full text-[#3b82f6] text-xs font-bold px-3 py-2 leading-none flex items-center">Ingresar</span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
