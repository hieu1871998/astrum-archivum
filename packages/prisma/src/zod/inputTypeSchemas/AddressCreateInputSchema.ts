import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AddressCreateInputSchema: z.ZodType<Prisma.AddressCreateInput> = z.object({
  street: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  zip: z.string().optional().nullable()
}).strict();

export default AddressCreateInputSchema;
