import { User as UserModel } from '@astranova/prisma';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Account } from '@/modules/accounts/entities/account.entity';
import { Budget } from '@/modules/budgets/entities/budget.entity';
import { Transaction } from '@/modules/transactions/entities/transaction.entity';

@ObjectType()
export class User implements UserModel {
	@Field(() => ID, { description: 'User identifier' })
	id: string;

	@Field(() => String, { description: 'User email' })
	email: string;

	@Field(() => String, { nullable: true, description: 'User name' })
	name: string | null;

	@Field(() => String, { description: 'User password' })
	password: string;

	@Field(() => Date, { description: 'Creation date' })
	createdAt: Date;

	@Field(() => Date, { description: 'Last updated date' })
	updatedAt: Date;

	@Field(() => [Account], { description: 'User accounts' })
	accounts: Account[];

	@Field(() => [Transaction], { description: 'User transactions' })
	transactions: Transaction[];

	@Field(() => [Budget], { description: 'User budgets' })
	budgets: Budget[];
}
