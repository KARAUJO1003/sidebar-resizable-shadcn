import { z } from 'zod'

export const createUserSchema = z.object({
  username: z
    .string()
    .min(2, 'Usuario deve ser maior que 2 caracteres.')
    .max(50),
  email: z
    .string()
    .email('O email deve ser válido')
    .refine((email) => email.endsWith('@ferroeste.com.br'), {
      message: 'O email deve ser @ferroeste.com.br',
    }),
  roles: z.array(z.string().min(1)).nonempty(),
  modules: z.array(z.string().min(1)).nonempty(),
  permissions: z
    .array(
      z.object({
        permission: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        ),
      }),
    )
    .nonempty(),
})
