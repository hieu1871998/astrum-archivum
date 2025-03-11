import {
	Account as AccountModel,
	AccountType,
	Currency,
} from '@astranova/prisma';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

registerEnumType(Currency, { name: 'Currency' });

registerEnumType(AccountType, { name: 'AccountType' });

@ObjectType()
export class Account implements AccountModel {
	@Field(() => String, { description: 'Account identifier' })
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

	@Field(() => String, { description: 'User identifier' })
	userId: string;
}
