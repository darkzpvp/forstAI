"use client";
import useConfirmarEmail from "@/app/hooks/useConfirmarEmail";
import React, { useEffect, useState } from "react";

import PagePrincipal from "../../../page"
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";
function Page({ params }: { params: { id: number; hash: string } }) {
  const { confirmarEmail } = useConfirmarEmail();
  const [idUrl, setIdUrl] = useState(params.id);
  const [hashUrl, setHashUrl] = useState(params.hash);
  const [errores, setErrores] = useState([]);
  const Router = useRouter();
  useEffect(() => {
    confirmarEmail(idUrl, hashUrl, setErrores)
      .catch(error => {
        console.error(error);
      });
  }, [idUrl, hashUrl]);
  return <PagePrincipal />;
}

export default Page;
