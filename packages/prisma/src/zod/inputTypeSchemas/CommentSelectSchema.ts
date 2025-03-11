import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PostArgsSchema } from "../outputTypeSchemas/PostArgsSchema"

export const CommentSelectSchema: z.ZodType<Prisma.CommentSelect> = z.object({
  id: z.boolean().optional(),
  comment: z.boolean().optional(),
  postId: z.boolean().optional(),
  post: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
}).strict()

export default CommentSelectSchema;
