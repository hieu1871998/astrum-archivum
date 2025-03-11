import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentWhereInputSchema } from './CommentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { PostScalarRelationFilterSchema } from './PostScalarRelationFilterSchema';
import { PostWhereInputSchema } from './PostWhereInputSchema';

export const CommentWhereUniqueInputSchema: z.ZodType<Prisma.CommentWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentWhereInputSchema),z.lazy(() => CommentWhereInputSchema).array() ]).optional(),
  comment: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  post: z.union([ z.lazy(() => PostScalarRelationFilterSchema),z.lazy(() => PostWhereInputSchema) ]).optional(),
}).strict());

export default CommentWhereUniqueInputSchema;
