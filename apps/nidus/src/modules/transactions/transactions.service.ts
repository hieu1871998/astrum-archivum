import { Injectable } from '@nestjs/common';

import { CreateTransactionInput } from './dto/create-transaction.input';
import { UpdateTransactionInput } from './dto/update-transaction.input';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class TransactionsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createTransactionInput: CreateTransactionInput) {
		return this.prisma.transaction.create({
			data: createTransactionInput,
		});
	}

	async findAll() {
		return this.prisma.transaction.findMany();
	}

	async findOne(id: string) {
		return this.prisma.transaction.findUnique({ where: { id } });
	}

	async update(id: string, updateTransactionInput: UpdateTransactionInput) {
		return this.prisma.transaction.update({
			where: { id },
			data: updateTransactionInput,
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
