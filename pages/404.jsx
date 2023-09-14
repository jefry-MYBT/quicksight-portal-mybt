import Link from "next/link";

export default function Error() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
           <div className="max-w-md">
              <div className="text-5xl font-dark font-bold">404</div>
                <p
                  className="text-2xl md:text-3xl font-light leading-normal"
                >Lo sentimos, no hemos podido encontrar esta página.</p>
              <p className="mb-8">Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra página de inicio.</p>
              <Link href="/">
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-[#00b8f4] active:bg-[#00b8f4] hover:bg-blue-700">Volver</button>
              </Link>
        </div>
          <div className="max-w-lg animate-bounce-slow">
         <img  src="/logos/404.png" />
        </div>
        
      </div>
    </div>
  );
}
