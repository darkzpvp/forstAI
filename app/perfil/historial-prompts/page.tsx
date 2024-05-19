"use client";
import { useEffect, useState } from "react";
import clienteAxios from "@/app/config/axios";
import PaginationControls from "@/app/components/Paginations/PaginationControls";
import { useRouter } from "next/navigation";
import { usePrompt } from "@/app/hooks/usePrompt";
import { parseISO, format } from 'date-fns';
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
const Router = useRouter()
  let entries: Entry[] = [];
  const [textPrompt, setTextPrompt] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "13";
  const [totalElements, setTotalElements] = useState(0);
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const {getTextPrompts} = usePrompt()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTextPrompts(setTextPrompt, setLoading, setTotalElements)
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
        <div className="p-4 border-2  border-dashed  border-gray-700 ">
       
<table className="  mt-5 w-full text-sm text-left rtl:text-right text-gray-400 bg-gray-600 rounded-lg overflow-hidden ">
  <thead className="text-xs uppercase bg-gray-900 text-gray-400 ">
    <tr>
      <th className="px-6 py-3 rounded-tl-lg">Prompt</th>
      <th className="px-6 py-3 text-nowrap whitespace-nowrap rounded-tr-lg">Fecha de generación</th>
    </tr>
  </thead>
  <tbody>
    {loading ? (
      <tr className="">
        <td className=" w-[90%] px-6">Loading...</td>
      </tr>
    ) : (
      entries.map((text, index) => (
        <tr key={index} className="border-b bg-gray-800 border-gray-700 ">
          <td className=" w-[90%]  px-6  py-4 font-medium whitespace-nowrap text-gray-300 ">
            {text?.texto}
          </td>
          <td className="px-6 py-4 text-right font-medium whitespace-nowrap text-gray-300 ">
          {format(parseISO(text?.created_at), 'dd/MM/yyyy HH:mm:ss')}
          </td>
    
        
        </tr>
      ))
    )}
  </tbody>
</table>
          <div className=" flex justify-between ">
            <PaginationControls
              hasNextPage={end < frames.length}
              hasPrevPage={start > 0}
              totalElements={totalElements}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;