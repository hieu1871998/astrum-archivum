import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateInputSchema } from './AddressCreateInputSchema';
import { AddressUpsertInputSchema } from './AddressUpsertInputSchema';

export const AddressNullableUpdateEnvelopeInputSchema: z.ZodType<Prisma.AddressNullableUpdateEnvelopeInput> = z.object({
  set: z.lazy(() => AddressCreateInputSchema).optional().nullable(),
  upsert: z.lazy(() => AddressUpsertInputSchema).optional(),
  unset: z.boolean().optional()
}).strict();

export default AddressNullableUpdateEnvelopeInputSchema;
