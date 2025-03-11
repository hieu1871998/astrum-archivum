import { Module } from '@nestjs/common';

import { TransactionsResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';

import { PrismaService } from '@/common/prisma/prisma.service';

@Module({
	providers: [TransactionsResolver, TransactionsService, PrismaService],
	exports: [TransactionsService],
})
export class TransactionsModule {}
