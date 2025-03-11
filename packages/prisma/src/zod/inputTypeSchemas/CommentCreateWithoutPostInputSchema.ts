import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentCreateWithoutPostInputSchema: z.ZodType<Prisma.CommentCreateWithoutPostInput> = z.object({
  id: z.string().optional(),
  comment: z.string()
}).strict();

export default CommentCreateWithoutPostInputSchema;
