import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async create(userCreateInput: Prisma.UserCreateInput) {
		try {
			const user = await this.prisma.user.create({
				data: userCreateInput,
			});

			return user;
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				if (error.code === 'P2002') {
					throw new BadRequestException('Email already exists');
				}
			}

			throw new BadRequestException(error);
		}
	}

	async findAll() {
		return this.prisma.user.findMany();
	}

	async findOne(id: string) {
		return this.prisma.user.findUnique({ where: { id } });
	}

	async update(id: string, updateUserInput: Prisma.UserUpdateInput) {
		return this.prisma.user.update({
			where: { id },
			data: updateUserInput,
		});
	}

	async remove(id: string) {
		return this.prisma.user.delete({ where: { id } });
	}

	async findOneByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email },
		});
	}
}
