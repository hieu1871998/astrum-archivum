import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class TransactionsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createTransactionInput: CreateTransactionInput, user: User) {
		const { accountId, ...input } = createTransactionInput;

		return this.prisma.transaction.create({
			data: {
				...input,
				account: {
					connect: {
						id: accountId,
					},
				},
				user: {
					connect: {
						id: user.id,
					},
				},
			},
		});
	}

	async findAll() {
		return this.prisma.transaction.findMany();
	}

	async findOne(id: string) {
		return this.prisma.transaction.findUnique({ where: { id } });
	}

	async update(id: string, updateTransactionInput: UpdateTransactionInput) {
		const { accountId: _accountId, ...input } = updateTransactionInput;

		return this.prisma.transaction.update({
			where: { id },
			data: input,
		});
	}

	async remove(id: string) {
		return this.prisma.transaction.delete({ where: { id } });
	}

	async findAllByUserId(userId: string) {
		return this.prisma.transaction.findMany({
			where: { userId },
			include: {
				category: true,
				tags: true,
				account: true,
			},
		});
	}

	async findAllByAccountId(accountId: string) {
		return this.prisma.transaction.findMany({
			where: { accountId },
			include: {
				category: true,
				tags: true,
			},
		});
	}
}
