import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PostIncludeSchema } from '../inputTypeSchemas/PostIncludeSchema'
import { PostWhereUniqueInputSchema } from '../inputTypeSchemas/PostWhereUniqueInputSchema'
import { PostCreateInputSchema } from '../inputTypeSchemas/PostCreateInputSchema'
import { PostUncheckedCreateInputSchema } from '../inputTypeSchemas/PostUncheckedCreateInputSchema'
import { PostUpdateInputSchema } from '../inputTypeSchemas/PostUpdateInputSchema'
import { PostUncheckedUpdateInputSchema } from '../inputTypeSchemas/PostUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CommentArgsSchema } from "../outputTypeSchemas/CommentArgsSchema"
import { PostCountOutputTypeArgsSchema } from "../outputTypeSchemas/PostCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PostSelectSchema: z.ZodType<Prisma.PostSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  title: z.boolean().optional(),
  body: z.boolean().optional(),
  authorId: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CommentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PostCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PostUpsertArgsSchema: z.ZodType<Prisma.PostUpsertArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: z.lazy(() => PostIncludeSchema).optional(),
  where: PostWhereUniqueInputSchema,
  create: z.union([ PostCreateInputSchema,PostUncheckedCreateInputSchema ]),
  update: z.union([ PostUpdateInputSchema,PostUncheckedUpdateInputSchema ]),
}).strict() ;

export default PostUpsertArgsSchema;
