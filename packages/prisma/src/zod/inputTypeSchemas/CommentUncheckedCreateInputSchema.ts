import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentUncheckedCreateInputSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  comment: z.string(),
  postId: z.string()
}).strict();

export default CommentUncheckedCreateInputSchema;
