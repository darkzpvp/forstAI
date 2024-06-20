// @ts-nocheck

"use client";
import React, { useEffect, useMemo, useState } from "react";
import Header_Dos from "../components/Header_Dos";
import ModalAdmin from "../components/Admin/ModalAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "../components/Admin/Cards";
import Modificar from "../components/Admin/Modificar";
import Eliminar from "../components/Admin/Eliminar";
import useUsuarioContext from "../hooks/useUsuarioContext";
import PaginationControlsAdmin from "../components/Admin/PaginationControlsAdmin";
import CrearUsuario from "../components/Admin/CrearUsuario";
import Table from "../components/Admin/Table";
import useInformacionPersonal from "../hooks/useInformacionPersonal";
import BuscarUsuarios from "../components/Admin/BuscarUsuarios";
import { useRouter } from "next/navigation";
const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
const Router = useRouter()
  const [action, setAction] = useState<boolean>(false);
  const [responsive, setResponsive] = useState<boolean>(true);
  const [clickModificar, setClickModificar] = useState<boolean>(false);
  const [clickEliminar, setClickEliminar] = useState<boolean>(false);
  const [menuHamburguesa, setMenuHamburguesa] = useState<boolean>(false);
  const [clickUsuario, setClickUsuario] = useState(false);
  const [actualizarTabla, setActualizarTabla] = useState<boolean>(false);
  const [query, setQuery] = useState("");

  const {
    userPanel,
    setUserPanel,
    usuario,
    setUsuario
  } = useUsuarioContext();
  const { setSelectedUsers } = useInformacionPersonal();
  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAction(!action);
  };


  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "9";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const handleCloseMenu = () => {
    if (action) {
      setAction(false);
    }
  };
  const handleUserMenu = () => {
    if (menu) {
      setMenu(false);
    }
    if (menuHamburguesa) {
      setMenuHamburguesa(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowResponsive = window.innerWidth >= 768;
      setResponsive(windowResponsive);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const [menu, setMenu] = useState(false);

  const handleOutsideClick = () => {
    handleCloseMenu();
    handleUserMenu();
    if (showModal) {
      setShowModal(false);
    }
  };

  const [selectedUserId, setSelectedUserId] = useState(null);
  const { showModal, setShowModal } = useUsuarioContext();

  const handleUserMenuClick = async (userId) => {
    const userData = userPanel.find((user) => user.id === userId);
    await setSelectedUsers([]);
    setUsuario(userData);
    setSelectedUserId(userId);
  };

  const handleCloseModal = () => {
    setSelectedUserId(null);
    setUsuario({});
  };

  //Filtrar la query
  const filteredItems = useMemo(() => {
    return userPanel?.filter((item) => {
      if (item && typeof item.nombre === "string") {
        return item.nombre.toLowerCase().includes(query.toLowerCase());
      }
      return false;
    });
  }, [userPanel, query]);

  // Redireccionar cuando se filtra la lista
  useMemo(() => {
    Router.push(`/admin/?page=1&per_page=${per_page}`);
  }, []);

  const filteredItemsTotal = filteredItems?.length ?? 0;

  const entries = useMemo(() => {
    return filteredItems?.slice(start, end);
  }, [filteredItems, start, end]);

  return (
    <div
      className=" bg-gray-700 z-20 overlaymodal h-screen  "
      onClick={() => {
        handleOutsideClick();
      }}
    >
      <Header_Dos
        menu={menu}
        setMenu={setMenu}
        menuHamburguesa={menuHamburguesa}
        setMenuHamburguesa={setMenuHamburguesa}
      />
      <ToastContainer />

      <Cards />

      <div className=" flex justify-center mx-8">
        <div
          className={` z-40 bg-gray-800 mb-6 rounded-lg  mt-4 w-full max-w-7xl lg:overflow-visible overflow-x-auto`}
        >
          {responsive ? (
            <div className="flex items-center justify-between py-3 px-4 bg-gray-900 p-5 rounded-t-lg ">
              <div className="w-[25%]">
                <button
                  onClick={(e) => {
                    handleAction(e);
                  }}
                  className={`${
                    action ? "" : "overlaymodal"
                  } inline-flex items-center ease-in duration-100 font-medium rounded-lg text-sm p-2  bg-gray-700 text-gray-400  hover:bg-gray-800 `}
                  type="button"
                >
                  Acciones
                  <svg
                    className="w-2.5 h-2.5 ms-2.5 pointer-events-none "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {action && (
                  <ModalAdmin
                    clickUsuario={clickUsuario}
                    setClickUsuario={setClickUsuario}
                    setClickEliminar={setClickEliminar}
                  />
                )}
              </div>
              <div>
                <p className=" text-gray-300 font-bold text-xl ">
                  Gestión de usuarios
                </p>
              </div>
              <div className="relative   w-[25%] justify-end">
                <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4  text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block p-2 ps-10 text-sm   rounded-lg   bg-gray-700  placeholder-gray-400 text-gray-300 "
                  placeholder="Buscar usuarios"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <>
              <div className=" bg-gray-900 p-5 rounded-t-lg w-full">
                <div>
                  <p className=" text-gray-300 font-bold text-xl mb-5">
                    Gestión de usuarios
                  </p>
                </div>
                <div className=" flex justify-between pb-4 ">
                  <div className="w-[25%] z-40">
                    <button
                      onClick={handleAction}
                      className={`${
                        action ? "" : "overlaymodal"
                      } inline-flex items-center ease-in duration-100 font-medium rounded-lg text-sm p-2 bg-gray-700 text-gray-400  hover:bg-gray-800 `}
                      type="button"
                    >
                      Acciones
                      <svg
                        className="w-2.5 h-2.5 ms-2.5 pointer-events-none"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {action && (
                      <ModalAdmin
                        clickUsuario={clickUsuario}
                        setClickUsuario={setClickUsuario}
                        setClickEliminar={setClickEliminar}
                      />
                    )}
                  </div>

                  <BuscarUsuarios query={query} setQuery={setQuery} />
                </div>
              </div>
            </>
          )}

          <Table
            handleUserMenuClick={handleUserMenuClick}
            setShowModal={setShowModal}
            userPanel={userPanel}
            selectedUserId={selectedUserId}
            showModal={showModal}
            actualizarTabla={actualizarTabla}
            clickModificar={clickModificar}
            setClickModificar={setClickModificar}
            setActualizarTabla={setActualizarTabla}
            setClickEliminar={setClickEliminar}
            closeModal={handleCloseModal}
            handleCloseModal={handleCloseModal}
            usuario={usuario}
            setUsuario={setUsuario}
            entries={entries}
            filteredItems={filteredItems}
          />
   {filteredItems?.length > 0 && (
          <div className="flex justify-between">
              <PaginationControlsAdmin
            hasNextPage={end < filteredItemsTotal}
            hasPrevPage={start > 0}
            totalElements={filteredItemsTotal}
            basePath="/admin"
            perpage={9}
          />
          </div>
          )}
        
        </div>
      </div>

      <Modificar
        clickModificar={clickModificar}
        selectedUserId={selectedUserId}
        setClickModificar={setClickModificar}
        usuario={usuario}
        setUsuario={setUsuario}
        userPanel={userPanel}
        setUserPanel={setUserPanel}
      />
      <Eliminar
        clickEliminar={clickEliminar}
        setClickEliminar={setClickEliminar}
      />
      <CrearUsuario
        clickUsuario={clickUsuario}
        setClickUsuario={setClickUsuario}
        usuario={usuario}
        setUsuario={setUsuario}
      />
    </div>
  );
};

export default Page;
