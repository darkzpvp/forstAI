// @ts-nocheck

"use client";
import React, { useEffect, useState } from "react";

import PagePrincipal from "../../../page"
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";
function Page({ params }: { params: { id: number; hash: string } }) {
  const { user, confirmarEmail } = useAuth({});
  const [idUrl, setIdUrl] = useState(params.id);
  const [hashUrl, setHashUrl] = useState(params.hash);
  const Router = useRouter();
  
  useEffect(() => {
    confirmarEmail(idUrl, hashUrl)
      .then(() => {
        Router.push('/generar'); 
      })
      .catch(error => {
        console.error(error);
      });
  }, [idUrl, hashUrl]);
  return <PagePrincipal />;
}

export default Page;
