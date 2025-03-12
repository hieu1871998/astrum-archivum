import { UseGuards } from '@nestjs/common';
import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';

import { CurrentUser } from '../auth/auth.decorators';
import { GqlAuthGuard } from '../auth/gql.guard';
import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';
import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './transactions.service';

@Resolver(() => Transaction)
@UseGuards(GqlAuthGuard)
export class TransactionsResolver {
	constructor(private readonly transactionsService: TransactionsService) {}

	@Mutation(() => Transaction)
	async createTransaction(
		@Args('createTransactionInput')
		createTransactionInput: CreateTransactionInput,
		@CurrentUser() user: User,
	) {
		return this.transactionsService.create(createTransactionInput, user);
	}

	@Query(() => [Transaction], { name: 'transactions' })
	async findAll() {
		return this.transactionsService.findAll();
	}

	@Query(() => Transaction, { name: 'transaction' })
	async findOne(@Args('id', { type: () => Int }) id: string) {
		return this.transactionsService.findOne(id);
	}

	@Mutation(() => Transaction)
	async updateTransaction(
		@Args('updateTransactionInput')
		updateTransactionInput: UpdateTransactionInput,
	) {
		return this.transactionsService.update(
			updateTransactionInput.id,
			updateTransactionInput,
		);
	}

	@Mutation(() => Transaction)
	async removeTransaction(@Args('id', { type: () => ID }) id: string) {
		return this.transactionsService.remove(id);
	}

	@Query(() => [Transaction], { name: 'userTransactions' })
	async findAllByUserId(@Args('id', { type: () => ID }) id: string) {
		return this.transactionsService.findAllByUserId(id);
	}

	@Query(() => [Transaction], { name: 'accountTransactions' })
	async findAllByAccountId(@Args('id', { type: () => ID }) id: string) {
		return this.transactionsService.findAllByAccountId(id);
	}
}
