import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { PostArgsSchema } from "../outputTypeSchemas/PostArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  posts: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
