import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressNullableCreateEnvelopeInputSchema } from './AddressNullableCreateEnvelopeInputSchema';
import { AddressCreateInputSchema } from './AddressCreateInputSchema';
import { PostCreateNestedManyWithoutAuthorInputSchema } from './PostCreateNestedManyWithoutAuthorInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableCreateEnvelopeInputSchema),z.lazy(() => AddressCreateInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
