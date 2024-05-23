import React, { useState } from "react";
import ModalTabla from "./ModalTabla";
import useInformacionPersonal from "@/app/hooks/useInformacionPersonal";

const Table = ({
  handleUserMenuClick,
  setShowModal,
  selectedUserId,
  showModal,
  setClickModificar,
  setActualizarTabla,
  setClickEliminar,
  userPanel,
  filteredItems,
}) => {
  const { selectedUsers, setSelectedUsers } = useInformacionPersonal();
  const [currentUserId, setCurrentUserId] = useState(null);
  const handleShowModal = async (userId) => {
    if (currentUserId !== userId) {
      await setShowModal(false);
      setCurrentUserId(userId);

      await setShowModal(true);
    } else {
      setShowModal(!showModal);
    }
  };
  const handleCheckboxChange = (user) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(user)) {
        return prevSelectedUsers.filter(
          (selectedUser) => selectedUser !== user
        );
      } else {
        return [...prevSelectedUsers, user];
      }
    });
  };

  const handleCheckboxChangeAll = (event) => {
    if (event.target.checked) {
      setSelectedUsers(userPanel);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleRowClick = (user) => {
    handleCheckboxChange(user);
  };

  return (
    <table className="w-full text-sm text-left rtl:text-right  text-gray-400 ">
      <thead className="text-xs  uppercase  bg-gray-800  text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4    rounded   bg-gray-700 "
                onChange={handleCheckboxChangeAll}
              />
            </div>
          </th>

          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Estado
          </th>

          <th scope="col" className="px-6 py-3">
            Rol de usuario
          </th>
          <th scope="col" className="px-6 py-3">
            Suscripcion
          </th>
          <th scope="col" className="px-6 py-3">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredItems?.map((user) => (
          <tr
            key={user.id}
            className={`${
              user?.id === selectedUserId ? "z-40" : "z-0"
            } relative border-b bg-gray-800 border-gray-700 hover:bg-gray-900 transform ease-in duration-75`}
            onClick={() => handleRowClick(user)} // Llama a la función al hacer clic en la fila
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4    rounded   bg-gray-700 "
                  checked={selectedUsers.includes(user)}
                  onChange={() => handleCheckboxChange(user)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-2 font-medium  whitespace-nowrap text-gray-300"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  user?.imagen
                    ? `http://localhost:8000/storage/${user?.imagen}`
                    : "img/usuario.svg"
                }
                alt="Imagen usuario"
              />
              <div className="ps-3">
                <div className="font-normal ">{user?.nombre}</div>
              </div>
            </th>
            <td className="px-6 py-2">
              <div className="flex items-center">
                <div className={`h-2.5 w-2.5 rounded-full ${user?.estado === "Conectado" ? "bg-green-500" : "bg-red-500"}  me-2`}></div>{" "}
                {user?.estado}
              </div>
            </td>
            <td className="px-6 py-2">
              <div className="flex items-center">
                <span className="  text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                  {user?.rol === 0 ? "Usuario" : "Administrador"}
                </span>
              </div>
            </td>
            <td className="px-6 py-2">
              Plan {user?.suscripcion === null ? "gratuito" : user?.suscripcion}
            </td>

            <td className="px-6 py-2">
              <div>
                <svg
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUserMenuClick(user?.id);
                    handleShowModal(user?.id);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" cursor-pointer hover:bg-gray-700/50 rounded-full w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <div>
                  {user?.id === selectedUserId && showModal && (
                    <ModalTabla
                      setClickModificar={setClickModificar}
                      setActualizarTabla={setActualizarTabla}
                      setClickEliminar={setClickEliminar}
                    />
                  )}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
