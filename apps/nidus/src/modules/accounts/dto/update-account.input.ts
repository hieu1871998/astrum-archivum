import { Field, InputType } from '@nestjs/graphql';
import { Currency, Prisma } from '@prisma/client';

@InputType()
export class UpdateAccountInput implements Prisma.AccountUpdateInput {
	@Field(() => Currency)
	currency?: Currency;

	@Field(() => String)
	name?: string;
}
