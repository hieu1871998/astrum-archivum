import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateUserInput implements Prisma.UserCreateInput {
	@Field(() => String)
	email: string;

	@Field(() => String)
	name?: string;

	@Field(() => String)
	password: string;
}
