import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  authorId: z.string()
}).strict();

export default PostCreateManyInputSchema;
