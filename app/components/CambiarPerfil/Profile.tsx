// @ts-nocheck

import PencilIcon from "./PencilIcon";
import useUsuarioContext from "@/app/hooks/useUsuarioContext";
import { useAuth } from "@/app/hooks/useAuth";

const Profile = ({setModalOpen}) => {
const { avatarUrl } = useUsuarioContext();
const { user } = useAuth({});
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
      <h2 className="text-white font-bold mt-6 text-lg">{user?.name}</h2>
      <p className="text-gray-500  mt-2 text-md">{user?.email}</p>
   
    </div>
   
 
  );
};

export default Profile;
