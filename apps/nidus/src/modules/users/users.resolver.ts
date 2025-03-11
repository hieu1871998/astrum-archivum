import {
	Args,
	ID,
	Mutation,
	Parent,
	Query,
	ResolveField,
	Resolver,
} from '@nestjs/graphql';

import { AccountsService } from '../accounts/accounts.service';
import { TransactionsService } from '../transactions/transactions.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
	constructor(
		private readonly usersService: UsersService,
		private readonly accountsService: AccountsService,
		private readonly transactionsService: TransactionsService,
	) {}

	@Mutation(() => User)
	async createUser(
		@Args('createUserInput', { type: () => CreateUserInput })
		createUserInput: CreateUserInput,
	) {
		return this.usersService.create(createUserInput);
	}

	@Query(() => [User], { name: 'users' })
	async findAll() {
		return this.usersService.findAll();
	}

	@Query(() => User, { name: 'user' })
	async findOne(@Args('id', { type: () => ID }) id: string) {
		return this.usersService.findOne(id);
	}

	@Mutation(() => User)
	async updateUser(
		@Args('updateUserInput', { type: () => UpdateUserInput })
		updateUserInput: UpdateUserInput,
	) {
		return this.usersService.update(updateUserInput.id, updateUserInput);
	}

	@Mutation(() => User)
	async removeUser(@Args('id', { type: () => ID }) id: string) {
		return this.usersService.remove(id);
	}

	@ResolveField()
	async accounts(@Parent() user: User) {
		const { id } = user;

		return this.accountsService.findAllByUserId(id);
	}

	@ResolveField()
	async transactions(@Parent() user: User) {
		const { id } = user;

		return this.transactionsService.findAllByUserId(id);
	}
}
