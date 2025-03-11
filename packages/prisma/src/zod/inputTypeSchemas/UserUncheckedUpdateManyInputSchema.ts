import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { AddressNullableUpdateEnvelopeInputSchema } from './AddressNullableUpdateEnvelopeInputSchema';
import { AddressCreateInputSchema } from './AddressCreateInputSchema';

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableUpdateEnvelopeInputSchema),z.lazy(() => AddressCreateInputSchema) ]).optional().nullable(),
}).strict();

export default UserUncheckedUpdateManyInputSchema;
