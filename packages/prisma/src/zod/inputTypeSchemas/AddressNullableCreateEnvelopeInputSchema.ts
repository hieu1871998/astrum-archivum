import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateInputSchema } from './AddressCreateInputSchema';

export const AddressNullableCreateEnvelopeInputSchema: z.ZodType<Prisma.AddressNullableCreateEnvelopeInput> = z.object({
  set: z.lazy(() => AddressCreateInputSchema).optional().nullable()
}).strict();

export default AddressNullableCreateEnvelopeInputSchema;
