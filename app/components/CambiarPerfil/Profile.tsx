import { useContext, useEffect, useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import useCambiarFotoPerfil from "@/app/hooks/useCambiarFotoPerfil";
import UsuarioContext from "@/app/context/UsuarioProvider";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";

const Profile = ({modalOpen, setModalOpen}) => {
const { avatarUrl, setAvatarUrl } = useUsuarioContext();

  const updateAvatar = (imgSrc) => {
    setAvatarUrl(imgSrc)
  };

  return (
 
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={avatarUrl || "img/usuario.svg"}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>
      <h2 className="text-white font-bold mt-6 text-lg">Víctor Valverde Olmedo</h2>
      <p className="text-gray-500  mt-2 text-md">victor1val@hotmail.es</p>
   
    </div>
   
 
  );
};

export default Profile;
