import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputSchema } from './UserCreateNestedOneWithoutPostsInputSchema';
import { CommentCreateNestedManyWithoutPostInputSchema } from './CommentCreateNestedManyWithoutPostInputSchema';

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  body: z.string(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
  comments: z.lazy(() => CommentCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export default PostCreateInputSchema;
