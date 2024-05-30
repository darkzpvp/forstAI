import { TypeOf, z } from 'zod';

export const informacionPersonalSchema = z.object({
  nombre: z.string().min(3, { message: "El nombre debe tener mínimo 3 caracteres" }).max(20, { message: "El nombre debe tener máximo 20 caracteres" }).regex(/^[a-zA-Z]+$/, { message: "El nombre solo puede contener letras" }),
  apellidos: z.string().min(3, { message: "El apellido debe tener mínimo 3 caracteres" }).max(20, { message: "El nombre debe tener máximo 20 caracteres" }).regex(/^[a-zA-Z]+$/, { message: "Los apellidos solo pueden contener letras" }),
  numero_telefono: z.string().min(9, { message: "El número de teléfono debe tener al menos 6 dígitos" }).max(15, { message: "El número de teléfono debe tener máximo 15 dígitos" }),
  cp: z.string().min(3, { message: "El código postal debe tener mínimo 3 dígitos" }).max(7, { message: "El código postal debe contener máximo 7 dígitos" }),
  direccion: z.string().min(5, { message: "La dirección debe tener mínimo 5 caracteres" }).max(30, { message: "La dirección debe tener máximo 30 caracteres" }).refine(val => (val.match(/\d/g) || []).length <= 6, { message: "La dirección no puede contener más de 6 números" }),
  pais: z.string().min(1, { message: "El país es obligatorio" }),
  poblacion: z.string().min(3, { message: "La población debe tener mínimo 3 caracteres" }).max(20, { message: "La población debe tener máximo 20 caracteres" }).regex(/^[a-zA-Z]+$/, { message: "La población solo puede contener letras" }),
  provincia: z.string().min(3, { message: "La provincia debe tener mínimo 3 caracteres" }).max(20, { message: "La provincia debe tener máximo 20 caracteres" }).regex(/^[a-zA-Z]+$/, { message: "La provincia solo puede contener letras" }),
  nif_nie: z.string().regex(/^[0-9]{8}[A-Za-z]{1}$/, { message: "El NIF/NIE debe tener 8 números y 1 letra" })
}).passthrough();

export type InformacionPersonal = TypeOf<typeof informacionPersonalSchema>;
