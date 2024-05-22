import { TypeOf, z } from 'zod';

export const enviarEmailSchema = z.object({
  email: z.string()
    .email({ message: "Debe ser un email válido" })
    .min(3, { message: "El email debe tener mínimo 3 caracteres" })
    .max(50, { message: "El email debe tener máximo 50 caracteres" }),
    name: z.string().min(3, { message: "El nombre debe tener mínimo 3 caracteres" }).max(20, { message: "El nombre debe tener máximo 20 caracteres" }),
    message: z.string().min(10, {message: "El mensaje debe tener mínimo 10 caracteres"}).max(255, {message: "El mensaje debe tener máximo 255 caracteres"})
    
  });

export type enviarEmail = TypeOf<typeof enviarEmailSchema>;