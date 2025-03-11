import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { CreateAccountInput } from './create-account.input';

@InputType()
export class UpdateAccountInput
	extends PartialType(CreateAccountInput)
	implements Prisma.AccountUpdateInput
{
	@Field(() => String)
	id: string;
}
