import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressNullableCreateEnvelopeInputSchema } from './AddressNullableCreateEnvelopeInputSchema';
import { AddressCreateInputSchema } from './AddressCreateInputSchema';
import { PostUncheckedCreateNestedManyWithoutAuthorInputSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableCreateEnvelopeInputSchema),z.lazy(() => AddressCreateInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
