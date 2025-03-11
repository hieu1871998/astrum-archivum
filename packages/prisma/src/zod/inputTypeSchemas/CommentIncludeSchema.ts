import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CommentIncludeSchema: z.ZodType<Prisma.CommentInclude> = z.object({
}).strict()

export default CommentIncludeSchema;
