import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressNullableCreateEnvelopeInputSchema } from './AddressNullableCreateEnvelopeInputSchema';
import { AddressCreateInputSchema } from './AddressCreateInputSchema';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableCreateEnvelopeInputSchema),z.lazy(() => AddressCreateInputSchema) ]).optional().nullable(),
}).strict();

export default UserCreateManyInputSchema;
