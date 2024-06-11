// @ts-nocheck

import React, { useEffect, useState } from "react";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
const Cards = () => {
  const {
    usuarioSemanaPanel,
    beneficioSemanaPanel,
    ingresosTotalesPanel,
    ingresosTotales,
    usuarioSemana,
    beneficioSemana,
    loadingPage
  } = useUsuarioContext();
  useEffect(() => {
    const infoPanel = async () => {
      await usuarioSemanaPanel();
      await beneficioSemanaPanel();
      await ingresosTotalesPanel();
    };
    infoPanel();
  }, []);

  const { current_week_count, percentage_difference } = usuarioSemana ?? [];
  const { total_coste } = ingresosTotales ?? [];
  const { total_coste_semana_actual } = beneficioSemana ?? [];
  const percentageDifference =
    beneficioSemana?.percentage_difference?.toFixed(2);

    const percentageDifferenceUser =
    percentage_difference?.toFixed(2);
  return (
    <>
      <div className=" sm:flex block px-8 xl:px-0  gap-4 justify-center w-full max-w-7xl mx-auto   ">
        {loadingPage ? (
          <></>
        ) : (
          <>
            <div className="max-w-md  mx-auto w-full  rounded-lg shadow bg-gray-800 p-4 md:p-6 mt-4 ">
              <div className="flex justify-between">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-white pb-2">
                    {current_week_count}
                  </h5>
                  <p className="text-base font-normal text-gray-400">
                    Usuarios esta semana
                  </p>
                </div>
                <div
                  className={`flex items-center px-2.5 py-0.5 text-base font-semibold ${
                    percentageDifferenceUser > 0
                      ? "text-green-500"
                      : "text-red-500"
                  } text-center`}
                >
                  {percentageDifferenceUser}%
                  {percentageDifferenceUser > 0 ? (
                    <svg
                      className="w-3 h-3 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13V1m0 0L1 5m4-4 4 4"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-3 h-3 ms-1"
                    >
                      <path d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <div className="max-w-md   mx-auto  w-full  rounded-lg shadow bg-gray-800 p-4 md:p-6 mt-4">
              <div className="flex justify-between  pb-3">
                <dl>
                  <dt className="text-base font-normal  text-gray-400 pb-1">
                    Beneficio
                  </dt>
                  <dd className="leading-none text-3xl font-bold  text-white">
                    {total_coste}€
                  </dd>
                </dl>
                <div>
                  <span className="  text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md bg-green-900 text-green-300">
                    <svg
                      className="w-2.5 h-2.5 me-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13V1m0 0L1 5m4-4 4 4"
                      />
                    </svg>
                    Beneficio
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-md  mx-auto  w-full  rounded-lg shadow bg-gray-800 mt-4 p-4 md:p-6">
              <div className="flex justify-between pb-3">
                <div>
                  <h5 className="leading-none text-3xl font-bold  text-white pb-2">
                    {total_coste_semana_actual}€
                  </h5>
                  <p className="text-base font-normal  text-gray-400">
                    Suscripciones esta semana
                  </p>
                </div>
                <div
                  className={`flex items-center px-2.5 py-0.5 text-base font-semibold ${
                    percentageDifference > 0
                      ? "text-green-500 stroke-green-500"
                      : "text-red-500 stroke-red-500"
                  } text-center`}
                >
                  {percentageDifference}%
                  {percentageDifference > 0 ? (
                    <svg
                      className="w-3 h-3 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 14"
                    >
                      <path
                        stroke=""
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13V1m0 0L1 5m4-4 4 4"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke=""
                      className="w-3 h-3 ms-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
