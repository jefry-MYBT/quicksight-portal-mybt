export default function Welcome(props){
    return (
        <div className="relative h-[38%] h-10 mt-5 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full h-1/2 z-[-2] mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <img
            src="/gif/welcome.gif"
            alt="tailwind logo"
            className="w-[55%] h-[100%] mt-[-3%] mg:w-1/5"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <div className="flex items-center"></div>
            <div className=""></div>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Bodytech
            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            ¡Bienvenido, {session.user.name} <span >👋</span>!
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
           {session.user.email}
          </p>
        </div>
      </div>
    )
}