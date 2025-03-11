import { Injectable } from '@nestjs/common';

import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class AccountsService {
	constructor(private readonly prisma: PrismaService) {}

	create(createAccountInput: CreateAccountInput) {
		return this.prisma.account.create({ data: createAccountInput });
	}

	findAll() {
		return `This action returns all accounts`;
	}

	findOne(id: number) {
		return `This action returns a #${id} account`;
	}

	update(id: string, updateAccountInput: UpdateAccountInput) {
		return `This action updates a #${id} account`;
	}

	remove(id: number) {
		return `This action removes a #${id} account`;
	}
}
