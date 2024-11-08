import { z } from "zod";

export const RegisterBusinessFS = z.object({
  name: z
    .string({
      required_error: "Nombre es requerido",
    })
    .min(4, "El nombre debe tener mínimo 4 caracteres")
    .max(255, "El nombre es demasiado largo"),
  description: z.string().optional(),
  // regex to allow numbers and before the last number add -
  nit: z
    .string()
    .max(11, "El NIT debe tener máximo 10 caracteres númericos")
    .regex(/(^[0-9]+-{1}[0-9]{1})/g, "Información no valida")
    .optional(),
  business_type_id: z.string({
    required_error: "Tipo de negocio es requerido",
  }),
  logo: z.instanceof(File).optional(),
  email_contact: z
    .string({
      message: "Email es requerido",
    })
    .email({
      message: "Email no válido",
    }),
  phone_contact: z
    .string({
      message: "Número de teléfono es requerido",
    })
    .min(12, "Número de teléfono no válido")
    .max(12, "Número de teléfono no válido"),
  address: z
    .string({
      message: "Dirección es requerida",
    })
    .min(6, "Dirección no válida"),
  google_maps_url: z.string().optional(),
  social_fb: z.string().optional(),
  social_ig: z.string().optional(),
  social_tw: z.string().optional(),
  social_lin: z.string().optional(),
  primary_color: z.string().optional(),
  secondary_color: z.string().optional(),
});
