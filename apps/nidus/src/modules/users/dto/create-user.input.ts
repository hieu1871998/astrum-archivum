import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateUserInput implements Prisma.UserCreateInput {
	@Field(() => String, { description: 'User email' })
	email: string;

	@Field(() => String, { description: 'User name' })
	name?: string;

	@Field(() => String, { description: 'User password' })
	password: string;
}
