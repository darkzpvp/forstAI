import { TypeOf, z } from 'zod';

export const informacionPersonalSchema = z.object({
  nombre: z.string().min(3, { message: "El nombre debe tener mínimo 3 caracteres" }).max(20, { message: "El nombre debe tener máximo 20 caracteres" }),
  apellidos: z.string().min(3, { message: "El apellido debe tener mínimo 3 caracteres" }).max(20, { message: "El nombre debe tener máximo 20 caracteres" }),
  numero_telefono: z.string().min(9, { message: "El número de teléfono debe tener al menos 6 dígitos" }).max(15, { message: "El número de teléfono debe tener máximo 15 dígitos" }),
  pais: z.string().min(1, { message: "El país es obligatorio" }),
  poblacion: z.string().min(3, { message: "La población debe tener mínimo 3 caracteres" }).max(20, { message: "La población debe tener máximo 20 caracteres" }),
  provincia: z.string().min(3, { message: "La provincia debe tener mínimo 3 caracteres" }).max(20, { message: "La provincia debe tener máximo 20 caracteres" }),
  nif_nie: z.string().min(8, { message: "El NIF/NIE debe tener 8 números y 1 letra" }).max(8, { message: "El NIF/NIE debe tener 8 números y 1 letra" }),
}).passthrough();

export type InformacionPersonal = TypeOf<typeof informacionPersonalSchema>;
