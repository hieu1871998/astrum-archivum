import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateInputSchema } from './AddressCreateInputSchema';
import { AddressUpdateInputSchema } from './AddressUpdateInputSchema';

export const AddressUpsertInputSchema: z.ZodType<Prisma.AddressUpsertInput> = z.object({
  set: z.lazy(() => AddressCreateInputSchema).nullable(),
  update: z.lazy(() => AddressUpdateInputSchema)
}).strict();

export default AddressUpsertInputSchema;
