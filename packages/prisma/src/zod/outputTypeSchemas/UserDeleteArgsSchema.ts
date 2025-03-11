import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { PostArgsSchema } from "../outputTypeSchemas/PostArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  posts: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export default UserDeleteArgsSchema;
