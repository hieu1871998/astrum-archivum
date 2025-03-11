import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentCreateNestedManyWithoutPostInputSchema } from './CommentCreateNestedManyWithoutPostInputSchema';

export const PostCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export default PostCreateWithoutAuthorInputSchema;
