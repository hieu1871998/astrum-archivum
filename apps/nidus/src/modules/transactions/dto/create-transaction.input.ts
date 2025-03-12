import { Field, Float, InputType } from '@nestjs/graphql';
import {
	Currency,
	Prisma,
	RecurrenceType,
	TransactionType,
} from '@prisma/client';

@InputType()
export class CreateTransactionInput implements Prisma.TransactionCreateInput {
	@Field(() => String)
	accountId: string;

	@Field(() => Float)
	amount: number;

	@Field(() => CreateCategoryInput)
	category?: Prisma.CategoryCreateNestedOneWithoutTransactionsInput;

	@Field(() => Currency)
	currency: Currency;

	@Field(() => String, { nullable: true })
	customIcon?: string | null;

	@Field(() => Date)
	date: Date;

	@Field(() => String, { nullable: true })
	description?: string | null;

	@Field(() => String, { nullable: true })
	notes?: string | null;

	@Field(() => RecurrenceType)
	recurrence?: RecurrenceType;

	@Field(() => TransactionType)
	type: TransactionType;

	account: Prisma.AccountCreateNestedOneWithoutTransactionsInput;

	user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
}

@InputType()
export class CreateCategoryInput implements Prisma.CategoryCreateInput {
	@Field(() => String)
	name: string;

	@Field(() => String, { nullable: true })
	icon?: string | null;
}
