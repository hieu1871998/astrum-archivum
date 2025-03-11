import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateManyInputSchema } from '../inputTypeSchemas/CommentCreateManyInputSchema'

export const CommentCreateManyArgsSchema: z.ZodType<Prisma.CommentCreateManyArgs> = z.object({
  data: z.union([ CommentCreateManyInputSchema,CommentCreateManyInputSchema.array() ]),
}).strict() ;

export default CommentCreateManyArgsSchema;
