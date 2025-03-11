import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
	Currency,
	RecurrenceType,
	Transaction as TransactionModel,
	TransactionType,
} from '@prisma/client';

@ObjectType()
export class Transaction implements TransactionModel {
	@Field(() => ID, { description: 'Transaction ID' })
	id: string;

	@Field(() => ID, { description: 'Account ID' })
	accountId: string;

	@Field(() => Int, { description: 'Transaction amount' })
	amount: number;

	@Field(() => ID, { description: 'Category ID' })
	categoryId: string | null;

	@Field(() => Date, { description: 'Creation date' })
	createdAt: Date;

	@Field(() => Currency)
	currency: Currency;

	@Field(() => String, { nullable: true, description: 'Custom icon' })
	customIcon: string | null;

	@Field(() => Date, { description: 'Transaction date' })
	date: Date;

	@Field(() => String, {
		nullable: true,
		description: 'Transaction description',
	})
	description: string | null;

	@Field(() => String, { nullable: true, description: 'Transaction notes' })
	notes: string | null;

	@Field(() => RecurrenceType, { description: 'Recurring transaction ID' })
	recurrence: RecurrenceType;

	@Field(() => [String], { description: 'Recurring transaction ID' })
	tagIds: string[];

	@Field(() => TransactionType, { description: 'Transaction type' })
	type: TransactionType;

	@Field(() => Date, { description: 'Last updated date' })
	updatedAt: Date;

	@Field(() => ID, { description: 'User ID' })
	userId: string;
}

registerEnumType(RecurrenceType, {
	name: 'RecurrenceType',
	description: 'Recurrence type for transactions',
});

registerEnumType(TransactionType, {
	name: 'TransactionType',
	description: 'Type of transaction',
});
