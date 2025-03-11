import { UserCreateInputSchema } from '@astranova/validations';
import { UsePipes } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

import { ZodValidationPipe } from '@/common/pipes/zod.pipe';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation(() => User)
	@UsePipes(new ZodValidationPipe(UserCreateInputSchema))
	createUser(
		@Args('createUserInput', { type: () => CreateUserInput })
		createUserInput: CreateUserInput,
	) {
		return this.usersService.create(createUserInput);
	}

	@Query(() => [User], { name: 'users' })
	findAll() {
		return this.usersService.findAll();
	}

	@Query(() => User, { name: 'user' })
	findOne(@Args('id', { type: () => String }) id: string) {
		return this.usersService.findOne(id);
	}

	@Mutation(() => User)
	updateUser(
		@Args('id', { type: () => String }) id: string,
		@Args('updateUserInput', { type: () => UpdateUserInput })
		updateUserInput: UpdateUserInput,
	) {
		return this.usersService.update(id, updateUserInput);
	}

	@Mutation(() => User)
	removeUser(@Args('id', { type: () => String }) id: string) {
		return this.usersService.remove(id);
	}
}
