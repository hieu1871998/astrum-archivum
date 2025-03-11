import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PostCreateNestedOneWithoutCommentsInputSchema } from './PostCreateNestedOneWithoutCommentsInputSchema';

export const CommentCreateInputSchema: z.ZodType<Prisma.CommentCreateInput> = z.object({
  id: z.string().optional(),
  comment: z.string(),
  post: z.lazy(() => PostCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export default CommentCreateInputSchema;
