import { Module } from '@nestjs/common';

import { TransactionsModule } from '../transactions/transactions.module';
import { AccountsResolver } from './accounts.resolver';
import { AccountsService } from './accounts.service';

import { PrismaService } from '@/common/prisma/prisma.service';

@Module({
	imports: [TransactionsModule],
	providers: [AccountsResolver, AccountsService, PrismaService],
	exports: [AccountsService],
})
export class AccountsModule {}
