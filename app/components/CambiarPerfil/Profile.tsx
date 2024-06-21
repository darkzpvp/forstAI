// @ts-nocheck

import PencilIcon from "./PencilIcon";
import { useAuth } from "@/app/hooks/useAuth";
import useSWR from "swr";
import useCambiarFotoPerfil from "@/app/hooks/useCambiarFotoPerfil";
const Profile = ({ setModalOpen }) => {
  const { user } = useAuth({});
  const { avatarData } = useCambiarFotoPerfil(); 
  const avatarSrc = avatarData ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${avatarData}` : "/img/usuario.svg";

  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={avatarSrc}
          alt="Avatar"
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-400"
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full ease-in duration-100 bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>
      <h2 className="text-white font-bold mt-6 text-lg">{user?.name}</h2>
      <p className="text-gray-500  mt-2 text-md">{user?.email}</p>
    </div>
  );
};

export default Profile;
