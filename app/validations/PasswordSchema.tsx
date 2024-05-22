import { TypeOf, z } from 'zod';

export const passwordSchema = z.object({

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

export type password = TypeOf<typeof passwordSchema>;