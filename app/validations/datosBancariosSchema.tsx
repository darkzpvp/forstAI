import {TypeOf, z} from 'zod'

export const datosBancariosSchema = z.object({
numeroTarjeta: z.string().min(16, {message: "El número de tarjeta debe tener 16 dígitos"}).max(16, {message: "El número de tarjeta debe tener 16 dígitos"}),
fechaExpiracion: z.string().min(4, {message: "La fecha de expiración debe tener el formato MM/AA"}).max(4, {message: "La fecha de expiración debe tener el formato MM/AA"}),
codigoExpiracion: z.string().min(3, {message: "El código de seguridad debe tener 3 dígitos"}).max(3, {message: "El código de seguridad debe tener 3 dígitos"}),
titular: z.string().min(3, { message: "El titular es obligatorio" }).regex(/^[a-zA-Z]+$/, { message: "El titular solo puede contener letras" }),

})
export type DatosBancarios = TypeOf<typeof datosBancariosSchema>;
