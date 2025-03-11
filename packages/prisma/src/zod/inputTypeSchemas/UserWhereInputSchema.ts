import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { AddressNullableCompositeFilterSchema } from './AddressNullableCompositeFilterSchema';
import { AddressObjectEqualityInputSchema } from './AddressObjectEqualityInputSchema';
import { PostListRelationFilterSchema } from './PostListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableCompositeFilterSchema),z.lazy(() => AddressObjectEqualityInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
