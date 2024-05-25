// @ts-nocheck

import Link from "next/link";
import Profile from "../CambiarPerfil/Profile";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
import Modal from "../CambiarPerfil/Modal";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";

const Sidebar = () => {
  const Router = useRouter();
  const RouterPath = usePathname();
  const { logout, user } = useAuth({});
  const { modalOpen, setModalOpen, setAvatarUrl } = useUsuarioContext();
  const handlePerfil = () => {
    Router.push("/perfil");
  };
  const handlePrompts = () => {
    Router.push("/perfil/historial-prompts");
  };

  const updateAvatar = (imgSrc) => {
    setAvatarUrl(imgSrc);
  };
  return (
    <>
      <aside
        id="logo-sidebar"
        className=" fixed z-30 left-0 w-64 h-screen transition-transform -translate-x-full  border-r  sm:translate-x-0 bg-gray-800 border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto  bg-gray-900">
          <ul className="relative mt-12 space-y-2 text-sm ">
            <div className="  mb-10 text-center px-10 max-w-xl mx-auto">
              <div className=" absolute top-5 left-5 cursor-pointer">
                <Link href={`/generar`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              <Profile setModalOpen={setModalOpen} />
            </div>

            <li onClick={handlePerfil}>
              <a
                className={`${
                  RouterPath === "/perfil" ? "bg-gray-700" : ""
                } cursor-pointer flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group transition ease-in duration-100`}
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                  Perfil
                </span>
              </a>
            </li>
            <li onClick={handlePrompts}>
              <a
                className={`${
                  RouterPath === "/perfil/historial-prompts"
                    ? "bg-gray-700"
                    : ""
                } cursor-pointer flex items-center p-2 rounded-lg text-white  hover:bg-gray-700 group transition ease-in duration-100`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                  Historial de prompts
                </span>
              </a>
            </li>
                {user?.rol === 1 && (
              <li>
                <Link
                  href="/admin"
                  className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                    Admin
                  </span>
                </Link>
              </li>
            )}
            <li>
              <Link
                href="/generar"
                className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-300">
                  Generar
                </span>
              </Link>
            </li>
         
            <li>
              <a className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group transition ease-in duration-100">
                <svg
                  className="flex-shrink-0 w-5 h-5  transition duration-75 text-gray-400  group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span
                  onClick={logout}
                  className="flex-1 ms-3 whitespace-nowrap text-gray-300"
                >
                  Logout
                </span>
              </a>
            </li>
           
          </ul>
        </div>
      </aside>
      {modalOpen && (
        <div
          onClick={() => {
            setModalOpen(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
        >
          <Modal
            setModalOpen={setModalOpen}
            updateAvatar={updateAvatar}
            closeModal={() => setModalOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
