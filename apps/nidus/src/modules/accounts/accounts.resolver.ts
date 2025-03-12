import { UseGuards } from '@nestjs/common';
import {
	Args,
	ID,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver,
} from '@nestjs/graphql';
import { User } from '@prisma/client';

import { CurrentUser } from '../auth/auth.decorators';
import { GqlAuthGuard } from '../auth/gql.guard';
import { Transaction } from '../transactions/entities/transaction.entity';
import { TransactionsService } from '../transactions/transactions.service';
import { AccountsService } from './accounts.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account } from './entities/account.entity';

@Resolver(() => Account)
@UseGuards(GqlAuthGuard)
export class AccountsResolver {
	constructor(
		private readonly accountsService: AccountsService,
		private readonly transactionsService: TransactionsService,
	) {}

	@Mutation(() => Account)
	async createAccount(
		@Args('createAccountInput', { type: () => CreateAccountInput })
		createAccountInput: CreateAccountInput,
		@CurrentUser() user: User,
	) {
		createAccountInput.user = {
			connect: {
				id: user.id,
			},
		};

		return this.accountsService.create(createAccountInput);
	}

	@Query(() => [Account], { name: 'accounts' })
	async findAll() {
		return this.accountsService.findAll();
	}

	@Query(() => Account, { name: 'account' })
	async findOne(@Args('id', { type: () => ID }) id: string) {
		return this.accountsService.findOne(id);
	}

	@Mutation(() => Account)
	async updateAccount(
		@Args('updateAccountInput', { type: () => UpdateAccountInput })
		updateAccountInput: UpdateAccountInput,
	) {
		return this.accountsService.update(
			updateAccountInput.id,
			updateAccountInput,
		);
	}

	@Mutation(() => Account)
	async removeAccount(@Args('id', { type: () => ID }) id: string) {
		return this.accountsService.remove(id);
	}

	@ResolveField(() => [Transaction])
	async transactions(@Parent() account: Account) {
		const { id } = account;

		return this.transactionsService.findAllByAccountId(id);
	}
}
