import { TypeOf, z } from 'zod';

export const actualizarUsuarioSchema = z.object({
  nombre: z.string()
    .min(3, { message: "El nombre debe tener mínimo 3 caracteres" })
    .max(20, { message: "El nombre debe tener máximo 20 caracteres" }),
  email: z.string()
    .email({ message: "Debe ser un email válido" })
    .min(3, { message: "El email debe tener mínimo 3 caracteres" })
    .max(50, { message: "El email debe tener máximo 50 caracteres" }),
  password: z.string()
  
    .max(20, { message: "La contraseña debe tener máximo 20 caracteres" }),
  password_repeat: z.string()
   
    .max(20, { message: "La contraseña repetida debe tener máximo 20 caracteres" }),

}).passthrough().refine(data => data.password === data.password_repeat, {
  message: "Las contraseñas no coinciden",
  path: ["password_repeat"],
});

export type actualizarUsuario = TypeOf<typeof actualizarUsuarioSchema>;
