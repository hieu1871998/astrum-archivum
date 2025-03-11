import {
	Account as AccountModel,
	AccountType,
	Currency,
} from '@astranova/prisma';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

registerEnumType(Currency, { name: 'Currency' });

registerEnumType(AccountType, { name: 'AccountType' });

@ObjectType()
export class Account implements AccountModel {
	@Field(() => ID, { description: 'Account identifier' })
	id: string;

	@Field(() => Date, { description: 'Creation date' })
	createdAt: Date;

	@Field(() => Currency, { description: 'Account currency' })
	currency: Currency;

	@Field(() => String, { description: 'Account name' })
	name: string;

	@Field(() => AccountType, { description: 'Account type' })
	type: AccountType;

	@Field(() => Date, { description: 'Last updated date' })
	updatedAt: Date;

	@Field(() => ID, { description: 'User identifier' })
	userId: string;
}
