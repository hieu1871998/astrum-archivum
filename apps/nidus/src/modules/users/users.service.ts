import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async create(userCreateInput: Prisma.UserCreateInput) {
		return this.prisma.user.create({
			data: userCreateInput,
		});
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
}
