import { Field, InputType } from '@nestjs/graphql';
import { AccountType, Currency, Prisma } from '@prisma/client';

@InputType()
export class CreateAccountInput implements Prisma.AccountCreateInput {
	@Field(() => Currency)
	currency: Currency;

	@Field(() => String)
	name: string;

	@Field(() => AccountType)
	type: AccountType;

	user: Prisma.UserCreateNestedOneWithoutAccountsInput;
}
