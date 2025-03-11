import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PostCountOutputTypeSelectSchema: z.ZodType<Prisma.PostCountOutputTypeSelect> = z.object({
  comments: z.boolean().optional(),
}).strict();

export default PostCountOutputTypeSelectSchema;
