import { TypeOf, z } from 'zod';

export const loginUsuarioSchema = z.object({
  email: z.string()
    .email({ message: "Debe ser un email válido" })
    .min(3, { message: "El email debe tener mínimo 3 caracteres" })
    .max(50, { message: "El email debe tener máximo 50 caracteres" }),
  password: z.string()
    .min(8, { message: "El password debe tener mínimo 6 caracteres" })
    
  });

export type loginUsuario = TypeOf<typeof loginUsuarioSchema>;