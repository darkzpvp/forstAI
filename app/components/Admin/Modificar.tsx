// @ts-nocheck

import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import useInformacionPersonal from "@/app/hooks/useInformacionPersonal";
import { actualizarUsuario, actualizarUsuarioSchema } from "@/app/validations/actualizarUsuarioSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Modificar = ({
  clickModificar,
  setClickModificar,
  usuario,
  setUsuario,
  selectedUserId,

}) => {
  const notifyModificar = () => {
    toast("¡Usuario cambiado con éxito! 🚀", {
      style: {
        backgroundColor: "#1F2937",
        color: "#D1D5DB",
      },
    });
  };


  const { nombre, email, free_prompts, suscripcion, rol } = usuario || {};
  
const {setSelectedUsers} = useInformacionPersonal()

  const valoresSuscripcion = {
    'basico': 1,
    'estandar': 2,
    'premium': 3
  };
  const valorSuscripcion = suscripcion !== null ? (valoresSuscripcion[suscripcion] || null) : null;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<actualizarUsuario>({
    values: {
      nombre: nombre,
      email: email,
      free_prompts: free_prompts === null ? 0 : free_prompts,
      suscripcion: suscripcion === null ? '0' : valorSuscripcion, 
      rol: rol,
      password: '',
      password_repeat: ''
    },
    resolver: zodResolver(actualizarUsuarioSchema)
  });

  const onSubmit: SubmitHandler<actualizarUsuario> = async (data) => {
    setUsuario(data);
    await actualizarDatosUserId(selectedUserId, data);
    setClickModificar(false);
    setSelectedUsers([])

    notifyModificar();
    
  };
  const handleCerrarModal = (e) => {
    e.preventDefault();
    setClickModificar(false);
    setSelectedUsers([])
    reset()
  };
  const { actualizarDatosUserId } = useInformacionPersonal();



  return (
    <>
      {clickModificar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900 bg-opacity-70"
          onClick={(e) => handleCerrarModal(e)}
        >
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    {...register("nombre")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="Marcos"
                  />
                      <div className=" text-sm text-red-600">
                        {errors?.nombre?.message && (
                          <p>{errors?.nombre?.message}</p>
                        )}
                      </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="marcos@correo.com"
                  />
                  <div className=" text-sm text-red-600">
                        {errors?.email?.message && (
                          <p>{errors?.email?.message}</p>
                        )}
                      </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="******"
                  />
                  <div className=" text-sm text-red-600">
                        {errors?.password?.message && (
                          <p>{errors?.password?.message}</p>
                        )}
                      </div>
                </div>
                <div>
                  <label
                    htmlFor="password_repeat"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Repite contraseña
                  </label>
                  <input
                    type="password"
                    id="password_repeat"
                    {...register("password_repeat")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="******"
                  />
                  <div className=" text-sm text-red-600">
                        {errors?.password_repeat?.message && (
                          <p>{errors?.password_repeat?.message}</p>
                        )}
                      </div>
                </div>
                <div>
                  <label
                    htmlFor="free_prompts"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Prompts gratuitos
                  </label>
                  <input
                    type="number"
                    id="phone"
                    {...register("free_prompts")}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="12345678"
                  />
                  <div className=" text-sm text-red-600">
                        {errors?.free_prompts?.message && (
                          <p>{errors?.free_prompts?.message}</p>
                        )}
                      </div>
                </div>
                <div className="">
                  <label
                    htmlFor="suscripcion"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Selecciona la suscripción
                  </label>
                  <select
                    id="tipo"
                    {...register("tipo")}
                    defaultValue={valorSuscripcion}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  >
                    <option value="0">Plan gratuito</option>
                    <option value="1">Plan básico</option>
                    <option value="2">Plan estándar</option>
                    <option value="3">Plan Premium</option>
                  </select>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="rol"
                    type="checkbox"
                    {...register("rol")}
                    className="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                  />
                  <label
                    htmlFor="rol"
                    className="ms-2 text-sm font-medium text-gray-300"
                  >
                    Admin
                  </label>
                </div>
              </div>
              <div className="flex justify-center mx-auto gap-2">
                <button
                  onClick={(e) => handleCerrarModal(e)}
                  className="py-2.5 px-5 text-sm font-medium rounded-lg bg-gray-600 hover:bg-gray-700 border-gray-600 text-gray-300"
                >
                  No, cancelar
                </button>
                <button
                  type="submit"
                 
                  className="text-white bg-[#5D68CC] hover:bg-[#525cb7] font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Sí, estoy seguro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modificar;
