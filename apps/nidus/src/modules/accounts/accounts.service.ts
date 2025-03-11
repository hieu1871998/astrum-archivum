import { Injectable } from '@nestjs/common';

import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class AccountsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createAccountInput: CreateAccountInput) {
		return this.prisma.account.create({ data: createAccountInput });
	}

	async findAll() {
		return this.prisma.account.findMany();
	}

	async findOne(id: string) {
		return this.prisma.account.findUnique({
			where: { id },
		});
	}

	async update(id: string, updateAccountInput: UpdateAccountInput) {
		return this.prisma.account.update({
			where: { id },
			data: updateAccountInput,
		});
	}

	async remove(id: string) {
		return this.prisma.account.delete({
			where: { id },
		});
	}

	async findAllByUserId(userId: string) {
		return this.prisma.account.findMany({
			where: { userId },
			include: {
				transactions: {
					include: {
						category: true,
						tags: true,
					},
				},
			},
		});
	}
}
