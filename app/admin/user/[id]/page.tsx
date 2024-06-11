// @ts-nocheck
"use client";
import Header_Dos from "@/app/components/Header_Dos";
import useEstadoUsuario from "@/app/hooks/useEstadoUsuario";
import React, { useEffect } from "react";
import { useState } from "react";
import PaginationControls from "@/app/components/Admin/PaginationControlsAdmin";
import Table from "@/app/components/AdminUser/Table";
import Facturacion from "@/app/components/AdminUser/Facturacion";
import DetallesCuenta from "@/app/components/AdminUser/DetallesCuenta";
import EncabezadoAdminUser from "@/app/components/AdminUser/EncabezadoAdminUser";
import useSWR from "swr";
import clienteAxios from "@/app/config/axios";
const Page = ({ params, searchParams }) => {
     const idUser = params.id;


  const informacionUsuarioId = async() => {

    try {
      const authToken = localStorage.getItem("AUTH_TOKEN");
      if (!authToken) {
        console.log("Usuario no autenticado. Redirigiendo a la página de inicio de sesión...");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      const { data } = await clienteAxios(`api/informacion-usuario-panel/${idUser}`, {
        headers: config.headers,
      
      });
      return data

    } catch (error) {
 console.log(error);
  
    }
  }
  const { data: usuarioId } = useSWR(`usuarioId-${idUser}`, informacionUsuarioId);


  let entries = [];

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  entries = usuarioId?.prompts?.slice(start, end);

  const [menu, setMenu] = useState(false);
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const handleCloseMenu = () => {
    if (menu) {
      setMenu(false);
    }
    if (menuHamburguesa) {
      setMenuHamburguesa(false);
    }
  };
  const { state } = useEstadoUsuario();

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
        <div className=" block sm:grid sm:grid-cols-4 gap-5 mx-auto ">
          <DetallesCuenta
            informacion_personal={informacion_personal}
            suscripcion={suscripcion}
          />
          <Facturacion
            detalles_facturacion={detalles_facturacion}
            informacion_personal={informacion_personal}
          />
         <div className=" col-span-4 bg-gray-800 my-5 rounded-lg ">
            <Table loading={!usuarioId} entries={entries} />
            {entries?.length > 0 && (
               <div className=" flex justify-between ">
              <PaginationControls
                hasNextPage={end < prompts?.length}
                hasPrevPage={start > 0}
                totalElements={usuarioId?.prompts?.length}
                basePath={`/admin/user/${idUser}`}
                perpage={8}
              />
            </div>
            

            )}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
