import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutPostInput> = z.object({
  id: z.string().optional(),
  comment: z.string()
}).strict();

export default CommentUncheckedCreateWithoutPostInputSchema;
