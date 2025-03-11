import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AccountsService } from './accounts.service';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account } from './entities/account.entity';

@Resolver(() => Account)
export class AccountsResolver {
	constructor(private readonly accountsService: AccountsService) {}

	@Mutation(() => Account)
	createAccount(
		@Args('createAccountInput', { type: () => CreateAccountInput })
		createAccountInput: CreateAccountInput,
	) {
		return this.accountsService.create(createAccountInput);
	}

	@Query(() => [Account], { name: 'accounts' })
	findAll() {
		return this.accountsService.findAll();
	}

	@Query(() => Account, { name: 'account' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.accountsService.findOne(id);
	}

	@Mutation(() => Account)
	updateAccount(
		@Args('id') id: string,
		@Args('updateAccountInput', { type: () => UpdateAccountInput })
		updateAccountInput: UpdateAccountInput,
	) {
		return this.accountsService.update(id, updateAccountInput);
	}

	@Mutation(() => Account)
	removeAccount(@Args('id', { type: () => Int }) id: number) {
		return this.accountsService.remove(id);
	}
}
