"use client";
import { useEffect, useState } from "react";
import PaginationControls from "@/app/components/Admin/PaginationControlsAdmin";
import { usePrompt } from "@/app/hooks/usePrompt";
import { parseISO, format } from "date-fns";
import NavegacionMobile from "@/app/components/Perfil/NavegacionMobile";
interface Entry {
  frames: Entry[];
  _id: string;
  frame_path: string;
  video_resolution: string;
  title: string;
  year: string;
  video_path: string;
  imdbId: string;
  texto: string;
  created_at: string;
}
const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let entries: Entry[] = [];
  const [textPrompt, setTextPrompt] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "10";
  const [totalElements, setTotalElements] = useState(0);
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const { getTextPrompts } = usePrompt();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTextPrompts(
          setTextPrompt,
          setLoading,
          setTotalElements
        );
      } catch (error) {
        console.error("Error al hacer la petición:", error);
      }
    }
    fetchData();
  }, []);
  entries = textPrompt.slice(start, end);

  return (
    <>
    <div className="p-0 sm:px-4 sm:ml-64 text-sm ">
      <NavegacionMobile />
      <div className="flex mx-5">
        <div className=" bg-gray-800 mb-6 sm:rounded-lg mt-8 w-full max-w-5xl lg:overflow-visible overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400 bg-gray-700 overflow-hidden">
            <thead className="text-xs uppercase bg-gray-900 text-gray-400">
              <tr>
                <th className="px-6 py-3 rounded-tl-lg">Prompt</th>
                <th className="px-6 py-3 text-nowrap whitespace-nowrap rounded-tr-lg">
                  Fecha de generación
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr className="border-b bg-gray-800 border-gray-700">
                  <td  colSpan={2} className="px-6 py-4 font-medium whitespace-nowrap text-gray-300 rounded-b-lg">Loading...</td>
                </tr>
              ) : (
                <>
                  {entries.length > 0 ? (
                    entries.map((text, index) => (
                      <tr
                        key={index}
                        className="border-b bg-gray-800 border-gray-700"
                      >
                        <td className="w-[90%] px-6 py-4 font-medium whitespace-nowrap text-gray-300">
                          {text?.texto}
                        </td>
                        <td className="px-6 py-4 text-right font-medium whitespace-nowrap text-gray-300">
                          {format(
                            parseISO(text?.created_at),
                            "dd/MM/yyyy HH:mm:ss"
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-b bg-gray-800 border-gray-700">
                      <td
                        colSpan={2}
                        className="px-6 py-3 font-medium whitespace-nowrap text-gray-300 rounded-b-lg"
                      >
                        No hay ningún prompt que mostrar
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
          {entries?.length > 0 && (
          <div className="flex justify-between">
            <PaginationControls
              hasNextPage={end < textPrompt.length}
              hasPrevPage={start > 0}
              totalElements={totalElements}
              basePath="/perfil/historial-prompts"
              perpage={10}
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
