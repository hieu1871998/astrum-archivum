import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CommentCountOrderByAggregateInputSchema: z.ZodType<Prisma.CommentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CommentCountOrderByAggregateInputSchema;
