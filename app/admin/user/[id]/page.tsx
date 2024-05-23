"use client";
import Header_Dos from "@/app/components/Header_Dos";
import useEstadoUsuario from "@/app/hooks/useEstadoUsuario";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
import React, { useEffect } from "react";
import { useState } from "react";
import PaginationControls from "@/app/components/Admin/PaginationControlsAdmin";
import Table from "@/app/components/AdminUser/Table";
import Facturacion from "@/app/components/AdminUser/Facturacion";
import DetallesCuenta from "@/app/components/AdminUser/DetallesCuenta";
import EncabezadoAdminUser from "@/app/components/AdminUser/EncabezadoAdminUser";
const page = ({ params, searchParams }) => {
  let entries = [];

  const [totalElementsUser, setTotalElementsUser] = useState(0);
  const [textPrompt, setTextPrompt] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  entries = textPrompt?.slice(start, end);

  const [menu, setMenu] = useState(false);
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const idUser = params.id;
  const { informacionUsuarioId, usuarioId } = useUsuarioContext();
  useEffect(() => {
    const fetchData = async () => {
      await informacionUsuarioId(
        idUser,
        setTextPrompt,
        setLoading,
        setTotalElementsUser
      );
      setLoading(false);
    };
    fetchData();
  }, [totalElementsUser, idUser]);
  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
    }
    if (menuHamburguesa) {
      setMenuHamburguesa(false);
    }
  };
  const { state, ultimaActividad } = useEstadoUsuario();

  const { informacion_personal, suscripcion, detalles_facturacion, prompts } =
    usuarioId ?? [];
  return (
    <>
      <Header_Dos
        menu={menu}
        setMenu={setMenu}
        menuHamburguesa={menuHamburguesa}
        setMenuHamburguesa={setMenuHamburguesa}
      />

      <EncabezadoAdminUser
        informacion_personal={informacion_personal}
        state={state}
        handleCloseMenu={handleCloseMenu}
      />

      <div className=" mx-auto px-5 md:px-18 sm:px-8 xl:px-40  ">
        <div className=" block sm:grid sm:grid-cols-4 gap-5 ">
          <DetallesCuenta
            informacion_personal={informacion_personal}
            suscripcion={suscripcion}
          />
          <Facturacion
            detalles_facturacion={detalles_facturacion}
            informacion_personal={informacion_personal}
          />
          <div className=" col-span-4 bg-gray-800 my-5 rounded-lg ">
            <Table loading={loading} entries={entries} />
            <div className=" flex justify-between ">
              <PaginationControls
                hasNextPage={end < prompts?.length}
                hasPrevPage={start > 0}
                totalElements={totalElementsUser}
                basePath={`/admin/user/${idUser}`}
                perpage={8}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
