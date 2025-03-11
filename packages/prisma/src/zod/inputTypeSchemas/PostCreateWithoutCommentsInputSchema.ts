import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputSchema } from './UserCreateNestedOneWithoutPostsInputSchema';

export const PostCreateWithoutCommentsInputSchema: z.ZodType<Prisma.PostCreateWithoutCommentsInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema)
}).strict();

export default PostCreateWithoutCommentsInputSchema;
