import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AddressObjectEqualityInputSchema: z.ZodType<Prisma.AddressObjectEqualityInput> = z.object({
  street: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable()
}).strict();

export default AddressObjectEqualityInputSchema;
