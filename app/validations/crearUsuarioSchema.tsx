import { TypeOf, z } from 'zod';

export const crearUsuarioSchema = z.object({
  name: z.string()
    .min(3, { message: "El nombre debe tener mínimo 3 caracteres" })
    .max(20, { message: "El nombre debe tener máximo 20 caracteres" }),
  email: z.string()
    .email({ message: "Debe ser un email válido" })
    .min(3, { message: "El email debe tener mínimo 3 caracteres" })
    .max(50, { message: "El email debe tener máximo 50 caracteres" }),
  password: z.string()
    .min(8, { message: "El password debe tener mínimo 6 caracteres" })
    .max(50, { message: "La contraseña debe tener máximo 20 caracteres" })
    .regex(/(?=.*[a-z])/, { message: "La contraseña debe contener al menos una letra minúscula" })
    .regex(/(?=.*[A-Z])/, { message: "La contraseña debe contener al menos una letra mayúscula" })
    .regex(/(?=.*[0-9])/, { message: "La contraseña debe contener al menos un número" })
    .regex(/(?=.*[!@#$%^&*(),.?":{}|<>_\-])/, { message: "La contraseña debe contener al menos un símbolo" }),
    password_confirmation: z.string()
    .min(8, { message: "El password repetido debe tener mínimo 6 caracteres" })
    .max(50, { message: "La contraseña repetida debe tener máximo 20 caracteres" }),
}).refine(data => data.password === data.password_confirmation, {
  message: "Las contraseñas no coinciden",
  path: ["password_confirmation"],
});

export type crearUsuario = TypeOf<typeof crearUsuarioSchema>;