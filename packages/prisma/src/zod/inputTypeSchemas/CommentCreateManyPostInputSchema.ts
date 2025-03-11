import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentCreateManyPostInputSchema: z.ZodType<Prisma.CommentCreateManyPostInput> = z.object({
  id: z.string().optional(),
  comment: z.string()
}).strict();

export default CommentCreateManyPostInputSchema;
