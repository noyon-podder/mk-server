import { z } from 'zod'

const productCreateValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    brand: z.string().min(1, { message: 'Brand is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    price: z.number().min(0, { message: 'Price must be a positive number' }),
    rating: z
      .number()
      .min(0)
      .max(5, { message: 'Rating must be between 0 and 5' }),
    quantity: z
      .number()
      .min(0, { message: 'Quantity must be a non-negative number' }),
  }),
})

const productUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }).optional(),
    brand: z.string().min(1, { message: 'Brand is required' }).optional(),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .optional(),
    price: z
      .number()
      .min(0, { message: 'Price must be a positive number' })
      .optional(),
    rating: z
      .number()
      .min(0)
      .max(5, { message: 'Rating must be between 0 and 5' })
      .optional(),
    quantity: z
      .number()
      .min(0, { message: 'Quantity must be a non-negative number' })
      .optional(),
  }),
})

export const ProductValidation = {
  productCreateValidationSchema,
  productUpdateValidationSchema,
}
