import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentCreateManyInputSchema: z.ZodType<Prisma.CommentCreateManyInput> = z.object({
  id: z.string().optional(),
  comment: z.string(),
  postId: z.string()
}).strict();

export default CommentCreateManyInputSchema;
