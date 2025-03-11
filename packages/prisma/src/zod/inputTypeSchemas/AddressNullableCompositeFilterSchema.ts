import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressObjectEqualityInputSchema } from './AddressObjectEqualityInputSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';

export const AddressNullableCompositeFilterSchema: z.ZodType<Prisma.AddressNullableCompositeFilter> = z.object({
  equals: z.lazy(() => AddressObjectEqualityInputSchema).optional().nullable(),
  is: z.lazy(() => AddressWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AddressWhereInputSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export default AddressNullableCompositeFilterSchema;
