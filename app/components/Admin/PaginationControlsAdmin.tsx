"use client";
import { FC, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalElements: number;
  basePath: string;
  perpage: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalElements,
  basePath,
  perpage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pageNumber, setPageNumber] = useState("1");
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? perpage;
  const totalPages = Math.ceil(Number(totalElements) / Number(per_page));

  const handleChange = () => {
    let newPage = pageNumber;
    if (!newPage) {
      newPage = "1";
    }
    if (newPage !== page) {
      router.push(`${basePath}/?page=${newPage}&per_page=${per_page}`, {
        scroll: false,
      });
    }
    setPageNumber("");
  };

  useEffect(() => {
    setPageNumber("");
  }, [page]);

  return (
    <div className="p-3 flex gap-2 text-sm">
      <button
        className="cursor-pointer text-sm flex items-center justify-center px-4 h-10 ms-0 leading-tight rounded-s-lg bg-gray-900 text-gray-400 hover:bg-gray-900 hover:text-gray-200"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `${basePath}/?page=${Number(page) - 1}&per_page=${per_page}`,
            { scroll: false }
          );
        }}
      >
        Página anterior
      </button>

      <div className="flex text-nowrap items-center justify-center px-4 h-10 leading-tight bg-gray-900 text-gray-400 hover:bg-gray-900 hover:text-gray-200">
        {page} / {totalPages}
      </div>

      <button
        className="text-sm cursor-pointer flex items-center justify-center px-4 h-10 leading-tight rounded-e-lg bg-gray-900 text-gray-400 hover:bg-gray-900 hover:text-gray-200"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `${basePath}/?page=${Number(page) + 1}&per_page=${per_page}`,
            { scroll: false }
          );
        }}
      >
        Siguiente página
      </button>

      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <input
          type="number"
          min="1"
          value={pageNumber}
          max={totalPages}
          placeholder="..."
          onChange={(e) => setPageNumber(e.target.value)}
          className="px-4 placeholder:text-lg h-10 rounded-lg bg-gray-900 text-gray-400 placeholder:text-center placeholder:flex placeholder:justify-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button type="submit" style={{ display: "none" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaginationControls;
