import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { AddressNullableCompositeFilterSchema } from './AddressNullableCompositeFilterSchema';
import { AddressObjectEqualityInputSchema } from './AddressObjectEqualityInputSchema';
import { PostListRelationFilterSchema } from './PostListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableCompositeFilterSchema),z.lazy(() => AddressObjectEqualityInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
