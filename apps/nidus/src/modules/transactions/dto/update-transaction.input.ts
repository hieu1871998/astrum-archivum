import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { CreateTransactionInput } from './create-transaction.input';

@InputType()
export class UpdateTransactionInput
	extends PartialType(CreateTransactionInput)
	implements Prisma.TransactionUpdateInput
{
	@Field(() => String)
	id: string;
}
