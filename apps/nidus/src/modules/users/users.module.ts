import { Module } from '@nestjs/common';

import { AccountsModule } from '../accounts/accounts.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

import { PrismaService } from '@/common/prisma/prisma.service';

@Module({
	imports: [AccountsModule, TransactionsModule],
	providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
