import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PostCreateManyAuthorInputSchema: z.ZodType<Prisma.PostCreateManyAuthorInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  body: z.string()
}).strict();

export default PostCreateManyAuthorInputSchema;
