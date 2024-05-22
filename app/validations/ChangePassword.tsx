import { TypeOf, z } from "zod";

export const changePasswordSchema = z.object({
  current_password: z
    .string()
    .min(8, { message: "El password debe tener mínimo 6 caracteres" }),

  new_password: z
    .string()
    .min(8, { message: "El password repetido debe tener mínimo 6 caracteres" })
    .max(50, { message: "La contraseña debe tener máximo 20 caracteres" })
    .regex(/(?=.*[a-z])/, {
      message: "La contraseña debe contener al menos una letra minúscula",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "La contraseña debe contener al menos una letra mayúscula",
    })
    .regex(/(?=.*[0-9])/, {
      message: "La contraseña debe contener al menos un número",
    }),
});

export type changePassword = TypeOf<typeof changePasswordSchema>;
