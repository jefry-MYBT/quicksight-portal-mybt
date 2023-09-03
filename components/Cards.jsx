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
      {dataCards.map((card, i) => (
        <div className="relative bg-white py-6 px-6 rounded-3xl w-50 my-4 shadow-xl">
          <div
            className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-[#00b8f4]  left-4 -top-6`}
          >
            <Link href={card.href}>
                <img className="h-7 w-7 hover:animate-ping" src={card.img} />
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">{card.title}</p>

            <div className="flex space-x-2 text-gray-400 text-sm my-1">
              {/*      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>3 Weeks Left</p> */}
            </div>
            <div className="border-t-2 "></div>
          </div>
        </div>
      ))}
    </div>
  );
}
