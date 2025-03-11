import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressSelectSchema } from '../inputTypeSchemas/AddressSelectSchema';

export const AddressArgsSchema: z.ZodType<Prisma.AddressDefaultArgs> = z.object({
  select: z.lazy(() => AddressSelectSchema).optional(),
}).strict();

export default AddressArgsSchema;
