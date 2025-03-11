import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutPostsNestedInputSchema } from './UserUpdateOneRequiredWithoutPostsNestedInputSchema';
import { CommentUpdateManyWithoutPostNestedInputSchema } from './CommentUpdateManyWithoutPostNestedInputSchema';

export const PostUpdateInputSchema: z.ZodType<Prisma.PostUpdateInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  comments: z.lazy(() => CommentUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export default PostUpdateInputSchema;
