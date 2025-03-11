import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutPostInputSchema } from './CommentUncheckedCreateNestedManyWithoutPostInputSchema';

export const PostUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export default PostUncheckedCreateWithoutAuthorInputSchema;
