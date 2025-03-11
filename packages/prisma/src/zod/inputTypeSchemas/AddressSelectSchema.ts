import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AddressSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
  street: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  zip: z.boolean().optional(),
}).strict()

export default AddressSelectSchema;
